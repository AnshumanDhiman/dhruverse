/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme_1': '#0D0E10',
        'theme_2': '#365B64',
        'theme_3': '#A6C9CB',
        'theme_4': '#E7F6F1',
        'theme_5': '#FFFFFF',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};