"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../lib/utils";

/**
 * RadioGroup / RadioGroupItem — Radix RadioGroup themed for oceania.
 *
 * Figma states (24×24 circle):
 *   • Default (on)  → border + inner dot in Primary 1/500
 *   • Off           → border Text/400, no dot
 *   • Disabled      → border + dot Text/300
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-3", className)}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex h-6 w-6 shrink-0 items-center justify-center",
      "rounded-full border border-solid",
      "border-[hsl(var(--oc-text-400))] bg-transparent",
      "transition-colors",
      "hover:border-[hsl(var(--oc-text-600))]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)]",
      "data-[state=checked]:border-[hsl(var(--oc-blue1-500))]",
      "disabled:cursor-not-allowed disabled:border-[hsl(var(--oc-text-300))]",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span
        aria-hidden="true"
        className={cn(
          "block h-3 w-3 rounded-full",
          "bg-[hsl(var(--oc-blue1-500))]",
          "[[data-disabled]_&]:bg-[hsl(var(--oc-text-300))]",
        )}
      />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
