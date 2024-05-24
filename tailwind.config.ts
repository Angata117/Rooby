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

      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'bg-gray': '#F4F4F4',
        'dark-pink': "#150050",
        'card-yellow': '#FFE377',
        'btn-green': '#00CC61',
        'text-gray': '#787878',
        'arrow-green': '#00CC61'
      },
      letterSpacing: {
        tighterest: '-0.89px'
      },
    },
  },
  plugins: [],
};
export default config;
