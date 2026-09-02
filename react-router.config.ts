import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Static site: every route is rendered to HTML at build time into build/client.
  prerender: true,
} satisfies Config;
