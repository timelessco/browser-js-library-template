// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "./",
    publicDir: resolve(__dirname, "website/public"),
    root: resolve(__dirname, "website"),
    build: {
      outDir: resolve(__dirname, "dist"),
    },
  };
});
