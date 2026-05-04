import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Textarea — multi-line text input. Shares the same border/focus/error
 * grammar as Input (Text/400 default → Text/600 hover → Primary 1/800 focus
 * → Error/500 invalid → Text/300 disabled).
 */
const textareaVariants = cva(
  [
    "block w-full resize-y",
    "bg-transparent border border-solid",
    "px-4 py-3",
    "font-[var(--oc-font-sans)] font-medium text-sm",
    "transition-colors",
    "border-[hsl(var(--oc-text-400))] text-[hsl(var(--oc-text-900))]",
    "placeholder:text-[hsl(var(--oc-text-400))]",
    "hover:border-[hsl(var(--oc-text-600))]",
    "focus:outline-none",
    "focus:border-[hsl(var(--oc-blue1-800))]",
    "focus:ring-2 focus:ring-[hsl(var(--oc-blue1-800)/0.18)]",
    "aria-[invalid=true]:border-[hsl(var(--oc-error-500))]",
    "aria-[invalid=true]:focus:border-[hsl(var(--oc-error-500))]",
    "aria-[invalid=true]:focus:ring-[hsl(var(--oc-error-500)/0.18)]",
    "disabled:cursor-not-allowed",
    "disabled:border-[hsl(var(--oc-text-300))]",
    "disabled:text-[hsl(var(--oc-text-300))]",
    "disabled:placeholder:text-[hsl(var(--oc-text-300))]",
  ].join(" "),
  {
    variants: {
      shape: {
        sharp: "rounded-none",
        cornered: "rounded-[var(--oc-radius-md)]",
        rounded: "rounded-[var(--oc-radius-lg)]",
      },
    },
    defaultVariants: {
      shape: "cornered",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, shape, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        aria-invalid={error || undefined}
        className={cn(textareaVariants({ shape }), className)}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
