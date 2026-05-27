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
              <div className="flex items-center gap-2 text-sm">
                <Checkbox defaultChecked={false} />
                Unselected
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Checkbox checked={tri} onCheckedChange={(c) => setTri(c)} />
                Indeterminate
              </div>
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--oc-text-400))]">
                <Checkbox disabled />
                Disabled
              </div>
            </div>
          </Section>

          <Section title="Radio">
            <RadioGroup
              value={radio}
              onValueChange={setRadio}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-sm">
                <RadioGroupItem value="a" />
                Option A
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RadioGroupItem value="b" />
                Option B
              </div>
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--oc-text-400))]">
                <RadioGroupItem value="c" disabled />
                Disabled
              </div>
            </RadioGroup>
          </Section>

          <Section title="Switch">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Switch checked={on} onCheckedChange={setOn} />
                Filled
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Switch tone="outlined" defaultChecked />
                Outlined
              </div>
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--oc-text-400))]">
                <Switch disabled />
                Disabled
              </div>
            </div>
          </Section>

          <Section title="Slider">
            <div className="space-y-6 pt-8">
              <Slider
                value={slider}
                onValueChange={setSlider}
                min={0}
                max={100}
                step={1}
                showValue
                formatValue={(v) => `${v}%`}
              />
            </div>
          </Section>

          <Section
            title="Select"
            install={`npx shadcn@latest add ${registryBase}/select.json`}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select defaultValue="option-2">
                <SelectTrigger>
                  <SelectValue placeholder="Pick an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-1">Option 1</SelectItem>
                  <SelectItem value="option-2">Option 2</SelectItem>
                  <SelectItem value="option-3">Option 3</SelectItem>
                  <SelectItem value="option-4">Option 4</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger shape="rounded">
                  <SelectValue placeholder="Rounded shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Section>

          <Section title="Tabs">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="text-sm text-[hsl(var(--oc-text-600))]">
                  Active tab uses Primary 2/500. Inactive triggers stay in
                  Text/500 and lift to Text/800 on hover.
                </p>
              </TabsContent>
              <TabsContent value="settings">
                <p className="text-sm text-[hsl(var(--oc-text-600))]">
                  Settings panel.
                </p>
              </TabsContent>
              <TabsContent value="activity">
                <p className="text-sm text-[hsl(var(--oc-text-600))]">
                  Recent activity.
                </p>
