const path = require("path");
const pluginSass = require("eleventy-plugin-dart-sass");
const pluginPurgeCss = require("eleventy-plugin-purgecss");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);

  eleventyConfig.addPlugin(pluginSass, {
    sassLocation: path.resolve("./src/assets/styles/"),
    sassIndexFile: "/styles.scss",
    watchSass: true,

    outDir: path.resolve("./public/"),
    outPath: "/assets",
    outFileName: "styles"
  });

  eleventyConfig.addPlugin(pluginPurgeCss, {
    config: "./purgecss.config.js",
    quiet: false
  });

  eleventyConfig.addPassthroughCopy("src/assets/fonts/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    }
  };
};