import daisyui from "daisyui"

export default {
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: ["corporate", "business"],
    },
    darkMode: ['selector', '[data-theme="business"]'],
    theme: {
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.9)', opacity: 0 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
            },
            animation: {
                'fade-in': 'fade-in 1s ease-in-out',
                'scale-in': 'scale-in 1s ease-in-out',
            },
            backgroundImage: {
                'light-pattern': "url('/img/light-pattern.svg')",
                'dark-pattern': "url('/img/dark-pattern.svg')",
                'grid': 'linear-gradient(90deg,#8080801a 1px,transparent 0),linear-gradient(180deg,#8080801a 1px,transparent 0)'
            },
            backgroundSize: {
                'grid': '24px 24px'
            },
            backgroundColor: {
                'grid': 'rgb(255 255 255 / var(--tw-bg-opacity))'
            }
        },
    },
}