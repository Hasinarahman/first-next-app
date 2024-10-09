import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        'white': '0 2px 10px rgba(255, 255, 255, 0.5)', // Add custom white shadow
      },

      textShadow: {
        'white': '0 0 5px rgba(255, 255, 255, 0.7)', // Custom white text shadow
      },
    },
  },
  plugins: [
  ],
};
export default config;
