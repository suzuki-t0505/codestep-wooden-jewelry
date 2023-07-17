/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '1023px'},
      'lg': {'max': '1279px'},
      'xl': {'max': '1535px'},
      '2xl': {'min': '1546px'}
    },
    fontFamily: {
      body: ['Crimson Text', 'serif']
    }
  },
  plugins: [],
}
