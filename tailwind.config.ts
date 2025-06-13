import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#38BDF8',   // cyan-400
          dark: '#1E40AF',    // blue-800
        },
       
      },
      fontFamily: {
        
        sans: ['Urbanist', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}
export default config
