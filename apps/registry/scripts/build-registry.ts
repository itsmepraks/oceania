/*
 * Builds shadcn-compatible registry JSON files at apps/registry/public/r/<name>.json
 * Each component in packages/ui/src/components becomes a registry item that can be
 * installed via: npx shadcn@latest add https://<host>/r/<name>.json
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..", "..");
const uiDir = join(root, "packages", "ui", "src");
const outDir = join(__dirname, "..", "public", "r");
const REGISTRY_BASE_URL = process.env.OCEANIA_REGISTRY_URL ?? "http://localhost:3333/r";

interface RegistryItem {
  $schema: string;
  name: string;
  type: "registry:ui" | "registry:lib" | "registry:style";
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  docs?: string;
  files: { path: string; content: string; type: string; target?: string }[];
}

const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";

const read = (rel: string) =>
  readFileSync(join(uiDir, rel), "utf8").replace(
    /from "\.\.\/lib\/utils"/g,
    'from "@/lib/utils"',
  );

const ui = (
  name: string,
  filename: string,
  dependencies: string[],
  title: string,
  description: string,
): RegistryItem => ({
  $schema: SCHEMA,
  name,
  type: "registry:ui",
  title,
  description,
  dependencies,
  registryDependencies: [
    `${REGISTRY_BASE_URL}/utils.json`,
    `${REGISTRY_BASE_URL}/tokens.json`,
  ],
  docs: "Import `app/oceania-tokens.css` from your global stylesheet if the CLI does not add it automatically.",
  files: [
    {
      path: `components/ui/${filename}`,
      content: read(`components/${filename}`),
      type: "registry:ui",
      target: `@ui/${filename}`,
    },
  ],
});

const items: RegistryItem[] = [
  {
    $schema: SCHEMA,
    name: "utils",
    type: "registry:lib",
    title: "Utilities",
    description: "Shared className merge helper for Oceania components.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        content: readFileSync(join(uiDir, "lib", "utils.ts"), "utf8"),
        type: "registry:lib",
        target: "@lib/utils.ts",
      },
    ],
  },
  {
    $schema: SCHEMA,
    name: "tokens",
    type: "registry:style",
    title: "Oceania tokens",
    description: "Figma-sourced Oceania CSS variables for color, typography, radii, and control sizing.",
    docs: "Add `@import \"./oceania-tokens.css\";` to your app/global stylesheet after installing.",
    files: [
      {
        path: "styles/oceania-tokens.css",
        content: readFileSync(join(uiDir, "styles", "tokens.css"), "utf8"),
        type: "registry:style",
        target: "app/oceania-tokens.css",
      },
    ],
  },
  ui("button", "button.tsx", [
    "@radix-ui/react-slot",
    "class-variance-authority",
  ], "Button", "Primary, secondary, lite, text, and destructive button variants."),
  ui("input", "input.tsx", ["class-variance-authority"], "Input", "Text input and field wrapper with Figma states."),
  ui("textarea", "textarea.tsx", ["class-variance-authority"], "Textarea", "Multi-line text input with Oceania borders and states."),
  ui("checkbox", "checkbox.tsx", ["@radix-ui/react-checkbox"], "Checkbox", "Radix checkbox styled for Oceania selected, mixed, and disabled states."),
  ui("radio-group", "radio-group.tsx", ["@radix-ui/react-radio-group"], "Radio group", "Accessible radio group and radio item primitives."),
  ui("switch", "switch.tsx", [
    "@radix-ui/react-switch",
    "class-variance-authority",
  ], "Switch", "Filled and outlined toggle controls."),
  ui("slider", "slider.tsx", ["@radix-ui/react-slider"], "Slider", "Single or range slider with optional value bubble."),
  ui("select", "select.tsx", ["@radix-ui/react-select"], "Select", "Single-selection dropdown built on Radix Select."),
  ui("tabs", "tabs.tsx", [
    "@radix-ui/react-tabs",
    "class-variance-authority",
  ], "Tabs", "Horizontal and vertical tab primitives."),
  ui("breadcrumb", "breadcrumb.tsx", ["@radix-ui/react-slot"], "Breadcrumb", "Semantic breadcrumb navigation with active page state."),
  ui("pagination", "pagination.tsx", [], "Pagination", "Numeric pagination controls with previous and next links."),
  ui("tooltip", "tooltip.tsx", ["@radix-ui/react-tooltip"], "Tooltip", "Radix tooltip styled with Oceania dark blue surface."),
];

mkdirSync(outDir, { recursive: true });

for (const item of items) {
  const outPath = join(outDir, `${item.name}.json`);
  writeFileSync(outPath, JSON.stringify(item, null, 2));
  console.log(`✓ wrote ${outPath.replace(`${root}/`, "")}`);
}

const index = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "oceania",
  homepage: REGISTRY_BASE_URL.replace(/\/r$/, ""),
  items: items.map((i) => ({
    name: i.name,
    type: i.type,
    title: i.title,
    description: i.description,
  })),
};
writeFileSync(join(outDir, "registry.json"), JSON.stringify(index, null, 2));
console.log(`✓ wrote ${join(outDir, "registry.json").replace(`${root}/`, "")}`);
console.log(`\nDone. ${items.length} registry items generated.`);
