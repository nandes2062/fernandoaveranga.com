/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  darkMode: 'class',
  theme: {
    minHeight : {
      '500': '500px'
    },
    extend: {
      spacing: {
        '-10pc': '-10%',
        '26': '6.7rem',
        '30': '8.9rem',
        '80': '20rem',
        '108': '27rem'
      },
      borderWidth: {
        '14': '14px'
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      transparent: 'transparent',
      primary: {
        base: 'hsla(var(--primary-HSL), var(--bg-opacity))',
        100: 'hsla(var(--primary-HS), 90%, var(--bg-opacity))',
        200: 'hsla(var(--primary-HS), 80%, var(--bg-opacity))',
        300: 'hsla(var(--primary-HS), 70%, var(--bg-opacity))',
        400: 'hsla(var(--primary-HS), 60%, var(--bg-opacity))',
        500: 'hsla(var(--primary-HS), 50%, var(--bg-opacity))',
        600: 'hsla(var(--primary-HS), 40%, var(--bg-opacity))',
        700: 'hsla(var(--primary-HS), 30%, var(--bg-opacity))',
        800: 'hsla(var(--primary-HS), 20%, var(--bg-opacity))',
        900: 'hsla(var(--primary-HS), 10%, var(--bg-opacity))'
      },
      secondary: {
        base: 'var(--secondary-color)',
        100: 'hsl(var(--secondary-HS), 90%)',
        200: 'hsl(var(--secondary-HS), 80%)',
        300: 'hsl(var(--secondary-HS), 70%)',
        400: 'hsl(var(--secondary-HS), 60%)',
        500: 'hsl(var(--secondary-HS), 50%)',
        600: 'hsl(var(--secondary-HS), 40%)',
        700: 'hsl(var(--secondary-HS), 30%)',
        800: 'hsl(var(--secondary-HS), 20%)',
        900: 'hsl(var(--secondary-HS), 10%)'
      },
      accent: {
        base: 'var(--accent-color)',
        100: 'hsl(var(--accent-HS), 90%)',
        200: 'hsl(var(--accent-HS), 80%)',
        300: 'hsl(var(--accent-HS), 70%)',
        400: 'hsl(var(--accent-HS), 60%)',
        500: 'hsl(var(--accent-HS), 50%)',
        600: 'hsl(var(--accent-HS), 40%)',
        700: 'hsl(var(--accent-HS), 30%)',
        800: 'hsl(var(--accent-HS), 20%)',
        900: 'hsl(var(--accent-HS), 10%)'
      },
      accent2: {
        base: 'var(--accent2-color)',
        100: 'hsl(var(--accent2-HS), 90%)',
        200: 'hsl(var(--accent2-HS), 80%)',
        300: 'hsl(var(--accent2-HS), 70%)',
        400: 'hsl(var(--accent2-HS), 60%)',
        500: 'hsl(var(--accent2-HS), 50%)',
        600: 'hsl(var(--accent2-HS), 40%)',
        700: 'hsl(var(--accent2-HS), 30%)',
        800: 'hsl(var(--accent2-HS), 20%)',
        900: 'hsl(var(--accent2-HS), 10%)'
      },
      error: {
        base: 'var(--error-color)',
        100: 'hsl(var(--error-HS), 90%)',
        200: 'hsl(var(--error-HS), 80%)',
        300: 'hsl(var(--error-HS), 70%)',
        400: 'hsl(var(--error-HS), 60%)',
        500: 'hsl(var(--error-HS), 50%)',
        600: 'hsl(var(--error-HS), 40%)',
        700: 'hsl(var(--error-HS), 30%)',
        800: 'hsl(var(--error-HS), 20%)',
        900: 'hsl(var(--error-HS), 10%)'
      },
      warning: {
        base: 'var(--warning-color)',
        100: 'hsl(var(--warning-HS), 90%)',
        200: 'hsl(var(--warning-HS), 80%)',
        300: 'hsl(var(--warning-HS), 70%)',
        400: 'hsl(var(--warning-HS), 60%)',
        500: 'hsl(var(--warning-HS), 50%)',
        600: 'hsl(var(--warning-HS), 40%)',
        700: 'hsl(var(--warning-HS), 30%)',
        800: 'hsl(var(--warning-HS), 20%)',
        900: 'hsl(var(--warning-HS), 10%)'
      },
      success: {
        base: 'var(--success-color)',
        100: 'hsl(var(--success-HS), 90%)',
        200: 'hsl(var(--success-HS), 80%)',
        300: 'hsl(var(--success-HS), 70%)',
        400: 'hsl(var(--success-HS), 60%)',
        500: 'hsl(var(--success-HS), 50%)',
        600: 'hsl(var(--success-HS), 40%)',
        700: 'hsl(var(--success-HS), 30%)',
        800: 'hsl(var(--success-HS), 20%)',
        900: 'hsl(var(--success-HS), 10%)'
      },
      info: {
        base: 'var(--info-color)',
        100: 'hsl(var(--info-HS), 90%)',
        200: 'hsl(var(--info-HS), 80%)',
        300: 'hsl(var(--info-HS), 70%)',
        400: 'hsl(var(--info-HS), 60%)',
        500: 'hsl(var(--info-HS), 50%)',
        600: 'hsl(var(--info-HS), 40%)',
        700: 'hsl(var(--info-HS), 30%)',
        800: 'hsl(var(--info-HS), 20%)',
        900: 'hsl(var(--info-HS), 10%)'
      },
      text: {
        base: 'var(--text-color)',
        100: 'hsl(var(--text-HS), 90%)',
        200: 'hsl(var(--text-HS), 80%)',
        300: 'hsl(var(--text-HS), 70%)',
        400: 'hsl(var(--text-HS), 60%)',
        500: 'hsl(var(--text-HS), 50%)',
        600: 'hsl(var(--text-HS), 40%)',
        700: 'hsl(var(--text-HS), 30%)',
        800: 'hsl(var(--text-HS), 20%)',
        900: 'hsl(var(--text-HS), 10%)'
      },
      light: {
        base: 'var(--light-color)',
        100: 'hsl(var(--light-HS), 90%)',
        200: 'hsl(var(--light-HS), 80%)',
        300: 'hsl(var(--light-HS), 70%)',
        400: 'hsl(var(--light-HS), 60%)',
        500: 'hsl(var(--light-HS), 50%)',
        600: 'hsl(var(--light-HS), 40%)',
        700: 'hsl(var(--light-HS), 30%)',
        800: 'hsl(var(--light-HS), 20%)',
        900: 'hsl(var(--light-HS), 10%)'
      },
      dark: {
        base: 'var(--dark-color)',
        100: 'hsl(var(--dark-HS), 90%)',
        200: 'hsl(var(--dark-HS), 80%)',
        300: 'hsl(var(--dark-HS), 70%)',
        400: 'hsl(var(--dark-HS), 60%)',
        500: 'hsl(var(--dark-HS), 50%)',
        600: 'hsl(var(--dark-HS), 40%)',
        650: 'hsl(var(--dark-HS), 35%)',
        700: 'hsl(var(--dark-HS), 30%)',
        800: 'hsl(var(--dark-HS), 20%)',
        900: 'hsl(var(--dark-HS), 10%)'
      },
      theme: {
        base: 'var(--theme-color)',
        '050': 'var(--theme-050)',
        100: 'var(--theme-100)',
        150: 'var(--theme-150)',
        200: 'var(--theme-200)',
        250: 'var(--theme-250)',
        300: 'var(--theme-300)',
        350: 'var(--theme-350)',
        400: 'var(--theme-400)',
        450: 'var(--theme-450)',
        500: 'var(--theme-500)',
        550: 'var(--theme-550)',
        600: 'var(--theme-600)',
        650: 'var(--theme-650)',
        700: 'var(--theme-700)',
        750: 'var(--theme-750)',
        800: 'var(--theme-800)',
        850: 'var(--theme-850)',
        900: 'var(--theme-900)',
        950: 'var(--theme-950)'
      }
    },
    fontFamily: {
      'heading': ['Amatic SC', 'Arial', 'sans-serif'],
      'body': ['Josefin Sans', 'Open Sans', 'sans-serif']
    },
    rotate: {
      '360': '360deg'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'common/**/*.js',
      'common/**/*.html',
      'common/**/*.vue',
      'modules/**/*.js',
      'modules/**/*.html',
      'modules/**/*.vue',
      'layouts/**/*.html',
      'layouts/**/*.js',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'pages/**/*.html',
      'pages/**/*.js',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
