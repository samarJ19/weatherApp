/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          759:"#0b131e"
        },
        gray:{
          101:"#212a3b"
        }
      }
    },
  },
  plugins: [],
}