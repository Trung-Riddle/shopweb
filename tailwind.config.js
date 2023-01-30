export const purge = [];
export const darkMode = false;
export const theme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  container: {
    center: true,
    padding: '1rem',
  },
  extend: {
    colors: {
      primary: '#FD3D57'
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
    }
  },
};
export const variants = {
  extend: {
    visibility: ['group-hover'],
    display: ['group-hover']
  },
};
export const plugins = [require('@tailwindcss/forms')];