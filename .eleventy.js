const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: "src/assets/styles/**/*.scss",
    outputDir: "public/styles"
  });

  eleventyConfig.addPassthroughCopy("src/assets/fonts/");

  return {
    dir: {
      input: "src",
      includes: "src/_includes",
      data: "src/_data",
      output: "public"
    }
  };
};