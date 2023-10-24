/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
      "color-primary": "#01051e",
      "color-prmary-light" : "#020726",
      "color-primary-dark" : "#010417",
      "color-secondary" : "#FF0000",
      "color-gray" : "#333",
      "color-white": "#fff",
      "color-blob" : "#A427DF",
      }
    },
    container: {
      center: true,
      padding : {
        DEFAULT : '20px',
        md : '50px',
      }
    },
    

    
  },
  
  plugins: [],
}

