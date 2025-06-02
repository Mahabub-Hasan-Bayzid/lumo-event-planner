/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx,blade.php}",
        "./resources/views/**/*.blade.php",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#6b73ff',
                    600: '#000dff',
                },
                accent: {
                    500: '#ff4b1f',
                    600: '#ff9068',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float-reverse 5s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};