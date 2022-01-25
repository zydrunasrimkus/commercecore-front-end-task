module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      sofiapro: ["sofia-pro", "sans-serif"],
    },
    extend: {
      boxShadow: {
        myShadow: "0px 4px 10px rgba(67, 40, 16, 0.24)",
      },
      colors: {
        gray3: "#333333",
        gray4: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
