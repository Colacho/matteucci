const primary = {
  default: 'var(--color-brand-primary-500)',
  contrast: 'var(--color-brand-primary-contrast)',
  100: 'var(--color-brand-primary-100)',
  200: 'var(--color-brand-primary-200)',
  300: 'var(--color-brand-primary-300)',
  400: 'var(--color-brand-primary-400)',
  500: 'var(--color-brand-primary-500)',
  600: 'var(--color-brand-primary-600)',
  700: 'var(--color-brand-primary-700)',
  800: 'var(--color-brand-primary-800)',
  900: 'var(--color-brand-primary-900)',
};

const accent = {
  default: 'var(--color-brand-accent-500)',
  contrast: 'var(--color-brand-accent-contrast)',
  100: 'var(--color-brand-accent-100)',
  200: 'var(--color-brand-accent-200)',
  300: 'var(--color-brand-accent-300)',
  400: 'var(--color-brand-accent-400)',
  500: 'var(--color-brand-accent-500)',
  600: 'var(--color-brand-accent-600)',
  700: 'var(--color-brand-accent-700)',
  800: 'var(--color-brand-accent-800)',
  900: 'var(--color-brand-accent-900)',
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary,
        accent,
      },
      backgroundColor: {
        primary,
        accent,
      },
      textColor: {
        primary,
        accent,
      },
    },
    fontFamily: {
      gotham: ['"Gotham Bold"', 'Arial', 'sans-serif'],
      roboto: ['"Roboto"', 'sans-serif'],
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 151, 57, 0.1), 0 4px 6px -2px rgba(0, 151, 57, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
  },
  variants: {},
  plugins: [],
};
