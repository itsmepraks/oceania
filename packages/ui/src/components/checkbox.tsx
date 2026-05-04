"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../lib/utils";

/**
 * Checkbox — Radix Checkbox primitive themed for oceania.
 *
 * Figma states:
 *   • Unselected → border Text/400, transparent fill
 *   • Selected   → bg Primary 1/500, white check
 *   • Multiple   → indeterminate; bg Primary 1/500, white dash
 *   • Disabled   → border + check muted to Text/300
 *
 * Pass `checked="indeterminate"` for the Multiple state.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-6 w-6 shrink-0 items-center justify-center",
      "rounded-[var(--oc-radius-sm)] border border-solid",
      "border-[hsl(var(--oc-text-400))] bg-transparent",
      "transition-colors",
      "hover:border-[hsl(var(--oc-blue1-500))]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)]",
      "data-[state=checked]:bg-transparent data-[state=checked]:border-[hsl(var(--oc-blue1-500))]",
      "data-[state=checked]:text-[hsl(var(--oc-blue1-500))]",
      "data-[state=indeterminate]:bg-[hsl(var(--oc-blue1-500))] data-[state=indeterminate]:border-[hsl(var(--oc-blue1-500))]",
      "data-[state=indeterminate]:text-[hsl(var(--oc-light))]",
      "disabled:cursor-not-allowed disabled:border-[hsl(var(--oc-text-300))] disabled:bg-[hsl(var(--oc-text-200))]",
      "disabled:data-[state=checked]:bg-[hsl(var(--oc-text-300))] disabled:data-[state=checked]:border-[hsl(var(--oc-text-300))]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      {props.checked === "indeterminate" ? (
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M3 8h10" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 8.5l3.5 3.5L13 5" />
        </svg>
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
