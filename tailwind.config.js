/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1d2125",
        "darker": "#161a1d",
        "light": "#1d2429",
        "primary": "#579dff"
      },
      "rounded-pill": "100px",
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        "zoom-in": 'zoomIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}