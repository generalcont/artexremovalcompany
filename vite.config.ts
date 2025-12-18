import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateSitemapXml } from "./src/lib/sitemap";

const SITE_URL = "https://artexremovalcompany.co.uk";

const sitemapPlugin = (): Plugin => {
  return {
    name: "artex-sitemap",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];

        if (req.method !== "GET" || url !== "/sitemap.xml") {
          next();
          return;
        }

        const xml = generateSitemapXml({ baseUrl: SITE_URL });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.end(xml);
      });
    },
    generateBundle() {
      const xml = generateSitemapXml({ baseUrl: SITE_URL });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: xml,
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
