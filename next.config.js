const path = require('path');
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");
const withImages = require('next-images')


module.exports = {
  productionBrowserSourceMaps: true,
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/components/about/About',
      },
      {
        source: '/contact-us',
        destination: '/components/contact-us/ContactUs',
      },
      {
        source: '/partnership',
        destination: '/components/partnership/Partnership'
      },
      {
        source: '/FAQ',
        destination: '/components/faq/Faq'
      }
    ]
  }
};

const nextConfig = {
  target: 'serverless',
  webpack: function (config) {
      config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
      
      return config
  }
}

module.exports = withPlugins([withTM], nextConfig);