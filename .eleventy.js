module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "./src",
      includes: "./src/_includes",
      data: "./src/_data",
      output: "./public"
    }
  };
};