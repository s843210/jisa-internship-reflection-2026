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

test("server-renders the Korean internship reflection report", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /일본에서 일하고,/);
  assert.match(html, /낯선 회의실에서 시작된 첫날/);
  assert.match(html, /학교에서 배운 것/);
  assert.match(html, /가지고 있던 기술과 실제로 할 수 있는 일/);
  assert.match(html, /React 19/);
  assert.match(html, /일본어 주간 회의, 피드백 확인 및 현장 발표 경험/);
  assert.match(html, /실력보다 먼저 달라진 것은 태도였다/);
  assert.match(html, /US Medical Inc\./);
  assert.match(html, /JISA 인턴십 프로그램/);
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
  assert.match(layout, /lang="ko"/);
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
