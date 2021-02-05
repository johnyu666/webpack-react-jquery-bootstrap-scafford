var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack')

//htmlPlugin的配置信息
let htmlPluginOptions={}
htmlPluginOptions.title='由HtmlWebpackPlugin生成的网页';
htmlPluginOptions.template="src/assets/template.html";
htmlPluginOptions.info='自定义信息';

module.exports = {
  mode: 'development',
  devtool: false,
  entry:{
    app: './src/index.js',//app模块
    john: { import: './src/john.js', dependOn: 'react-vendors' },//john模块，内部依赖了jquery
    'react-vendors': ['react', 'react-dom'],
  },
  //启动服务器，并监视源代码进行热更新
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules:
        [
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', options: { presets: ['@babel/preset-env','@babel/preset-react'] }
                }
            },//用于转译ES6+和JSX
        ]
    },

    plugins: [new HtmlWebpackPlugin(htmlPluginOptions),//自动生成html(使用了src/assets/template.html)
        new webpack.SourceMapDevToolPlugin({filename: '[name].js.map'}), //与devtools:false配合，生成map跟踪源代码
    ],
};