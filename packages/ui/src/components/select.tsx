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
      "border-[hsl(var(--oc-text-500))]",
      "hover:border-[hsl(var(--oc-text-600))]",
      "focus:outline-none data-[state=open]:border-[hsl(var(--oc-blue1-800))]",
      "focus:border-[hsl(var(--oc-blue1-800))] focus:ring-2 focus:ring-[hsl(var(--oc-blue1-800)/0.18)]",
      "data-[placeholder]:text-[hsl(var(--oc-placeholder))]",
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
        aria-hidden="true"
        className="h-4 w-4 text-[hsl(var(--oc-text-600))] transition-transform group-data-[state=open]/oc-select:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", sideOffset = 6, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-[var(--oc-radius-md)]",
        "border border-[hsl(var(--oc-text-200))] bg-[hsl(var(--oc-light))]",
        "shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "min-w-[var(--radix-select-trigger-width)]",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[hsl(var(--oc-caption))]",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center gap-2",
      "rounded-[var(--oc-radius-sm)] px-3 py-2 text-sm",
      "text-[hsl(var(--oc-text-800))] outline-none",
      "focus:bg-[hsl(var(--oc-primary-50))] focus:text-[hsl(var(--oc-text-900))]",
      "data-[state=checked]:bg-[hsl(var(--oc-primary-50))] data-[state=checked]:text-[hsl(var(--oc-blue1-800))]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="ml-auto inline-flex">
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8.5l3.5 3.5L13 5" />
      </svg>
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("my-1 h-px bg-[hsl(var(--oc-text-200))]", className)}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
