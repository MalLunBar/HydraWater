import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {
          colors: {
            primary: '#1DA1F2',
            secondary: '#14171A',
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            heading: ['Bebas-Neue', 'serif'],
            special: ['Anton', 'sans-serif'],
          },
        },
      },
    }),
  ],
})
