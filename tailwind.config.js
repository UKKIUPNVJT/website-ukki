/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
        footer: "#1B6060",
        tertiary: "#1C8383",
      },

      container: {
        center: true,
      },
      backgroundImage: {
        "nama-gambar": "url('./dist/img/head.jpg')",
      },
    },
  },
  plugins: [],
};
