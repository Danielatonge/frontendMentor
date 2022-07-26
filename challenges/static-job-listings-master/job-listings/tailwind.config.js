/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontWeight: {
      medium: 500,
      bold: 700
    },
    extend: {
      backgroundImage: {
        'mobile-header': "url('./bg-mobile.svg')",
        'desktop-header': "url('./bg-desktop.svg')",
      },
      colors: {
        desaturated_dark_cyan: 'hsl(var(--desaturated_dark_cyan) / <alpha-value>)',
        dark_grayish_cyan: 'hsl(var(--dark_grayish_cyan) / <alpha-value>)',
        bg_light_grayish_cyan: 'hsl(var(--bg_light_grayish_cyan) / <alpha-value>)',
        light_grayish_cyan: 'hsl(var(--light_grayish_cyan) / <alpha-value>)',
        very_dark_grayish_cyan: 'hsl(var(--very_dark_grayish_cyan) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}
