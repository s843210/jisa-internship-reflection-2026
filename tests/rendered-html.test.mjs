import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Japanese internship reflection report by default", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /日本で働き、暮らし、/);
  assert.match(html, /慣れない会議室から始まった初日/);
  assert.match(html, /大学で学んだこと/);
  assert.match(html, /身につけていた技術と、実際にできること/);
  assert.match(html, /React 19/);
  assert.match(html, /日本語での週次会議、フィードバック確認、現場発表を経験/);
  assert.match(html, /能力より先に変わったのは、仕事への姿勢だった/);
  assert.match(html, /US Medical Inc\./);
  assert.match(html, /JISAインターンシッププログラム/);
  assert.match(html, /usmedical-presentation\.mp4/);
  assert.match(html, /japanese-presentation\.mp4/);
  assert.doesNotMatch(html, /실습 요약|개의 완성 성과물|codex-preview|Building your site/);
});

test("includes bilingual content, media, and removes the disposable preview", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /日本で働き、/);
  assert.match(page, /大学で学んだこと/);
  assert.match(page, /身につけていた技術と、実際にできること/);
  assert.match(page, /document\.documentElement\.lang = language/);
  assert.match(page, /prefers-reduced-motion/);
  assert.match(page, /team-dinner\.jpg/);
  assert.match(page, /meeting\.jpg/);
  assert.match(page, /controls playsInline preload="metadata"/);
  assert.match(page, /useState<Language>\("ja"\)/);
  assert.match(layout, /lang="ja"/);
  assert.match(layout, /locale: "ja_JP"/);
  assert.match(css, /grid-template-columns:\s*180px minmax\(0, 1fr\)/);
  assert.match(css, /html\[lang="ja"\] body/);
  assert.match(css, /\.cover-photo/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
});

test("ships every local report asset", async () => {
  const assets = [
    "meeting.jpg",
    "team-dinner.jpg",
    "web-integration.jpg",
    "hover-site.jpg",
    "kids-package.jpg",
    "adult-package.jpg",
    "usmedical-presentation.mp4",
    "japanese-presentation.mp4",
    "usmedical-presentation-poster.png",
    "japanese-presentation-poster.png",
    "jisa-logo.png",
  ];

  await Promise.all(assets.map((asset) => access(new URL(`public/${asset}`, root))));
});
