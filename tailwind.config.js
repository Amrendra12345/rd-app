/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1240px",
      xxl: "1400px",
    },
    extend: {
      animation: {
        text: "text 5s ease infinite",
        "fade-in": "fadeIn 0.2s ease-out forwards",
        "fade-out": "fadeOut 0.2s ease-in forwards",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "100% 100%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
