"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../lib/utils";

/**
 * Slider — Radix Slider primitive themed for oceania.
 *
 * Figma states:
 *   • Initial → 4px track Text/200, range Primary 1/500, 16px thumb
 *   • Hover   → thumb grows + adds soft ring (Primary 1/500 / 0.18)
 *   • Sliding → thumb shows a small bubble with the current value
 *
 * Pass `showValue` to render the value bubble above the active thumb.
 * Supports single or range selection via Radix's `value` / `defaultValue`.
 */
export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** Render a value bubble above each thumb. */
  showValue?: boolean;
  /** Formatter for the value bubble. Defaults to `String(value)`. */
  formatValue?: (value: number) => string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showValue, formatValue, value, defaultValue, ...props }, ref) => {
  // Track current values so the bubble can render the right number per thumb.
  const initial = (value ?? defaultValue ?? [0]) as number[];
  const [internal, setInternal] = React.useState<number[]>(initial);
  const current = (value as number[] | undefined) ?? internal;

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => {
        setInternal(next);
        props.onValueChange?.(next);
      }}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-1 w-full grow overflow-hidden rounded-full",
          "bg-[hsl(var(--oc-text-200))]",
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-[hsl(var(--oc-blue2-500))] data-[disabled]:bg-[hsl(var(--oc-text-300))]" />
      </SliderPrimitive.Track>

      {current.map((v, i) => (
        <SliderPrimitive.Thumb
          key={`thumb-${v}`}
          className={cn(
            "relative block h-4 w-4 rounded-full",
            "border-2 border-[hsl(var(--oc-blue1-500))] bg-[hsl(var(--oc-blue1-100))]",
            "shadow-sm transition-transform",
            "hover:scale-110 hover:border-[hsl(var(--oc-blue2-700))] hover:ring-4 hover:ring-[hsl(var(--oc-blue1-500)/0.18)]",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--oc-blue1-500)/0.25)]",
            "data-[disabled]:border-[hsl(var(--oc-text-300))] data-[disabled]:bg-[hsl(var(--oc-text-200))]",
          )}
          aria-label={`Value ${i + 1}`}
        >
          {showValue ? (
            <span
              className={cn(
                "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2",
                "inline-flex min-w-10 justify-center rounded-[var(--oc-radius-sm)] px-2 py-1 text-xs font-medium",
                "bg-[hsl(var(--oc-blue2-400))] text-[hsl(var(--oc-blue1-800))]",
                "whitespace-nowrap shadow",
              )}
            >
              {formatValue ? formatValue(v) : String(v)}
            </span>
          ) : null}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = "Slider";

export { Slider };
