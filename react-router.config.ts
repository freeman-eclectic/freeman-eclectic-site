import type { Config } from "@react-router/dev/config";

export default {
  // Static site for GitHub Pages: every route is rendered to HTML at build time into build/client.
  ssr: false,
  prerender: true,
  basename: process.env.PUBLIC_BASE_PATH ?? "/",
} satisfies Config;
