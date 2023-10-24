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
        home_1Bg: "url('../public/Home_1.png')",
        bgvisa: "url('../public/bg-visa.svg')",
        bgwin: "url('../public/bg-winwin.svg')",
      },
    },
  },
  plugins: [],
};
