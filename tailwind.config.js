/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blacky: '#132238',
        blue: '#007fff',
        mygray: '#556070',
        white: '#ffffff',
        darkybg: '#121212',
        // darkybg: '#0d1117',
      },
      borderRadius: {
        'rounded-1/2': 'border-radius:50%;',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
