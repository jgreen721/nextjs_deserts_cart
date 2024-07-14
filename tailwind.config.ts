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
      },
      boxShadow:{
        "no-press-shadow":"2px -3px 10px inset rgba(10,10,15,.5)",
        "inset-btn-shadow":"1px -3px 2px inset rgba(10,10,15,.5),2px 3px 2px rgba(10,12,10,.5)"
      }
    },
  },
  plugins: [],
};
export default config;
