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
        },
    },
    plugins: [],
}

