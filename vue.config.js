const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },

  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: "src/assets/svg",
      /*
       * The regex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: "img/icons.[hash:8].svg", // or 'img/icons.svg' if filenameHashing == false это хз что за строка
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
});
