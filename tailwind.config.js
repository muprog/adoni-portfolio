/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px rgba(100, 100, 100, 0.5)',
        md: '2px 2px rgba(100, 100, 100, 0.5)',
        lg: '3px 3px rgba(100, 100, 100, 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
