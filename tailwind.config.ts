import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        softprimary: "var(--soft-primary)",
        softgray: "var(--soft-gray)",
        gray: "var(--gray)",
        yellow: "var(--yellow)",
      },
    },
    container: {
      padding: {
        DEFAULT: "30px",
        sm: "30px",
        lg: "3rem",
      },
      center: true,
    },
  },
  plugins: [],
};
export default config;
