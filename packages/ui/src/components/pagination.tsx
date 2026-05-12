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
