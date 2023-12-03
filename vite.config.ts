import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/WEEKLY_DECEMBER_FRONT_1/",
  appType:"mpa",
  optimizeDeps: {
    include: ['/src/utils/json_utils.js'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
