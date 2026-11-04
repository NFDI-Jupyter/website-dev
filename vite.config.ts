import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  base: "/website-dev/",
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./app"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    tsconfigPaths: true,
  },
});
