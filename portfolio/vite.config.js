import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        abel: resolve(__dirname, "abel.html"),
        about: resolve(__dirname, "about-me.html"),
        jeep: resolve(__dirname, "go-jeep.html"),
        pawhub: resolve(__dirname, "pawhub.html"),
        shift: resolve(__dirname, "shift-travel.html"),
      },
    },
  },
});
