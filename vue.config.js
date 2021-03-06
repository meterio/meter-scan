const debug = process.env.NODE_ENV !== "production";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    // plugins: [new BundleAnalyzerPlugin()]
    externals: { moment: "moment" }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-avatar": "src",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        };

        return options;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_media.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_color.scss";
        `
      }
    }
  }
  // ,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://api.meter.io:4000/api/", //对应自己的接口
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
};
