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

const registryBase = "http://localhost:3333/r";

const registryItems = [
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
  ["Primary", "--oc-primary", "Primary button fill"],
  ["Hover", "--oc-primary-hover", "Interactive hover"],
  ["Disabled", "--oc-primary-disabled", "Muted action state"],
  ["Text", "--oc-text-900", "Headings and primary copy"],
  ["Caption", "--oc-text-500", "Secondary copy"],
  ["Error", "--oc-error-500", "Invalid field state"],
] as const;

function Section({
  title,
  install,
  children,
}: {
  title: string;
  install?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="text-lg font-semibold text-[hsl(var(--oc-text-800))]">
          {title}
        </h2>
        {install ? (
          <code className="max-w-full break-all rounded bg-[hsl(var(--oc-primary-50))] px-2 py-1 font-mono text-xs text-[hsl(var(--oc-blue1-800))]">
            {install}
          </code>
        ) : null}
      </div>
      <div className="overflow-hidden rounded-[var(--oc-radius-lg)] border border-[hsl(var(--oc-text-200))] p-4 sm:p-6">
        {children}
      </div>
    </section>
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
    <div className="flex items-center gap-3 rounded-[var(--oc-radius-md)] border border-[hsl(var(--oc-text-200))] p-3">
      <div
        className="h-10 w-10 shrink-0 rounded-[var(--oc-radius-sm)] border border-[hsl(var(--oc-text-200))]"
        style={{ backgroundColor: `hsl(var(${token}))` }}
      />
      <div className="min-w-0">
        <p className="font-semibold text-[hsl(var(--oc-text-900))]">{name}</p>
        <p className="font-mono text-xs text-[hsl(var(--oc-text-500))]">
          {token}
        </p>
        <p className="text-xs text-[hsl(var(--oc-text-500))]">{usage}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(true);
  const [tri, setTri] = React.useState<boolean | "indeterminate">(
    "indeterminate",
  );
  const [radio, setRadio] = React.useState("a");
  const [on, setOn] = React.useState(true);
  const [slider, setSlider] = React.useState([40]);

  return (
    <TooltipProvider delayDuration={150}>
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="mb-12">
          <p className="mb-2 text-sm font-semibold text-[hsl(var(--oc-primary))]">
            Registry-first React components
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--oc-text-900))]">
            oceania
          </h1>
          <p className="mt-3 max-w-2xl text-[hsl(var(--oc-text-500))]">
            A shadcn-style design library for React, Next.js, and TypeScript.
            Install source into your app, keep it editable, and preserve the
            Oceania tokens from Figma.
          </p>
        </header>

        <div className="space-y-10">
          <Section title="Install">
            <div className="grid gap-3 md:grid-cols-2">
              {registryItems.map((item) => (
                <code
                  key={item}
                  className="block break-all rounded-[var(--oc-radius-md)] bg-[hsl(var(--oc-primary-50))] px-3 py-2 font-mono text-xs text-[hsl(var(--oc-blue1-800))]"
                >
                  npx shadcn@latest add {registryBase}/{item}.json
                </code>
              ))}
            </div>
          </Section>

          <Section title="Tokens">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {tokenSwatches.map(([name, token, usage]) => (
                <TokenSwatch
                  key={token}
                  name={name}
                  token={token}
                  usage={usage}
                />
              ))}
            </div>
          </Section>

          <Section
            title="Button — variants"
            install={`npx shadcn@latest add ${registryBase}/button.json`}
          >
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="lite">Lite</Button>
              <Button variant="text">Text</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </Section>

          <Section title="Button — sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg">Large</Button>
              <Button size="md">Medium</Button>
              <Button size="sm">Small</Button>
              <Button size="md" disabled>
                Disabled
              </Button>
            </div>
          </Section>

          <Section
            title="Input — shapes & states"
            install={`npx shadcn@latest add ${registryBase}/input.json`}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-[hsl(var(--oc-text-500))]">
                  Sharp
                </p>
                <Input shape="sharp" placeholder="Label" />
                <Input shape="sharp" defaultValue="With data" />
                <Input
                  shape="sharp"
                  error
                  defaultValue="Username doesn't match"
                />
                <Input shape="sharp" disabled placeholder="Disabled" />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-[hsl(var(--oc-text-500))]">
                  Cornered
                </p>
                <Input shape="cornered" placeholder="Label" />
                <Input shape="cornered" defaultValue="With data" />
                <Input
                  shape="cornered"
                  error
                  defaultValue="Username doesn't match"
                />
                <Input shape="cornered" disabled placeholder="Disabled" />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-[hsl(var(--oc-text-500))]">
                  Rounded
                </p>
                <Input shape="rounded" placeholder="Label" />
                <Input shape="rounded" defaultValue="With data" />
                <Input
                  shape="rounded"
                  error
                  defaultValue="Username doesn't match"
                />
                <Input shape="rounded" disabled placeholder="Disabled" />
              </div>
            </div>
          </Section>

          <Section title="InputField — with label + caption">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InputField
                label="Email"
                placeholder="you@example.com"
                caption="We'll never share your email."
              />
              <InputField
                label="Username"
                defaultValue="jrambo"
                error
                errorCaption="Username doesn't match"
              />
            </div>
          </Section>

          <Section title="Textarea">
            <Textarea placeholder="Write here .." rows={5} />
          </Section>

          <Section title="Checkbox">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(c) => setChecked(c)}
                />
                Selected
              </div>
