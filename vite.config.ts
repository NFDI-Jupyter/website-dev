import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  base: "/website-dev/",
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    tsconfigPaths: true,
  },
});
