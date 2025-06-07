// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      sourcemap: true,
    },
  },
  site: "https://facundo-tunas.github.io",
});
