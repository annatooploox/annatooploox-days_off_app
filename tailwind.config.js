/* eslint-disable no-undef */
'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{ts,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lightgrey: '	#F5F5F5',
      grey: '#C8C8C8',
      mediumgrey: '#E8E8E8',
      dayoff: {
        unpaid: 'yellow',
        parental: 'lightblue',
        vacation: 'moccasin',
      },
    },

    extend: {},
  },
  plugins: [],
};
