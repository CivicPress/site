import type { Config } from 'tailwindcss'
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        civic: {
          background: '#F4F7FB',
          blue: '#4C7FD8',
          blueHover: '#3D72C7',
          textPrimary: '#0E1729',
          textSecondary: '#3A4656',
          badgeBorder: '#D3DEEE',
          badgeBg: '#EEF3FB'
        }
      }
    }
  }
}) satisfies Config


