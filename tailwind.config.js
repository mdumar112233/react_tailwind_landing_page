module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'services-icon-bg-blue': "url('/src/images/services-icon-bg-blue.png')",
      'services-icon-bg-yellow': "url('/src/images/services-icon-bg-yellow.png')",
      'services-icon-bg-red': "url('/src/images/services-icon-bg-red.png')"
    },
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
