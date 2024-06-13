const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode : "development",
    entry: "./src/index.js",     
    resolve: {
        extensions: ['.js'], 
    },
    module: {
        rules: [
            {
                test: /\.css$/, //확장자가 css인 파일을 선택하는 정규표현식
                use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false, // url()을 올바르게 처리하기 위한 설정 (파일명이 바뀌지 않음.)
                    },
                }
                ],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader:'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]'
                    }
                }],
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename : "index_bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({  
            minify: {
                collapseWhitespace: true
            },
            hash: true,
          template: './public/index.html',  
          
        }),
        new CopyPlugin({
            patterns: [
              {
                from: 'public/',
                to: '',  // dist 이후 경로
                globOptions: {
                  ignore: ['**/*.html', '**/*.js'],
                },
              },
            ],
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
      ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 7000,
        hot: true,
    },
};