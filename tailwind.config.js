module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Use aspect ratio plugin for tailwind for responsive youtube embeds
    require('@tailwindcss/aspect-ratio'),
  ],
}