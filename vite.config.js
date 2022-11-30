// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: resolve(__dirname, "demo"),
  build: {
    outDir: resolve(__dirname, "dist"),
  },
});
