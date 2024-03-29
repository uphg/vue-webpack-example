const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 配置参考：https://webpack.docschina.org/configuration/resolve/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      // {
      //   test: /\.css$/,
      //   use: ['vue-style-loader', 'css-loader',]
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['vue-style-loader', 'css-loader', 'sass-loader']
      // },
      // {
      //   test: /\.((c|sa|sc)ss)$/i,
      //   use: [
      //     process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      // {
      //   test: /\.((c|sa|sc)ss)$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body', // 配置 JS 文件引入到哪里
      template: './template/index.html'
    }),
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ],
};