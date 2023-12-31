const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolvePath("src/assets"),
      "@components": resolvePath("src/components"),
      "@constants": resolvePath("src/constants"),
      "@styles": resolvePath("src/styles"),
      "@utils": resolvePath("src/utils"),
    },
  },
};
