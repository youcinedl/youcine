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
        primary: {
          DEFAULT: "#8B5CF6", // Purple
          dark: "#7C3AED",
          light: "#A78BFA",
        },
        secondary: {
          DEFAULT: "#EC4899", // Pink
          dark: "#DB2777",
          light: "#F472B6",
        },
        dark: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #8B5CF6, #EC4899)',
      }
    },
  },
  plugins: [],
};
export default config;
