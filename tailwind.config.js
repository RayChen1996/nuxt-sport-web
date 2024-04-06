/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./assets/css/main.css",
    "./app.vue",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  css: ["/assets/css/main.css"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
