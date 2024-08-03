/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#207BFF",
      },
      boxShadow: {
        card: "0px 25px 15px 0px rgba(0, 0, 0, 0.08), 0px -2px 4px 0px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        initialLoad: "transitionIn 0.9s ease-in",
        'infinite-scroll': 'infinite-scroll 70s linear infinite',
      },
      keyframes: {
        transitionIn: {
          from: {
            opacity: "0",
            transform: "rotateX(-10deg)", // Corrected typo
          },
          to: {
            opacity: "1",
            transform: "rotateX(0deg)", // Corrected typo
          },
        },
        'infinite-scroll': { // Moved this outside of transitionIn
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
