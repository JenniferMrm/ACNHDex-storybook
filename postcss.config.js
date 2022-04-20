module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      flexbox: "no-2009",
    }),
  ],
};
