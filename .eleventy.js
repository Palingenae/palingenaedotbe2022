const pluginSass = require("eleventy-plugin-sass");
const pluginPurgeCss = require("eleventy-plugin-purgecss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: "src/assets/styles/**/*.scss",
    outputDir: "public/assets/styles"
  });

  eleventyConfig.addPlugin(pluginPurgeCss, {
    config: "./purgecss.config.js",
    quiet: false
  })

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