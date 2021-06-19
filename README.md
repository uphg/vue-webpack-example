

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

## 5. 添加 Vue Loader

安装

```sh
yarn add -D vue vue-loader vue-template-compiler 
```

配置 `webpack.config.js`

```js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
}
```


## 5. 添加 Babel Loader

安装

```sh
yarn add -D babel-core babel-loader @babel/core
```

配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}
```

## 添加 Sass Loader

安装

```sh
yarn add -D sass-loader sass
```

配置

```js
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
};
```

## 添加热更新

安装

```sh
yarn add -D webpack-dev-server
```

配置

```js
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true, // 启用热更新
  },
};
```

添加脚本

```json
{
  "scripts": {
    "start": "webpack serve --hot"
  }
}
```

## 添加 ESLint

安装

```sh
yarn add -D eslint eslint-plugin-vue
```

添加 `.eslintrc.js` 文件

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```

添加快捷检查脚本

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.{js,vue}\"",
  }
}
```

添加后运行以下命令即可

```sh
# 运行检查
yarn lint

# 检查并修复
yarn lint --fix
```

## 添加 CSS 样式文件分离

安装

```sh
yarn add -D mini-css-extract-plugin
```

配置参考示例项目

## 添加生产模式配置

- 创建 `webpack.common.js` 表示开发/生产模式的公共配置
- 创建 `webpack.prod.js` 表示开发模式的配置
- 创建 `webpack.dev.js` 表示生产模式的配置

> 通过 添加 `mode: 'development'` 属性来区分开发/生产模式，具体参考项目配置