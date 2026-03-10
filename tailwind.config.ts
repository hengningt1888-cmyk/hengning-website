import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./client/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Noto Serif SC', 'PingFang SC', 'Microsoft YaHei', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
