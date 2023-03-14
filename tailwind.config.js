
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}