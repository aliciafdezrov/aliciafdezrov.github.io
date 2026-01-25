import fs from "fs";
import path from "path";

export async function getInfo(): Promise<unknown> {
  const filePath = path.join(process.cwd(), "src/content/info.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
