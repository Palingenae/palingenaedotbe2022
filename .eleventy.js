const path = require("path");
const pluginSass = require("eleventy-plugin-dart-sass");
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

  eleventyConfig.addPassthroughCopy("src/assets/fonts/");

  eleventyConfig.setDataDeepMerge(false);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    }
  };
};