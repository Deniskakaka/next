const path = require('path')
const withSvgr = require("next-svgr");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  svgrOptions: {
    configFile: path.resolve(__dirname, '.svgrrc.js'),
  },
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    return config
  },
  async rewrites() {
    return [
      {
        source: '/components/contact-us/ContactUs',
        destination: '/components/about/About',
      },
    ]
  },
}

module.exports = withSvgr({
  svgrOptions: {
    titleProp: true,
    icon: true,
    svgProps: {
      height: 'auto',
    },
  },
});