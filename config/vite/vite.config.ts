import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const PORT = 3000;

export default defineConfig({
  publicDir: "build",
  plugins: [react()],
  envPrefix: "APP",
  resolve: {
    alias: {
      "/@/": path.resolve(__dirname, "src"),
      api: "/src/api",
      app: "/src/app",
      pages: "/src/pages",
      shared: "/src/shared",
      entities: "/src/entities",
    },
  },
  server: {
    port: PORT,
  },
  build: {
    minify: true,
    rollupOptions: {},
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
    outDir: "build",
  },
});
