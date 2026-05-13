"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/**
 * Pagination — numeric pager matching the Figma spec.
 *
 *   • Current page: bg Primary 1/500 (#2131FF), white text, 36px rounded square
 *   • Other pages: text Text/500, no bg, hover lifts to Text/800
 *   • Ellipsis ("…"): non-interactive Text/500
 *   • Prev / Next: chevron icons that disable themselves at the ends
 *
 * Compound API:
 *   <Pagination>
 *     <PaginationContent>
 *       <PaginationItem><PaginationPrevious href="?p=1" /></PaginationItem>
 *       <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationLink href="?p=2">2</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationEllipsis /></PaginationItem>
 *       <PaginationItem><PaginationLink href="?p=22">22</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationNext href="?p=2" /></PaginationItem>
 *     </PaginationContent>
 *   </Pagination>
 */
const Pagination = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  isActive?: boolean;
  /** When true, render as a button-like span (e.g. for the current page). */
  disabled?: boolean;
}

const PaginationLink = ({
  className,
  isActive,
  disabled,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    aria-disabled={disabled || undefined}
    className={cn(
      "inline-flex h-9 min-w-9 items-center justify-center px-2",
      "rounded-[10px] text-sm font-bold leading-4",
      "transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--oc-blue1-800)/0.35)] focus-visible:ring-offset-1",
      isActive
        ? "bg-[hsl(var(--oc-blue1-500))] text-[hsl(var(--oc-light))] hover:bg-[hsl(var(--oc-blue1-700))]"
        : "text-[hsl(var(--oc-text-500))] hover:text-[hsl(var(--oc-text-800))]",
      disabled && "pointer-events-none opacity-40",
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const ChevronLeft = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5l-5 5 5 5" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 5l5 5-5 5" />
  </svg>
);

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("min-w-0 gap-1 px-2", className)}
    {...props}
  >
    <ChevronLeft />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PaginationLink>) => (
  <PaginationLink
