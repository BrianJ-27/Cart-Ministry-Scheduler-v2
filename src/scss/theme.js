/*
  This file will let us use common styles across the site.
  We should be able to import variables directly from scss files
  but I'm hardcoding these for now.

  see: https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/
*/

const colors = {
  white: '#fff',
  black: '#000',
  sereneMidnight: '#0D0D0D',
};

const fonts = {
  baseFontSize: '16px',
  smallFontSize: '12PX',
};

const theme = {
  colors,
  fonts,
};

export default theme;
