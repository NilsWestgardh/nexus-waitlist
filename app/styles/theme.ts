'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8',
    },
    secondary: {
      main: '#f472b6',
    },
    background: {
      default: '#020617',
      paper: '#020617',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#e5e7eb',
      disabled: '#9ca3af',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#eab308',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#22c55e',
    },
    divider: '#4b5563',
  },
  typography: {
    fontWeightLight: 300,
    h1: {
      fontSize: '6rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontWeight: 400,
    },
    overline: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;