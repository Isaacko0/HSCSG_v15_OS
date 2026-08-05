/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cosateca OS Design System
        vacio: '#0A1024',
        aliento: '#F7FAFF',
        chispa: '#AFEB00',
        crepusculo: '#4F46E5',
        'tinta-suave': '#1E294F',
        // Semáforo
        critico: '#D6336C',
        riesgo: '#E8590C',
        irregular: '#C98A12',
        estable: '#0F9D8A',
        saludable: '#AFEB00',
        // Module accents
        cosmos: {
          from: '#0c34e9',
          to: '#6524d6',
        },
        wish: {
          from: '#4f6a00',
          to: '#8a5c00',
        },
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'co-pulse': 'co-pulse 1.9s ease-in-out infinite',
      },
      keyframes: {
        'co-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
