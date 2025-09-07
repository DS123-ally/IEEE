/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                accent: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                }
            },
            fontFamily: {
                'inter': ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 18s ease-in-out infinite alternate',
                'float-slow': 'float 22s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%': { transform: 'translateY(0) translateX(0)' },
                    '100%': { transform: 'translateY(60px) translateX(40px)' },
                }
            }
        },
    },
    plugins: [],
}