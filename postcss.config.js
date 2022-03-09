const postScss = require("postcss-scss");

module.exports = {
    overrides: [
      {
        files: ["src/assets/styles/**/*.scss"],
        customSyntax: postScss,
        extends: ["stylelint-config-standard"],
        rules: {
          "at-rule-no-unknown": null
        }
      }
    ]
  };