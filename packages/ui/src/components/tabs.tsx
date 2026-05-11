"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Tabs — Radix Tabs themed for oceania.
 *
 * Figma exposes a horizontal underline style (default) and a vertical style.
 * Active trigger uses Primary 2/500 (#4A4CFF), inactive uses Text/500.
 * A 2px underline sits under the active trigger; the full row gets a
 * 1px Text/200 baseline so inactive triggers visually share a line.
 *
 *   <Tabs defaultValue="a">
 *     <TabsList>
 *       <TabsTrigger value="a">Tab 1</TabsTrigger>
 *       <TabsTrigger value="b">Tab 2</TabsTrigger>
 *     </TabsList>
 *     <TabsContent value="a">…</TabsContent>
 *   </Tabs>
 */
const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "border-b border-[hsl(var(--oc-text-200))] gap-6",
      vertical: "flex-col border-r border-[hsl(var(--oc-text-200))] gap-3",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>
>(({ className, orientation, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ orientation }), className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center",
      "px-1 pb-3 pt-1",
      "text-sm font-semibold leading-4",
      "text-[hsl(var(--oc-text-500))]",
      "transition-colors",
      "hover:text-[hsl(var(--oc-text-800))]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)] focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      // active state
      "data-[state=active]:text-[hsl(var(--oc-blue2-500))]",
      // 2px underline tied to the bottom of the list border
      "after:absolute after:left-0 after:right-0 after:-bottom-px after:h-[2px]",
      "after:bg-transparent data-[state=active]:after:bg-[hsl(var(--oc-blue2-500))]",
      // vertical orientation flips the indicator to the right edge
      "data-[orientation=vertical]:after:left-auto data-[orientation=vertical]:after:right-[-1px]",
      "data-[orientation=vertical]:after:top-0 data-[orientation=vertical]:after:bottom-0",
      "data-[orientation=vertical]:after:h-auto data-[orientation=vertical]:after:w-[2px]",
      "data-[orientation=vertical]:pr-3 data-[orientation=vertical]:pl-1 data-[orientation=vertical]:py-2",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)] rounded",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
