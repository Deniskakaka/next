const path = require('path');
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/components/about/About",
      },
      {
        source: "/contact-us",
        destination: "/components/contact-us/ContactUs",
      },
      {
        source: "/partnership",
        destination: "/components/partnership/Partnership",
      },
      {
        source: "/FAQ",
        destination: "/components/faq/Faq",
      },
    ];
  },
};