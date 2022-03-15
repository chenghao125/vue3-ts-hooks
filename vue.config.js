const path = require("path");

module.exports = { 
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
    config.resolve.alias
      .set("hooks", path.resolve("hooks")) 
  },
  
}