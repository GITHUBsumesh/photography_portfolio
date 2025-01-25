import type { Config } from "tailwindcss";
// import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        backgroundNavbar: 'rgba(15, 16, 26, 1)',
      },
      fontFamily: {
        nav: 'Inria Serif', // Correct font family
      },
      fontWeight: {
        nav: '700', // Correct font weight
      },
      fontSize: {
        nav: '26px', // Correct font size
      },
      lineHeight: {
        nav: '31.17px', // Correct line height
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      
      scrollBehavior: ['smooth'], // Correct scroll behavior
    },
    corePlugins: {
      transform: true, // Make sure transform utilities are enabled
    },
  },
  plugins: [],
};

export default config;
