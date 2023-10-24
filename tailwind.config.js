/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        copyBg: "url('../public/Copy.png')",
        cryptoBg: "url('../public/Crypto.png')",
        getBg: "url('../public/Get.png')",
        homeBg: "url('../public/Home.png')",
      },
    },
  },
  plugins: [],
};
