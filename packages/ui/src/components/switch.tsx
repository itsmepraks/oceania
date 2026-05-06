"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Switch — Radix Switch primitive themed for oceania.
 *
 * Figma exposes two toggle styles:
 *   • Filled (default) → track flips Text/300 → Primary 1/500
 *   • Outlined         → 1px border track; thumb is the colored element
 *
 * Track is 32×16, thumb 12×12 with 2px inset.
 */
const switchVariants = cva(
  [
    "peer inline-flex h-4 w-8 shrink-0 cursor-pointer items-center",
    "rounded-full border-2 border-transparent",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)]",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),
  {
    variants: {
      tone: {
        filled: cn(
          "bg-[hsl(var(--oc-text-200))]",
          "data-[state=checked]:bg-[hsl(var(--oc-blue2-400))]",
          "disabled:data-[state=checked]:bg-[hsl(var(--oc-text-300))]",
        ),
        outlined: cn(
          "bg-transparent border-[hsl(var(--oc-text-300))]",
          "data-[state=checked]:border-[hsl(var(--oc-blue1-500))]",
          "disabled:border-[hsl(var(--oc-text-300))]",
        ),
      },
    },
    defaultVariants: {
      tone: "filled",
    },
  },
);

const switchThumbVariants = cva(
  [
    "pointer-events-none block h-3 w-3 rounded-full",
    "shadow ring-0 transition-transform",
    "data-[state=unchecked]:translate-x-0",
    "data-[state=checked]:translate-x-4",
  ].join(" "),
  {
    variants: {
      tone: {
        filled: cn(
          "bg-[hsl(var(--oc-text-300))]",
          "data-[state=checked]:bg-[hsl(var(--oc-blue1-500))]",
        ),
        outlined: cn(
          "bg-[hsl(var(--oc-text-300))]",
          "data-[state=checked]:bg-[hsl(var(--oc-blue1-500))]",
        ),
      },
    },
    defaultVariants: {
      tone: "filled",
    },
  },
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, tone, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(switchVariants({ tone }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className={switchThumbVariants({ tone })} />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";

export { Switch, switchVariants };
