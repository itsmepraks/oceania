import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[var(--oc-button-radius)] font-medium transition-[transform,background-color,border-color,color,opacity] duration-150 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-[hsl(var(--oc-primary))] text-[hsl(var(--oc-primary-fg))] hover:bg-[hsl(var(--oc-primary-hover))] active:bg-[hsl(var(--oc-primary-active))] disabled:bg-[hsl(var(--oc-primary-disabled))] disabled:text-[hsl(var(--oc-text-800))]",
        secondary:
          "border border-[hsl(var(--oc-primary))] bg-transparent text-[hsl(var(--oc-primary))] hover:border-[hsl(var(--oc-primary-hover))] hover:text-[hsl(var(--oc-primary-hover))] active:border-[hsl(var(--oc-primary-active))] disabled:border-[hsl(var(--oc-primary-disabled))] disabled:text-[hsl(var(--oc-primary-disabled))]",
        lite: "border border-[hsl(var(--oc-primary-subtle))] bg-transparent text-[hsl(var(--oc-primary))] hover:text-[hsl(var(--oc-primary-hover))] disabled:text-[hsl(var(--oc-primary-disabled))]",
        text: "bg-transparent text-[hsl(var(--oc-primary))] hover:text-[hsl(var(--oc-primary-hover))] disabled:text-[hsl(var(--oc-primary-disabled))]",
        destructive:
          "bg-[hsl(var(--oc-destructive))] text-[hsl(var(--oc-destructive-fg))] hover:opacity-90",
      },
      size: {
        sm: "gap-[var(--oc-button-gap-sm)] px-[var(--oc-button-px-sm)] py-[var(--oc-button-py-sm)] text-[length:var(--oc-button-font-sm)]",
        md: "gap-[var(--oc-button-gap-md)] px-[var(--oc-button-px-md)] py-[var(--oc-button-py-md)] text-[length:var(--oc-button-font-md)]",
        lg: "gap-[var(--oc-button-gap-lg)] px-[var(--oc-button-px-lg)] py-[var(--oc-button-py-lg)] text-[length:var(--oc-button-font-lg)]",
      },
      shape: {
        sharp: "rounded-none",
        cornered: "",
        rounded: "rounded-[var(--oc-radius-full)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "cornered",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape }), className)}
        type={asChild ? undefined : (type ?? "button")}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
