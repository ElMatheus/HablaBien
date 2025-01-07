
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      'poppinsB': ["Poppins_700Bold", 'sans-serif'],
      'poppinsM': ["Poppins_500Medium", 'sans-serif'],
      'poppinsR': ["Poppins_500Regular", 'sans-serif'],
      'poppinsSB': ["Poppins_600SemiBold", 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-brown': '#8F3326',
        'custom-gray': '#ECECEC',
        'custom-gray2': '#D9D9D9',
        "custoom-salmon": '#E8C2B7'
      },
    },
  },
  plugins: [],
}