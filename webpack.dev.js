const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 添加报错文件映射
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true, // 启用热更新
  },
};