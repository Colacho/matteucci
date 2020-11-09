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
  },
  variants: {},
  plugins: [],
};
