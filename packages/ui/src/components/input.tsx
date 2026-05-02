import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Input — text input matching the Figma Form Control spec.
 *
 * State model:
 *   • default / hover / focus are handled via CSS pseudo-classes
 *   • error  → aria-invalid="true" on the wrapper
 *   • disabled → native :disabled on the underlying <input>
 *   • indicator → pass `endIcon` (or `startIcon`); does not change colors
 *
 * Layout follows the Figma sample: 1px border, transparent fill, 16px x-padding,
 * label/text uses --oc-font-sans (medium 14px).
 */
const inputRootVariants = cva(
  [
    "group/oc-input relative flex items-center gap-2 w-full",
    "bg-transparent border border-solid",
    "px-4", // 16px horizontal padding
    "font-[var(--oc-font-sans)] font-medium",
    "transition-colors",
    // default border + text (Text/400)
    "border-[hsl(var(--oc-text-400))] text-[hsl(var(--oc-text-900))]",
    // hover → Text/600
    "hover:border-[hsl(var(--oc-text-600))]",
    // focus-within (active) → Primary 1/800
    "focus-within:border-[hsl(var(--oc-blue1-800))]",
    "focus-within:ring-2 focus-within:ring-[hsl(var(--oc-blue1-800)/0.18)]",
    // error → Error/500
    "aria-[invalid=true]:border-[hsl(var(--oc-error-500))]",
    "aria-[invalid=true]:focus-within:border-[hsl(var(--oc-error-500))]",
    "aria-[invalid=true]:focus-within:ring-[hsl(var(--oc-error-500)/0.18)]",
    // disabled (handled by [data-disabled] from props + native :has(:disabled))
    "has-[:disabled]:border-[hsl(var(--oc-text-300))]",
    "has-[:disabled]:text-[hsl(var(--oc-text-300))]",
    "has-[:disabled]:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      shape: {
        sharp: "rounded-none",
        cornered: "rounded-[var(--oc-radius-md)]",
        rounded: "rounded-[var(--oc-radius-full)]",
      },
      inputSize: {
        sm: "h-8 text-sm",
        md: "h-10 text-sm",
        lg: "h-12 text-sm",
      },
    },
    defaultVariants: {
      shape: "cornered",
      inputSize: "lg",
    },
  },
);

const inputFieldClasses = cn(
  "peer flex-1 bg-transparent outline-none border-0 p-0",
  "text-[hsl(var(--oc-text-900))]",
