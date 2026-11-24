// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather for the invented city of Gloomburg to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: a fixed line, no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "In Gloomburg today: drizzle at nine, drizzle at noon, drizzle at five. " +
  "The bus is late and the pigeons carry umbrellas \u2014 so should you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const text = FORECAST.trim();
if (text.length < 1 || text.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${text.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
