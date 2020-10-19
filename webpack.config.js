const path = require('path');
const glob = require("glob");

const payloadsPath = "./src/payloads"
module.exports = {
  entry: glob.sync(`${payloadsPath}/*.js`).reduce((acc, item) => {
    const name = path.basename(item, '.js');
    acc[name] = `${payloadsPath}/${name}.js`;
    return acc;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};