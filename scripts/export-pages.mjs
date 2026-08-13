import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "docs");
const repository = process.env.GITHUB_PAGES_REPO ?? "jisa-internship-reflection-2026";
const owner = process.env.GITHUB_PAGES_OWNER ?? "s843210";
const base = `/${repository}`;
const siteUrl = `https://${owner}.github.io/${repository}`;

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist", "client"), output, { recursive: true });

const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(`https://${owner}.github.io/`, { headers: { accept: "text/html", "x-forwarded-proto": "https" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed with ${response.status}`);

const assetNames = [
  "jisa-logo.png",
  "meeting.jpg",
  "web-integration.jpg",
  "hover-site.jpg",
  "kids-package.jpg",
  "adult-package.jpg",
  "team-dinner.jpg",
  "usmedical-presentation.mp4",
  "japanese-presentation.mp4",
  "usmedical-presentation-poster.png",
  "japanese-presentation-poster.png",
  "og.png",
  "favicon.svg",
];

function rewritePaths(source) {
  let result = source
    .replaceAll("/assets/", `${base}/assets/`)
    .replaceAll('function(e){return`/`+e}', `function(e){return\`${base}/\`+e}`);
  for (const asset of assetNames) result = result.replaceAll(`/${asset}`, `${base}/${asset}`);
  return result
    .replaceAll("http://localhost:3004/og.png", `${siteUrl}/og.png`)
    .replaceAll(`http://localhost:3004${base}/og.png`, `${siteUrl}/og.png`)
    .replaceAll(`https://localhost:3004${base}/og.png`, `${siteUrl}/og.png`)
    .replaceAll(`https://${owner}.github.io/og.png`, `${siteUrl}/og.png`);
}

const html = rewritePaths(await response.text());
await writeFile(path.join(output, "index.html"), html);
await writeFile(path.join(output, "404.html"), html);
await writeFile(path.join(output, ".nojekyll"), "");

async function patchAssets(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await patchAssets(target);
      continue;
    }
    if (!/\.(?:css|js)$/.test(entry.name)) continue;
    const source = await readFile(target, "utf8");
    const rewritten = rewritePaths(source);
    if (source !== rewritten) await writeFile(target, rewritten);
  }
}

await patchAssets(path.join(output, "assets"));
console.log(`GitHub Pages export ready: ${output}`);
console.log(`Target URL: ${siteUrl}/`);
