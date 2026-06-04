/** @type {import('tailwindcss').Config} */
// Design Formulas — Fintech Dashboard
// Brief: trustworthy · seed #2563EB · triadic · light+dark

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // seed
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
          DEFAULT: '#2563EB',
        },
        secondary: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
          DEFAULT: '#D97706',
        },
        tertiary: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
          DEFAULT: '#10B981',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        // semantic aliases for Tailwind consumers
        surface: {
          0: '#F8FAFC',
          1: '#FFFFFF',
          2: '#F8FAFC',
        },
      },
      fontFamily: {
        header: ['Playfair Display', 'Georgia', 'serif'],
        body:   ['Inter', 'system-ui', 'sans-serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // fluid clamp values
        'h1': ['clamp(2rem, 1.4rem + 3vw, 3.125rem)',    { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.75rem, 1.3rem + 2.2vw, 2.625rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'h3': ['clamp(1.5rem, 1.2rem + 1.5vw, 1.875rem)',  { lineHeight: '1.2' }],
        'h4': ['clamp(1.375rem, 1.15rem + 1vw, 1.563rem)', { lineHeight: '1.2' }],
        'h5': ['clamp(1.125rem, 1.05rem + 0.4vw, 1.188rem)', { lineHeight: '1.25' }],
        'body': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.5' }],
        'small': ['clamp(0.6875rem, 0.66rem + 0.1vw, 0.6875rem)', { lineHeight: '1.5' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      boxShadow: {
        '0':    '0px 0px 0px 0px rgba(0,0,0,0)',
        '1':    '0px 5px 10px 0px rgba(0,0,0,0.15)',
        '2':    '0px 7.5px 15px 5px rgba(0,0,0,0.45)',
        'card': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.04)',
      },
      borderRadius: {
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
