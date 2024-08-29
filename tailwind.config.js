/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins':["Poppins", "sans-serif"]
            },
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
            }
        },
    },
    plugins: [
        plugin(function({ addVariant }) {
          addVariant("open-journey-board", ".open-journey-board &");
        })
      ],

}

