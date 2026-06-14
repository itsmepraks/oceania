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
  ["Action", "--oc-primary", "Primary action"],
  ["Pressed", "--oc-primary-active", "Active state"],
  ["Ink", "--oc-text-900", "Main text"],
  ["Error", "--oc-error-500", "Error state"],
  ["Wash", "--oc-primary-50", "Page surface"],
  ["Caption", "--oc-text-500", "Support text"],
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

function FileRow({ path, label }: { path: string; label: string }) {
  return (
    <div className="grid gap-1 border border-[hsl(var(--oc-light))] p-3 sm:grid-cols-[minmax(0,1fr)_120px] sm:items-center">
      <code className="min-w-0 overflow-x-auto whitespace-nowrap font-mono text-xs text-[hsl(var(--oc-blue2-200))]">
        {path}
      </code>
      <p className="text-xs text-[hsl(var(--oc-text-200))] sm:text-right">{label}</p>
    </div>
  );
}

function LabHero({
  hostLabel,
  registryBase,
}: {
  hostLabel: string;
  registryBase: string;
}) {
  return (
    <section
      id="overview"
      className="scroll-mt-8 border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))]"
    >
      <div className="grid lg:grid-cols-[154px_minmax(0,1fr)]">
        <div className="hidden border-r border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] text-[hsl(var(--oc-primary-50))] lg:block">
          <div className="sticky top-0 flex min-h-[620px] flex-col justify-between p-4">
            <div>
              <p className="font-mono text-xs text-[hsl(var(--oc-blue2-200))]">OCN-00</p>
              <p className="mt-3 text-sm font-bold uppercase">Component registry</p>
            </div>
            <p className="[writing-mode:vertical-rl] font-mono text-xs uppercase text-[hsl(var(--oc-text-300))]">
              source files / design tokens / react
            </p>
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden bg-[linear-gradient(hsl(var(--oc-text-200))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--oc-text-200))_1px,transparent_1px)] bg-[size:28px_28px]">
          <div className="absolute right-4 top-4 hidden border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-blue2-200))] px-3 py-2 font-mono text-xs font-bold text-[hsl(var(--oc-text-900))] sm:block">
            {hostLabel}
          </div>
          <div className="grid gap-8 px-4 py-8 sm:px-6 lg:px-10 lg:py-10 xl:grid-cols-[minmax(0,0.54fr)_minmax(420px,0.46fr)]">
            <div className="min-w-0">
              <div className="mb-6 inline-flex border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] px-3 py-2 font-mono text-xs font-bold uppercase text-[hsl(var(--oc-primary-50))]">
                shadcn-compatible registry
              </div>
              <h1 className="max-w-full text-[clamp(4.25rem,11vw,8.25rem)] font-bold leading-[0.84] text-[hsl(var(--oc-text-900))]">
                Oceania
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[hsl(var(--oc-text-800))]">
                A React component registry with design tokens included. Install editable
                source with the shadcn CLI, keep the files in your app, and tune the
                system from CSS variables.
              </p>
              <div className="mt-6 max-w-3xl border border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-text-900))] p-3 shadow-[6px_6px_0_hsl(var(--oc-blue2-200))]">
                <p className="mb-2 font-mono text-[11px] font-bold uppercase text-[hsl(var(--oc-blue2-200))]">
                  install one component
                </p>
                <code className="block overflow-x-auto whitespace-nowrap font-mono text-sm text-[hsl(var(--oc-primary-50))]">
                  npx shadcn@latest add {registryBase}/button.json
                </code>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="shadow-[6px_6px_0_hsl(var(--oc-text-900))]">
                  <a href="#install">Start with the CLI</a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-[hsl(var(--oc-primary-50))]"
                >
                  <a href="#button">Browse components</a>
                </Button>
              </div>
            </div>

            <div className="relative min-w-0 xl:pt-6">
              <Specimen title="What the CLI writes" tone="dark">
                <div className="space-y-3">
                  <FileRow path="components/ui/button.tsx" label="editable source" />
                  <FileRow path="app/oceania-tokens.css" label="design tokens" />
                  <FileRow path="lib/utils.ts" label="shared helper" />
                  <div className="border border-[hsl(var(--oc-light))] bg-[hsl(var(--oc-primary-50))] p-4 text-[hsl(var(--oc-text-900))]">
                    <p className="font-mono text-xs font-bold uppercase text-[hsl(var(--oc-blue1-700))]">
                      token-driven output
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[hsl(var(--oc-text-800))]">
                      Components keep their Radix behavior and read Oceania variables for
                      color, radius, typography, and state.
                    </p>
                  </div>
                </div>
              </Specimen>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-b border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-primary-50))]">
      <div className="grid lg:grid-cols-[154px_minmax(0,1fr)]">
        <div className="hidden border-r border-[hsl(var(--oc-text-900))] bg-[hsl(var(--oc-blue2-200))] p-4 lg:block">
          <p className="font-mono text-xs font-bold text-[hsl(var(--oc-blue1-700))]">
            OCN-01
          </p>
          <p className="mt-3 text-sm font-bold uppercase text-[hsl(var(--oc-text-900))]">
            How it works
          </p>
        </div>
        <div className="grid border-t border-[hsl(var(--oc-text-900))] bg-white sm:grid-cols-3 lg:border-t-0">
          {[
            ["01", "Run the CLI", "Use the same shadcn add flow you already know."],
            [
              "02",
              "Keep the files",
              "React components land in your repo as editable source.",
            ],
            [
              "03",
              "Tune the tokens",
              "Change CSS variables once and the components follow.",
            ],
          ].map(([step, title, body], index) => (
            <div
              key={step}
              className={
                index < 2
                  ? "border-b border-[hsl(var(--oc-text-900))] p-5 sm:border-b-0 sm:border-r"
                  : "p-5"
              }
            >
              <p className="font-mono text-xs font-bold text-[hsl(var(--oc-blue1-700))]">
                {step}
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-[hsl(var(--oc-text-900))]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[hsl(var(--oc-text-600))]">
                {body}
              </p>
            </div>
          ))}
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
            <LabHero hostLabel={hostLabel} registryBase={registryBase} />
            <HowItWorks />

            <SpecSection
              id="install"
              index="01"
              kicker="Install"
              title="Use it like a shadcn registry."
              description="Pick a component, run the CLI command, and the source lands in your project. There is no runtime package to wrap or theme API to learn first."
            >
              <div className="grid gap-4 xl:grid-cols-[minmax(0,0.65fr)_minmax(280px,0.35fr)]">
                <Specimen title="Install from the registry" tone="dark">
                  <div className="space-y-3">
                    <CopyLine>npx shadcn@latest add {registryBase}/button.json</CopyLine>
                    <CopyLine>npx shadcn@latest add {registryBase}/input.json</CopyLine>
                    <CopyLine>npx shadcn@latest add {registryBase}/select.json</CopyLine>
                  </div>
                </Specimen>
                <Specimen title="One token import" tone="paper">
                  <p className="text-sm leading-6 text-[hsl(var(--oc-text-800))]">
                    Oceania ships the token file with each component dependency. If your
                    app does not import it automatically, add it once in global CSS.
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
              title="The design system is in the tokens."
              description="The components use the same CSS variables for color, typography, radius, spacing, and state. Change the variables and the installed source follows."
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
              title="Start with the everyday controls."
              description="Buttons, inputs, choices, navigation, and tooltips are shown as working React components so you can judge the states before installing them."
            >
              <div className="grid gap-4 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
                <Specimen
                  title="Variants"
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
                <Specimen title="Size and shape" tone="paper">
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
              title="Form controls share one border language."
              description="Inputs, field copy, errors, disabled states, and textareas use the same token set so forms do not drift."
            >
              <div className="grid gap-4">
                <Specimen
                  title="Shapes and states"
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
                  <Specimen title="Labels and help text" tone="paper">
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
                    title="Textarea"
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
              title="Selection states are easy to scan."
              description="Checkboxes, radio buttons, and switches show selected, mixed, disabled, and outlined states without leaving the page."
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
              title="Range input with visible feedback."
              description="The slider exposes the current value while you drag, with enough space for the thumb, track, and value label to read clearly."
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
              title="Select follows the same form rules."
              description="Triggers, placeholders, selected items, and menu options use the same typography and borders as the other inputs."
            >
              <Specimen
                title="Select examples"
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
              title="Navigation primitives are included."
              description="Tabs, breadcrumbs, and pagination are small pieces, but they need keyboard behavior, focus states, and clear active styles."
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
                        Active tabs use the action color. Inactive tabs stay quiet until
                        hover or focus.
                      </p>
                    </TabsContent>
                    <TabsContent value="settings">
                      <p className="text-sm text-[hsl(var(--oc-text-600))]">
                        Tab content stays tied to the selected trigger.
                      </p>
                    </TabsContent>
                    <TabsContent value="activity">
                      <p className="text-sm text-[hsl(var(--oc-text-600))]">
                        Spacing stays consistent when the panel changes.
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
              title="Tooltips stay out of the way."
              description="Use them for short hints on controls that need a little context. The trigger still works without the tooltip."
            >
              <Specimen
                title="Tooltip examples"
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
                    <TooltipContent>Short hint, close to the control</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="text">Or me</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Shown on the right</TooltipContent>
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
