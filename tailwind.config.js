/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      body:['Sedgwick Ave Display'],
      fashionfairplay: ['Playfair Display'],
      fashionNuto:['Nunito'],
      bodie:['Yanone Kaffeesatz'],
    },
    colors:{
      'indigo-white':'#EBF6F7',
      'light-gray':'#D8DCD6',
        'pale-gray':'#FDFDFE',
        'Ash-gray':'#B2BEB5',
        'try-gray':'#efeeea',
        'try-green':'#007c89'
    }

    },
  },
  plugins: [],
}

