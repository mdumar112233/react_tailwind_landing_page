module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '820px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        13: '20rem'
      },
    },
  },
  plugins: [],
}
