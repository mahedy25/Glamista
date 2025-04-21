import type { Config } from 'tailwindcss'
import { withUt } from 'uploadthing/tw'

// Your base Tailwind config
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Export the config wrapped with `withUt`
export default withUt(config)

