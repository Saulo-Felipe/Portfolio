import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'black-1': '#09090A',
        'black-2': '#121214',
        'black-3': '#333339',
        'black-4': '#111111',

        'blue-1': '#183367'
      },

      screens: {
        'sm': {'min': '0px', 'max': '767px'},    
        'md': {'min': '768px', 'max': '1023px'},    
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},    
        '2xl': {'min': '1536px'},
      }
    },
  },
  plugins: [],
};
export default config;
