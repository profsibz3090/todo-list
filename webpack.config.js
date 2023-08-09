const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
       main: path.resolve(__dirname, './src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,  
    },
    devtool: 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      open: true,
      port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|jpg|webp|avif|png|svg)$/,
                type:'asset/resource'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
       new HtmlWebpackPlugin({
          title: 'Todo List',
          filename: 'index.html',
          template:'./src/templete.html'
       })
    ]
}