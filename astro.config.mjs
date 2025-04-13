// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";
import solidJs from '@astrojs/solid-js';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [
      tailwind(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
        exclude: undefined,
        include: undefined,
        includePublic: true,
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: false,
          plugins: [],
        },
        png: {
          quality: 100,
        },
        jpeg: {
          quality: 100,
        },
        jpg: {
          quality: 100,
        },
        tiff: {
          quality: 100,
        },
        gif: {},
        webp: {
          lossless: true,
        },
        avif: {
          lossless: true,
        },
        cache: false,
        cacheLocation: undefined,
      })
    ],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "en",
  },
  site: "https://instant-website-beta.vercel.app",
  integrations: [
    solidJs({
      devtools: true
    }),
    sitemap(),
  ]
});