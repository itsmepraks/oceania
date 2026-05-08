"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../lib/utils";

/**
 * Select — single-selection dropdown built on Radix Select.
 *
 * Compound API matching Radix:
 *   <Select> <SelectTrigger><SelectValue /></SelectTrigger>
 *     <SelectContent>
 *       <SelectItem value="…">…</SelectItem>
 *     </SelectContent>
 *   </Select>
 *
 * Trigger mirrors the Input border grammar so it looks at home alongside
 * other form controls (Text/400 → Text/600 → Primary 1/800).
 * Multi-select + searchable variants come in a later pass (cmdk + Popover).
 */

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
