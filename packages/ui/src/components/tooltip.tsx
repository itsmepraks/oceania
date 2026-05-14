"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../lib/utils";

/**
 * Tooltip — Radix Tooltip themed for oceania.
 *
 * Figma uses Primary 3/950 (#000A77) as the bubble bg with white 12px text,
 * 5px rounded corners, and a small triangle arrow.
 *
 *   <TooltipProvider>
 *     <Tooltip>
 *       <TooltipTrigger>Hover me</TooltipTrigger>
 *       <TooltipContent>I guide users through the product</TooltipContent>
 *     </Tooltip>
 *   </TooltipProvider>
 */
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-w-xs rounded-[5px] px-3 py-1.5",
        "bg-[hsl(var(--oc-blue3-950))] text-[hsl(var(--oc-light))]",
        "text-xs font-medium leading-4",
        "shadow-lg",
        "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0",
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow
        width={12}
        height={6}
        className="fill-[hsl(var(--oc-blue3-950))]"
      />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
