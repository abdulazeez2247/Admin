module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'argon-dark': '#2d3748',
        'argon-light-blue': '#4c52f6', 
        'argon-gray': '#f8f9fe',
        'argon-purple': '#5e72e4',
        'argon-green': '#2dce89',
        'argon-orange': '#fb6340',
        'argon-red': '#f5365c',
        
      },
      boxShadow: {
        'card': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
        'lg-card': '0 1rem 2rem rgba(0, 0, 0, 0.175)',
      },
    },
  },
  plugins: [],
}