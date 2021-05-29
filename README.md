

## 1. 搭建 Webpack 脚手架

运行

```sh
mkdir webpack-demo
cd webpack-demo
yarn init -y
yarn add -D webpack webpack-cli
```

## 2. 添加 CSS Loader

安装

```sh
yarn add -D style-loader css-loader
```

## 3. 处理图片文件

配置 `webpack.config.js` 文件

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
```

## 4. 自动化创建 dist 文件

安装

```sh
yarn add -D html-webpack-plugin
```

