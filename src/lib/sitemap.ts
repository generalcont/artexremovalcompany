import { serviceAreas } from "../data/serviceAreas";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SitemapUrl = {
  loc: string;
  changefreq: ChangeFreq;
  priority: number;
  lastmod?: string;
};

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

const formatUrl = (u: SitemapUrl) => {
  const parts: string[] = [`  <url>`, `    <loc>${xmlEscape(u.loc)}</loc>`];

  if (u.lastmod) parts.push(`    <lastmod>${xmlEscape(u.lastmod)}</lastmod>`);
  parts.push(`    <changefreq>${u.changefreq}</changefreq>`);
  parts.push(`    <priority>${u.priority.toFixed(1)}</priority>`);
  parts.push(`  </url>`);

  return parts.join("\n");
};

export const generateSitemapXml = ({
  baseUrl,
  lastmod = "2025-01-01",
}: {
  baseUrl: string;
  lastmod?: string;
}) => {
  const site = baseUrl.replace(/\/+$/, "");

  const urls: SitemapUrl[] = [
    // Core pages
    { loc: `${site}/`, lastmod, changefreq: "weekly", priority: 1.0 },
    { loc: `${site}/services`, lastmod, changefreq: "weekly", priority: 0.9 },
    { loc: `${site}/service-areas`, lastmod, changefreq: "weekly", priority: 0.9 },

    // Service pages
    { loc: `${site}/services/artex-ceiling-removal`, lastmod, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/services/smooth-plastering`, lastmod, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/services/asbestos-testing`, lastmod, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/services/wall-artex-removal`, lastmod, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/services/ceiling-repair`, lastmod, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/services/textured-coating-removal`, lastmod, changefreq: "monthly", priority: 0.8 },
  ];

  // All service areas (regions + cities/towns) from src/data/serviceAreas.ts
  for (const area of serviceAreas) {
    const isRegion = area.region === area.name;

    urls.push({
      loc: `${site}/service-areas/${area.slug}`,
      lastmod,
      changefreq: "monthly",
      priority: isRegion ? 0.7 : 0.6,
    });
  }

  // Dedupe by <loc>
  const seen = new Set<string>();
  const deduped = urls.filter((u) => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });

  const body = deduped.map(formatUrl).join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    body,
    `</urlset>`,
    "",
  ].join("\n");
};
