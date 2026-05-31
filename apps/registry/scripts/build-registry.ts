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
