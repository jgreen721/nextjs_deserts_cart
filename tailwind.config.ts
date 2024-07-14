import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "main-bg":"var(--rose50)",
        "lightbronze":"var(--rose400)",
        "bronze":"var(--bronze)"
      },

      fontSize:{
        "product-name":"16px"
      },
      textColor:{
        "bronze":"var(--bronze)",
        "rose":"var(--rose400)",
        "roselight":"var(--rose300)",
        "rosedark":"var(--rose500)",
      },
      borderColor:{
        "bronze":"var(--bronze)"
      },
      borderWidth:{
        "itemunderline-width":"3px"
      }
    },
  },
  plugins: [],
};
export default config;
