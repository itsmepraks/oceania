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
