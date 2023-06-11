/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      gray: '#666666',
      lightGray: '#f4f5f7',
      white: '#ffffff',
      gold: '#dcb14a',
    },
    extend: {
      transitionDuration: {
        simple: '500ms',
      },
      screens: {
        sm: '426px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
