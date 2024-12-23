// export default {
//   base: "/",
//   build: {
//     rollupOptions: {
//       input: {
//         main: "./index.html",
//         abel: "./public/pages/abel.html",
//         about: "./public/pages/about-me.html",
//         jeep: "./public/pages/go-jeep.html",
//         pawhub: "./public/pages/pawhub.html",
//         shift: "./public/pages/shift-travel.html",
//       },
//     },
//   },
// };

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
