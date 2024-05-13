//@ts-ignore
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//@ts-ignore
const root = resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(root),
    },
  },
  plugins: [react()],
});
