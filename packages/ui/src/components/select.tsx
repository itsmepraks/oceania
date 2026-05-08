"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../lib/utils";

/**
 * Select — single-selection dropdown built on Radix Select.
 *
 * Compound API matching Radix:
 *   <Select> <SelectTrigger><SelectValue /></SelectTrigger>
 *     <SelectContent>
 *       <SelectItem value="…">…</SelectItem>
 *     </SelectContent>
 *   </Select>
 *
 * Trigger mirrors the Input border grammar so it looks at home alongside
 * other form controls (Text/400 → Text/600 → Primary 1/800).
 * Multi-select + searchable variants come in a later pass (cmdk + Popover).
 */

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    /** Visual shape — matches Input. Defaults to `cornered`. */
    shape?: "sharp" | "cornered" | "rounded";
  }
>(({ className, children, shape = "cornered", ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "group/oc-select inline-flex h-12 w-full items-center justify-between gap-2",
      "border border-solid bg-transparent px-4",
      "font-[var(--oc-font-sans)] text-sm font-medium",
      "text-[hsl(var(--oc-text-900))]",
      "transition-colors",
      "border-[hsl(var(--oc-text-400))]",
      "hover:border-[hsl(var(--oc-text-600))]",
      "focus:outline-none data-[state=open]:border-[hsl(var(--oc-blue1-800))]",
      "focus:border-[hsl(var(--oc-blue1-800))] focus:ring-2 focus:ring-[hsl(var(--oc-blue1-800)/0.18)]",
      "data-[placeholder]:text-[hsl(var(--oc-text-400))]",
      "disabled:cursor-not-allowed disabled:border-[hsl(var(--oc-text-300))] disabled:text-[hsl(var(--oc-text-300))]",
      shape === "sharp" && "rounded-none",
      shape === "cornered" && "rounded-[var(--oc-radius-md)]",
      shape === "rounded" && "rounded-[var(--oc-radius-full)]",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <svg
        viewBox="0 0 16 16"
