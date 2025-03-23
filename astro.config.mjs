// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";
import solidJs from '@astrojs/solid-js';

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
  integrations: [
    solidJs({ 
      devtools: true 
    })
  ]
});