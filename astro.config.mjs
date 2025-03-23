// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";
import solidJs from '@astrojs/solid-js';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [
      tailwind()
    ],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "en",
  },
  site: "https://instant-website-beta.vercel.app",
  integrations: [solidJs({ 
    devtools: true 
  }), sitemap()]
});