/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors:{
            'orange': 'hsl(25, 97%, 53%)',
            'white': 'hsl(0, 0%, 100%)',
            'lightGrey': 'hsl(217, 12%, 63%)',
            'mediumGrey': 'hsl(216, 12%, 54%)',
            'mediumGreyA':'rgba(49%, 53%, 60%, 0.1)',
            'darkBlue': 'hsl(213, 19%, 18%)',
            'veryDarkBlue': 'hsl(216, 12%, 8%)',
        },
        extend: {
            fontFamily:{
                overpass: ["Overpass-Regular", 'sans-serif']
            }
        },
        container: {
            center: true,
        },
    },
    plugins: [],
};