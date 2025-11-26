// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import customErrorOverlayPlugin from "./vite-error-overlay-plugin.js";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    plugins: [
      customErrorOverlayPlugin(),
    ],
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    nodeVersion: "20.x",
  }),
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["static.wixstatic.com", "images.unsplash.com", "via.placeholder.com"],
  },
});
