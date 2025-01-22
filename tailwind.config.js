/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      'poppinsL': ["Poppins_300Light", 'sans-serif'],
      'poppinsB': ["Poppins_700Bold", 'sans-serif'],
      'poppinsM': ["Poppins_500Medium", 'sans-serif'],
      'poppinsR': ["Poppins_400Regular", 'sans-serif'],
      'poppinsSB': ["Poppins_600SemiBold", 'sans-serif'],
    },
    lineHeight: {
      'teste': '1.15',
    },
    extend: {
      colors: {
        'custom-primary': '#FC746E',
        'custom-black': '#0E0D26',
        'custom-white': '#FCFAF7',
      },
    },
  },
  plugins: [],
}