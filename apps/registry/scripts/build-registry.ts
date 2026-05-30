/*
 * Builds shadcn-compatible registry JSON files at apps/registry/public/r/<name>.json
 * Each component in packages/ui/src/components becomes a registry item that can be
 * installed via: npx shadcn@latest add https://<host>/r/<name>.json
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..", "..");
const uiDir = join(root, "packages", "ui", "src");
const outDir = join(__dirname, "..", "public", "r");
const REGISTRY_BASE_URL = process.env.OCEANIA_REGISTRY_URL ?? "http://localhost:3333/r";

interface RegistryItem {
  $schema: string;
  name: string;
  type: "registry:ui" | "registry:lib" | "registry:style";
  title?: string;
