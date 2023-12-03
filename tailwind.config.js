/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            //Background
            backgroundColor: {
                primary01: '#49DEFF',
                primary02: '#4FFFDF',
                primary03: '#303030',
                secondary01: '#4E4E4E',
                secondary02: '#4E4E4E',
                secondary03: '#F4F4F4',
                secondary04: '#F9F9F9',
            },
            backgroundImage: {
                'half-white': 'linear-gradient(to right,#FFF 10%,rgba(255,255,255,30)  45%, rgba(255,255,255,0))',
            },

            //Border
            borderColor: {
                primary: '#1d96cd',
                secondary: '#0fadc9',
                black: '#0f0f0f',
                darkGrey: '#3f3f3f',
                grey: '#8b8b8b',
            },
            borderWidth: {
                1: '1px',
            },
            borderRadius: {
                4: '4px',
            },

            //Font
            textColor: {
                primary01: '#49DEFF',
                primary02: '#4FFFDF',
                primary03: '#303030',
                secondary01: '#4E4E4E',
                secondary02: '#4E4E4E',
                secondary03: '#F4F4F4',
                secondary04: '#F9F9F9',
            },
            fontFamily: {
                proDisplay: ['SF Pro Display'],
                proText: ['SF Pro Text'],
                poppins: ['Poppins'],
            },
            fontSize: {
                xsm: '13px',
            },

            //Shadow
            dropShadow: {
                btn: '0 3px 6px rgba(0,0,0,0.16)',
                card: '0 6px 24px rgba(0,0,0,0.23)',
            },
        },
    },
    plugins: [],
};
