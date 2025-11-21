import type { Config } from 'tailwindcss'
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        civic: {
          blue: '#4C7FD8'
        },
        navy: {
          900: '#0E1729',
          800: '#121F35',
          700: '#24344F'
        }
      },
      backgroundColor: {
        body: 'var(--color-body)',
        surface: 'var(--color-surface)'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      borderColor: {
        subtle: '#24344F'
      }
    }
  }
}) satisfies Config
