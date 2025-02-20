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

      animation: {
        openFromCenter: 'openFromCenter 0.5s ease-out',
      },
      keyframes: {
        openFromCenter: {
          '0%': {
            width: '0%',
            opacity: '0',
          },
          '100%': {
            width: '50%',
            opacity: '1',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
      },
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  plugins: [require('tailwindcss-textshadow')],
}
