/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        Brown: {
          '100': '#ECE0D1',
          '300': '#DBC1AC',
          '600': '#967259',
          '900': '#634832',
        },
      },
      boxShadow: {
        'main': '0px 1px 10px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'body': 'DanaFaNum-Regular',
        'Dana': 'DanaFaNum-Regular',
        'DanaMedium': 'DanaFaNum-Medium',
        'DanaBold': 'DanaFaNum-DemiBold',
        'MorabbaLight': 'Morabba-Light',
        'MorabbaBold': 'Morabba-Bold',
        'MorabbaMedium': 'Morabba-Medium',
      },
      letterSpacing: {
        'tightest': '-0.065em',
      },
      spacing: {
        // calc first divide the number u want to 4 (for tailwind) and amount is your number divide to 16
        '25': '6.25rem',
        '30': '7.5rem',
        '50': '12.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0,625rem',
        },
      },
      backgroundImage: {
        'main': 'url(/images/body-bg.png)',
        'home-mobile': 'url(/images/headerBgMobile.webp)',
        'home-desktop': 'url(/images/headerBgDesktop.webp)',
        'shopBg': 'url(/images/shopBg.jpg)',
        'blogBg': 'url(/images/blogBg.jpg)',
        'aboutUsBg': 'url(/images/aboutUsBg.jpg)',
        'contactUsBg': 'url(/images/contactUsBg.jpg)',
      },
    },
    screens: {
      '2xs': '380px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover');
    },
  ],
};
