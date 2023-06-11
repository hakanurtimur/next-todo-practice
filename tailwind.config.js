/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "rgba(21, 38, 22, 1)",
          800: "rgba(21, 38, 22, 0.8)",
          500: "rgba(21, 38, 22, 0.5)",
          200: "rgba(21, 38, 22, 0.2)",
          100: "rgba(21, 38, 22, 0.1)",
          50: "rgba(21, 38, 22, 0.05)",
        },
        secondary: {
          900: "rgba(190, 242, 4, 1)",
          800: "rgba(190, 242, 4, 0.8)",
          700: "rgba(190, 242, 4, 0.7)",
          500: "rgba(190, 242, 4, 0.5)",
          200: "rgba(190, 242, 4, 0.2)",
        },
        third: {
          900: "rgba(131, 165, 9, 1)",
          500: "rgba(131, 165, 9, 0.5)",
          200: "rgba(131, 165, 9, 0.2)",
        },
        fourth: {
          900: "rgba(214, 242, 4, 1)",
          500: "rgba(214, 242, 4, 0.5)",
          200: "rgba(214, 242, 4, 0.2)",
        },
        fifth: {
          900: "rgba(242, 4, 4, 1)",
          500: "rgba(242, 4, 4, 0.5)",
          200: "rgba(242, 4, 4, 0.2)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(1rem)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "menu-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        "hover-tick": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up" + " 0.5s ease-out forwards",
        "menu-down": "menu-down" + " 0.5s ease-out forwards",
        "menu-up": "menu-up" + " 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
