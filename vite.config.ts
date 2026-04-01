import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/vanilla-blackjack/",
  plugins: [tailwindcss()],
});
