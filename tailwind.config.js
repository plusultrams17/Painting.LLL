/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                },
                gold: {
                    DEFAULT: '#C5A059',
                    hover: '#D4AF37',
                }
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
                serif: ['"Noto Serif JP"', 'serif'],
            }
        },
    },
    plugins: [],
}
