/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        // color custom
        black: {
          100: "#141532",
          
        },
       
        neutral: {
          100: "#F1F1F1",
          200: "#8E8F98",
          300: "#A5AAB0",
          400: "#141411",
        },
        primary: {
          100: "#456BF1",
        }
      },
      backgroundColor: {
        grey: "#F2F4FB",
       
      },
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
