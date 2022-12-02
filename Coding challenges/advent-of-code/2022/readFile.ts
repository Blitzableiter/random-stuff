import { readFileSync } from "fs";
export function readFile(fileName: string): string {
  return readFileSync(fileName, { encoding: "utf-8" });
}
