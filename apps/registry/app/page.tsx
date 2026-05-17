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
