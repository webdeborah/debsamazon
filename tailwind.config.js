/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  media: false,
  theme: {
    extend:{
      colors: {
        amazon_blue: {
          light: "#232F3E",
          default: "#131921",
                      },
              },
            },
         },
  variants: {
    extend: {},
  },
  plugins: [require( "@tailwindcss/line-clamp")],
};
