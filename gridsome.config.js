// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require ('path');

function addStyleResource(rule) {
  rule.use('style-resources')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // path.resolve(__dirname, './src/assets/styles/vendor/tailwind.css'),
        path.resolve(__dirname, './src/assets/styles/vendor/_modularscale.scss'),
        path.resolve(__dirname, './src/assets/styles/modules/_variables.scss'),
        path.resolve(__dirname, './src/assets/styles/modules/_typography.scss'),
      ]
    })
}


module.exports = {
  siteName: 'Palingenae',
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [{
    use: "gridsome-plugin-tailwindcss",
    options: {
      tailwindConfig: './tailwind.config.js',
      presetEnvConfig: {},
      shouldImport: true,
      shouldTimeTravel: true
    }
  },
]}
