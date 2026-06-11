"use client";

import * as React from "react";
import {
  Button,
  Input,
  InputField,
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Slider,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@oceania/ui";

const defaultOrigin = "https://oceania.praks.me";

const navGroups = [
  {
    title: "Start",
    items: [
      { index: "00", label: "Overview", href: "#overview" },
      { index: "01", label: "Install", href: "#install" },
      { index: "02", label: "Tokens", href: "#tokens" },
    ],
  },
  {
    title: "Components",
    items: [
      { index: "03", label: "Button", href: "#button" },
      { index: "04", label: "Inputs", href: "#inputs" },
      { index: "05", label: "Choices", href: "#choices" },
      { index: "06", label: "Slider", href: "#slider" },
      { index: "07", label: "Select", href: "#select" },
      { index: "08", label: "Navigation", href: "#navigation" },
      { index: "09", label: "Tooltip", href: "#tooltip" },
    ],
  },
];

const installItems = [
  "button",
  "input",
  "textarea",
  "checkbox",
  "radio-group",
  "switch",
  "slider",
  "select",
  "tabs",
  "breadcrumb",
  "pagination",
  "tooltip",
];

const tokenSwatches = [
  ["Action", "--oc-primary", "Command color"],
  ["Active", "--oc-primary-active", "Pressed state"],
  ["Ink", "--oc-text-900", "Primary copy"],
  ["Signal", "--oc-error-500", "Exception state"],
  ["Wash", "--oc-primary-50", "Soft field"],
  ["Caption", "--oc-text-500", "Secondary copy"],
] as const;

function preventDemoNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

function CopyLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block min-w-0 max-w-full overflow-x-auto whitespace-nowrap border border-[hsl(var(--oc-blue2-200))] bg-[hsl(var(--oc-text-900))] px-3 py-2 font-mono text-xs text-[hsl(var(--oc-light))]">
      {children}
    </code>
  );
}

function SpecSection({
  id,
  index,
  kicker,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-t border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))]"
    >
      <div className="grid gap-0 lg:grid-cols-[154px_minmax(0,1fr)]">
        <div className="border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] p-4 text-[hsl(var(--oc-primary-50))] lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs text-[hsl(var(--oc-blue2-200))]">{index}</p>
          <p className="mt-2 text-xs font-bold uppercase">{kicker}</p>
        </div>
        <div className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 grid gap-3 border-b border-[hsl(var(--oc-text-900))] pb-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(220px,0.28fr)]">
            <h2 className="text-3xl font-semibold leading-tight text-[hsl(var(--oc-text-900))] sm:text-4xl">
              {title}
            </h2>
            <p className="text-sm leading-6 text-[hsl(var(--oc-text-600))]">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function Specimen({
  title,
  command,
  children,
  tone = "light",
}: {
  title: string;
  command?: string;
  children: React.ReactNode;
  tone?: "light" | "dark" | "paper";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={[
        "min-w-0 overflow-hidden border border-[hsl(var(--oc-text-900))]",
        dark
          ? "bg-[hsl(var(--oc-text-900))] text-[hsl(var(--oc-primary-50))]"
          : "bg-white text-[hsl(var(--oc-text-900))]",
        tone === "paper" ? "bg-[hsl(var(--oc-blue2-100))]" : "",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col gap-2 border-b border-[hsl(var(--oc-text-900))] px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
          dark ? "bg-[hsl(var(--oc-text-900))]" : "bg-[hsl(var(--oc-blue2-100))]",
        ].join(" ")}
      >
        <h3 className="text-sm font-bold uppercase">{title}</h3>
        {command ? (
          <code
            className={[
              "max-w-full overflow-x-auto whitespace-nowrap font-mono text-xs",
              dark ? "text-[hsl(var(--oc-blue2-200))]" : "text-[hsl(var(--oc-text-600))]",
            ].join(" ")}
          >
            {command}
          </code>
        ) : null}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function TokenSwatch({
  name,
  token,
  usage,
}: {
  name: string;
  token: string;
  usage: string;
}) {
  return (
    <div className="grid grid-cols-[58px_1fr] border border-[hsl(var(--oc-text-900))] bg-white">
      <div
        className="min-h-20 border-r border-[hsl(var(--oc-text-900))]"
        style={{ backgroundColor: `hsl(var(${token}))` }}
      />
      <div className="min-w-0 p-3">
        <p className="text-sm font-bold uppercase text-[hsl(var(--oc-text-900))]">
          {name}
        </p>
        <p className="mt-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-[hsl(var(--oc-blue1-700))]">
          {token}
        </p>
        <p className="mt-2 text-xs text-[hsl(var(--oc-caption))]">{usage}</p>
      </div>
    </div>
  );
}

function LabHero({ hostLabel }: { hostLabel: string }) {
  return (
    <section
      id="overview"
      className="scroll-mt-8 border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))]"
    >
      <div className="grid min-h-[760px] lg:grid-cols-[154px_minmax(0,1fr)]">
        <div className="hidden border-r border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] text-[hsl(var(--oc-primary-50))] lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-between p-4">
            <div>
              <p className="font-mono text-xs text-[hsl(var(--oc-blue2-200))]">OCN-00</p>
              <p className="mt-3 text-sm font-bold uppercase">Registry lab</p>
            </div>
            <p className="[writing-mode:vertical-rl] font-mono text-xs uppercase text-[hsl(var(--oc-text-300))]">
              editable source / controlled tokens / react
            </p>
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden bg-[linear-gradient(hsl(var(--oc-text-200))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--oc-text-200))_1px,transparent_1px)] bg-[size:28px_28px]">
          <div className="absolute right-4 top-4 hidden border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-blue2-200))] px-3 py-2 font-mono text-xs font-bold text-[hsl(var(--oc-text-900))] sm:block">
            {hostLabel}
          </div>
          <div className="grid gap-8 px-4 py-10 sm:px-6 lg:px-10 lg:py-16 2xl:grid-cols-[minmax(0,0.56fr)_minmax(440px,0.44fr)]">
            <div className="min-w-0">
              <div className="mb-8 inline-flex border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] px-3 py-2 font-mono text-xs font-bold uppercase text-[hsl(var(--oc-primary-50))]">
                shadcn registry / source-owned UI
              </div>
              <h1 className="max-w-full text-[clamp(4.25rem,13vw,9.5rem)] font-bold leading-[0.82] text-[hsl(var(--oc-text-900))]">
                Oceania
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-[hsl(var(--oc-text-800))]">
                A component registry dressed like a specimen catalog. Install editable
                React source, keep the Figma token grammar, and inspect every primitive
                while the registry stays fast to scan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="shadow-[6px_6px_0_hsl(var(--oc-text-900))]">
                  <a href="#install">Start installing</a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-[hsl(var(--oc-primary-50))]"
                >
                  <a href="#button">Inspect specimens</a>
                </Button>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 border border-[hsl(var(--oc-text-900))] bg-white">
                {[
                  ["12", "UI components"],
                  ["02", "Shared assets"],
                  ["14", "Registry files"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={
                      index < 2 ? "border-r border-[hsl(var(--oc-text-900))] p-4" : "p-4"
                    }
                  >
                    <p className="font-mono text-3xl font-bold tabular-nums text-[hsl(var(--oc-text-900))]">
                      {value}
                    </p>
                    <p className="mt-1 text-xs uppercase text-[hsl(var(--oc-text-600))]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 2xl:pt-24">
              <Specimen title="Live specimen" tone="dark">
                <div className="grid gap-5">
                  <div className="border border-[hsl(var(--oc-light))] bg-[hsl(var(--oc-primary-50))] p-4 text-[hsl(var(--oc-text-900))]">
                    <p className="font-mono text-xs uppercase text-[hsl(var(--oc-blue1-700))]">
                      registry receipt
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      Install the source. Keep the system.
                    </h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_150px]">
                      <Input defaultValue="components/ui/button.tsx" />
                      <Button size="sm">Add Button</Button>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["Tokens", "HSL"],
                      ["Runtime", "React"],
                      ["Install", "CLI"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border border-[hsl(var(--oc-light))] p-3"
                      >
                        <p className="text-xs text-[hsl(var(--oc-text-200))]">{label}</p>
                        <p className="mt-1 text-2xl font-semibold tabular-nums">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger
                        value="preview"
                        className="data-[state=active]:text-[hsl(var(--oc-blue2-200))] data-[state=active]:after:bg-[hsl(var(--oc-blue2-200))]"
                      >
                        Preview
                      </TabsTrigger>
                      <TabsTrigger
                        value="code"
                        className="data-[state=active]:text-[hsl(var(--oc-blue2-200))] data-[state=active]:after:bg-[hsl(var(--oc-blue2-200))]"
                      >
                        Code
                      </TabsTrigger>
                      <TabsTrigger
                        value="tokens"
                        className="data-[state=active]:text-[hsl(var(--oc-blue2-200))] data-[state=active]:after:bg-[hsl(var(--oc-blue2-200))]"
                      >
                        Tokens
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                      <p className="text-sm text-[hsl(var(--oc-text-200))]">
                        Controls are shown as working specimens, not screenshots.
                      </p>
                    </TabsContent>
                    <TabsContent value="code">
                      <p className="font-mono text-xs text-[hsl(var(--oc-blue2-200))]">
                        npx shadcn@latest add ...
                      </p>
                    </TabsContent>
                    <TabsContent value="tokens">
                      <p className="text-sm text-[hsl(var(--oc-text-200))]">
                        Import oceania-tokens.css once in global CSS.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </Specimen>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(true);
  const [tri, setTri] = React.useState<boolean | "indeterminate">("indeterminate");
  const [radio, setRadio] = React.useState("teams");
  const [on, setOn] = React.useState(true);
  const [slider, setSlider] = React.useState([64]);
  const [origin, setOrigin] = React.useState(defaultOrigin);

  React.useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const registryBase = `${origin}/r`;
  const hostLabel = origin.replace(/^https?:\/\//, "").toUpperCase();

  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen bg-[hsl(var(--oc-text-900))] text-[hsl(var(--oc-text-900))]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <nav
          aria-label="Mobile section navigation"
          className="sticky top-0 z-30 border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))]/95 backdrop-blur lg:hidden"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#overview"
              className="text-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-offset-2"
            >
              oceania
            </a>
            <a
              href="#install"
              className="border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-blue2-200))] px-4 py-2 text-xs font-bold uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-offset-2"
            >
              Install
            </a>
          </div>
          <div className="flex gap-2 overflow-x-auto border-t border-[hsl(var(--oc-text-900))] px-4 py-2">
            {navGroups.flatMap((group) =>
              group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap border border-[hsl(var(--oc-text-900))] bg-white px-4 py-2.5 font-mono text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-offset-2"
                >
                  {item.index} {item.label}
                </a>
              )),
            )}
          </div>
        </nav>

        <div className="mx-auto max-w-[1540px] bg-[hsl(var(--oc-primary-50))]">
          <div className="hidden border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))] lg:block">
            <nav
              aria-label="Registry section navigation"
              className="grid grid-cols-[154px_minmax(0,1fr)]"
            >
              <a
                href="#overview"
                className="border-r border-[hsl(var(--oc-text-900))] px-4 py-4 text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-inset"
              >
                oceania
              </a>
              <div className="flex items-stretch overflow-x-auto">
                {navGroups.flatMap((group) =>
                  group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex min-w-32 items-center gap-2 border-r border-[hsl(var(--oc-text-900))] px-4 py-4 text-sm font-bold transition-colors hover:bg-[hsl(var(--oc-blue2-200))] focus-visible:bg-[hsl(var(--oc-blue2-200))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-inset"
                    >
                      <span className="font-mono text-xs text-[hsl(var(--oc-blue1-700))]">
                        {item.index}
                      </span>
                      {item.label}
                    </a>
                  )),
                )}
              </div>
            </nav>
          </div>

          <main id="main-content" tabIndex={-1} className="focus:outline-none">
            <LabHero hostLabel={hostLabel} />

            <SpecSection
              id="install"
              index="01"
              kicker="Install"
              title="A registry page should feel operational."
              description="The install flow stays direct, with commands framed as part of the same token-backed system rather than generic docs filler."
            >
              <div className="grid gap-4 xl:grid-cols-[minmax(0,0.65fr)_minmax(280px,0.35fr)]">
                <Specimen title="Quick start" tone="dark">
                  <div className="space-y-3">
                    <CopyLine>pnpm install</CopyLine>
                    <CopyLine>pnpm --filter @oceania/registry dev</CopyLine>
                    <CopyLine>npx shadcn@latest add {registryBase}/button.json</CopyLine>
                  </div>
                </Specimen>
                <Specimen title="Token import" tone="paper">
                  <p className="text-sm leading-6 text-[hsl(var(--oc-text-800))]">
                    If the CLI does not add the token file automatically, import it from
                    the consuming app global stylesheet.
                  </p>
                  <div className="mt-4">
                    <CopyLine>@import "./oceania-tokens.css";</CopyLine>
                  </div>
                </Specimen>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {installItems.map((item) => (
                  <CopyLine key={item}>
                    npx shadcn@latest add {registryBase}/{item}.json
                  </CopyLine>
                ))}
              </div>
            </SpecSection>

            <SpecSection
              id="tokens"
              index="02"
              kicker="Tokens"
              title="Palette as evidence, not decoration."
              description="The token strip is intentionally blunt: names, variables, and usage hints, all pulled from the Oceania palette."
            >
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {tokenSwatches.map(([name, token, usage]) => (
                  <TokenSwatch key={token} name={name} token={token} usage={usage} />
                ))}
              </div>
            </SpecSection>

            <SpecSection
              id="button"
              index="03"
              kicker="Actions"
              title="Buttons staged like control samples."
              description="The actions are still simple and source-editable, but the page gives them a stronger frame."
            >
              <div className="grid gap-4 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
                <Specimen
                  title="Variant run"
                  command={`npx shadcn@latest add ${registryBase}/button.json`}
                >
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="lite">Lite</Button>
                    <Button variant="text">Text</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </Specimen>
                <Specimen title="Scale and radius" tone="paper">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="lg">Large</Button>
                    <Button size="md">Medium</Button>
                    <Button size="sm">Small</Button>
                    <Button shape="rounded" variant="secondary">
                      Rounded
                    </Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </Specimen>
              </div>
            </SpecSection>

            <SpecSection
              id="inputs"
              index="04"
              kicker="Forms"
              title="Forms get the full inspection table."
              description="Shapes, failure states, captions, and longer text entry are staged together so their border grammar can be compared quickly."
            >
              <div className="grid gap-4">
                <Specimen
                  title="Shape matrix"
                  command={`npx shadcn@latest add ${registryBase}/input.json`}
                >
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-bold uppercase text-[hsl(var(--oc-blue1-700))]">
                        Sharp
                      </p>
                      <Input shape="sharp" placeholder="Workspace name" />
                      <Input shape="sharp" defaultValue="Oceania Labs" />
                      <Input shape="sharp" error defaultValue="Invalid slug" />
                    </div>
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-bold uppercase text-[hsl(var(--oc-blue1-700))]">
                        Cornered
                      </p>
                      <Input shape="cornered" placeholder="Email address" />
                      <Input shape="cornered" defaultValue="team@oceania.dev" />
                      <Input shape="cornered" disabled placeholder="Disabled" />
                    </div>
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-bold uppercase text-[hsl(var(--oc-blue1-700))]">
                        Rounded
                      </p>
                      <Input shape="rounded" placeholder="Search components" />
                      <Input shape="rounded" defaultValue="Button" />
                      <Input shape="rounded" error defaultValue="Missing value" />
                    </div>
                  </div>
                </Specimen>
                <div className="grid gap-4 xl:grid-cols-2">
                  <Specimen title="Field copy" tone="paper">
                    <div className="grid gap-4">
                      <InputField
                        label="Email"
                        placeholder="you@example.com"
                        caption="Used for release notes and registry updates."
                      />
                      <InputField
                        label="Username"
                        defaultValue="jrambo"
                        error
                        errorCaption="Username does not match the workspace."
                      />
                    </div>
                  </Specimen>
                  <Specimen
                    title="Long form"
                    command={`npx shadcn@latest add ${registryBase}/textarea.json`}
                  >
                    <Textarea
                      placeholder="Write implementation notes..."
                      defaultValue="Button variants should remain source-editable after install."
                      rows={6}
                    />
                  </Specimen>
                </div>
              </div>
            </SpecSection>

            <SpecSection
              id="choices"
              index="05"
              kicker="Selection"
              title="Small decisions, visible states."
              description="Checkbox, radio, and switch controls sit in a dark specimen tray so selected and disabled states have more contrast."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <Specimen
                  title="Checkbox"
                  command={`npx shadcn@latest add ${registryBase}/checkbox.json`}
                  tone="dark"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Checkbox
                        aria-label="Selected"
                        checked={checked}
                        onCheckedChange={(value) => setChecked(value)}
                      />
                      Selected
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Checkbox
                        aria-label="Indeterminate"
                        checked={tri}
                        onCheckedChange={setTri}
                      />
                      Indeterminate
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--oc-text-300))]">
                      <Checkbox aria-label="Disabled" disabled />
                      Disabled
                    </div>
                  </div>
                </Specimen>
                <Specimen
                  title="Radio"
                  command={`npx shadcn@latest add ${registryBase}/radio-group.json`}
                  tone="dark"
                >
                  <RadioGroup
                    value={radio}
                    onValueChange={setRadio}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <RadioGroupItem aria-label="Teams" value="teams" />
                      Teams
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <RadioGroupItem aria-label="Platform" value="platform" />
                      Platform
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--oc-text-300))]">
                      <RadioGroupItem aria-label="Archive" value="archive" disabled />
                      Archive
                    </div>
                  </RadioGroup>
                </Specimen>
                <Specimen
                  title="Switch"
                  command={`npx shadcn@latest add ${registryBase}/switch.json`}
                  tone="dark"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span>Publish registry</span>
                      <Switch
                        aria-label="Publish registry"
                        checked={on}
                        onCheckedChange={setOn}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span>Outlined mode</span>
                      <Switch aria-label="Outlined mode" tone="outlined" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm text-[hsl(var(--oc-text-300))]">
                      <span>Locked</span>
                      <Switch aria-label="Locked" disabled />
                    </div>
                  </div>
                </Specimen>
              </div>
            </SpecSection>

            <SpecSection
              id="slider"
              index="06"
              kicker="Range"
              title="A single control with room to breathe."
              description="The slider gets a wide bench because range controls need visual space for motion, value, and hand feel."
            >
              <Specimen
                title="Allocation"
                command={`npx shadcn@latest add ${registryBase}/slider.json`}
                tone="paper"
              >
                <div className="max-w-3xl space-y-8 pt-8">
                  <Slider
                    value={slider}
                    onValueChange={setSlider}
                    min={0}
                    max={100}
                    step={1}
                    showValue
                    formatValue={(value) => `${value}%`}
                  />
                  <div className="inline-flex border border-[hsl(var(--oc-text-900))] bg-white px-3 py-2 font-mono text-xs font-bold tabular-nums">
                    CURRENT ALLOCATION: {slider[0]}%
                  </div>
                </div>
              </Specimen>
            </SpecSection>

            <SpecSection
              id="select"
              index="07"
              kicker="Dropdown"
              title="Select keeps the input grammar."
              description="The dropdown trigger uses the same border behavior as the text fields, so forms stay systematic."
            >
              <Specimen
                title="Trigger forms"
                command={`npx shadcn@latest add ${registryBase}/select.json`}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Select defaultValue="production">
                    <SelectTrigger>
                      <SelectValue placeholder="Environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="preview">Preview</SelectItem>
                      <SelectItem value="staging">Staging</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger shape="rounded">
                      <SelectValue placeholder="Rounded shape" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="button">Button</SelectItem>
                      <SelectItem value="input">Input</SelectItem>
                      <SelectItem value="select">Select</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Specimen>
            </SpecSection>

            <SpecSection
              id="navigation"
              index="08"
              kicker="Navigation"
              title="Movement primitives in one apparatus."
              description="Tabs, breadcrumbs, and pagination are grouped as structural instruments, not scattered afterthoughts."
            >
              <div className="grid gap-4">
                <Specimen
                  title="Tabs"
                  command={`npx shadcn@latest add ${registryBase}/tabs.json`}
                  tone="paper"
                >
                  <Tabs defaultValue="overview">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                      <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <p className="text-sm text-[hsl(var(--oc-text-600))]">
                        Active tabs use the blue action ramp while inactive tabs remain
                        quiet until hover.
                      </p>
                    </TabsContent>
                    <TabsContent value="settings">
                      <p className="text-sm text-[hsl(var(--oc-text-600))]">
                        Settings content stays visually connected to the active trigger.
                      </p>
                    </TabsContent>
                    <TabsContent value="activity">
                      <p className="text-sm text-[hsl(var(--oc-text-600))]">
                        Activity content uses the same spacing rhythm.
                      </p>
                    </TabsContent>
                  </Tabs>
                </Specimen>
                <div className="grid gap-4 xl:grid-cols-2">
                  <Specimen
                    title="Breadcrumb"
                    command={`npx shadcn@latest add ${registryBase}/breadcrumb.json`}
                  >
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          >
                            Home
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          >
                            Library
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Components</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </Specimen>
                  <Specimen
                    title="Pagination"
                    command={`npx shadcn@latest add ${registryBase}/pagination.json`}
                  >
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#navigation"
                            isActive
                            onClick={preventDemoNavigation}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          >
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext
                            href="#navigation"
                            onClick={preventDemoNavigation}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </Specimen>
                </div>
              </div>
            </SpecSection>

            <SpecSection
              id="tooltip"
              index="09"
              kicker="Guidance"
              title="Tooltips as quiet annotations."
              description="A final small primitive, staged as an annotation system rather than a loose hover demo."
            >
              <Specimen
                title="Annotation targets"
                command={`npx shadcn@latest add ${registryBase}/tooltip.json`}
                tone="dark"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="secondary"
                        className="bg-[hsl(var(--oc-text-900))]"
                      >
                        Hover me
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>I guide users through the product</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="text">Or me</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Right-side tooltip</TooltipContent>
                  </Tooltip>
                </div>
              </Specimen>
            </SpecSection>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
