import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      // "/hello" へのリクエストを Netlify Functions サーバーにプロキシ
      "/hello": {
        target: "http://localhost:9999/.netlify/functions",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hello/, "/hello"),
      },
    },
  },
  plugins: [react()],
});
