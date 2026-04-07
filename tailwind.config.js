/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b0c10',
        },
        sand: {
          50: '#fbf8f1',
          100: '#f6f0e3',
          200: '#eadfc8',
          300: '#dccaa8',
        },
        brand: {
          500: '#c8a46a',
          600: '#b89358',
          700: '#9d7843',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.06)',
        soft: '0 6px 18px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
}

