import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#204970'
        },
        background: {
          DEFAULT: '#f1eded'
        },
        secondary: {
          DEFAULT: '#fffbfa'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
