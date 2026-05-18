/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主色：深邃科技藍
        navy: {
          DEFAULT: '#0a192f',
          deep:    '#050d1f',
          light:   '#0f2444',
          mid:     '#1d3a6a',
          border:  '#1e3a5f',
        },
        // 輔色：極光數智綠
        neon: {
          DEFAULT: '#00f2fe',
          dim:     '#00c4cc',
          glow:    'rgba(0,242,254,0.15)',
          border:  'rgba(0,242,254,0.3)',
        },
        // 點綴色：輝煌銅金 (updated from #f1c40f to match LOGO)
        gold: {
          DEFAULT: '#c89968',
          light:   '#e0b882',
          glow:    'rgba(200,153,104,0.15)',
        },
        // 文字
        ink: {
          primary:   '#e2f0ff',
          secondary: '#8892a4',
          muted:     '#4a5568',
        },
      },
      fontFamily: {
        sans:  ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-navy': `
          linear-gradient(rgba(0,242,254,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,242,254,0.04) 1px, transparent 1px)
        `,
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,242,254,0.12), transparent)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon-sm':  '0 0 8px rgba(0,242,254,0.4)',
        'neon-md':  '0 0 20px rgba(0,242,254,0.3), 0 0 40px rgba(0,242,254,0.1)',
        'neon-lg':  '0 0 40px rgba(0,242,254,0.4), 0 0 80px rgba(0,242,254,0.15)',
        'gold-sm':  '0 0 10px rgba(200,153,104,0.4)',
        'gold-md':  '0 0 20px rgba(200,153,104,0.3)',
        'copper-glow': '0 0 12px rgba(200,153,104,0.35)',
      },
      animation: {
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'scan-line':   'scanLine 4s linear infinite',
        'spin-slow':   'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spinReverse 25s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
