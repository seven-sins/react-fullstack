const path=require('path');
//
const glob=require('glob');
// 压缩插件
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
// 
const htmlPlugin=require('html-webpack-plugin');
//
const PurifyCSSPlugin=require('purifycss-webpack');

module.exports={
    // 调试
    devtool: 'source-map',
    // 1.入口
    entry: {
        entry: './src/index.js'
    },
    // 2.出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // 3.模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 大于值时直接复制文件, 小于值时转换成base64编码
                            limit: 5000,
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            // less
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    // 4.插件
    plugins: [
        // 压缩
        // new UglifyJsPlugin(),
        // html
        new htmlPlugin({
            minify: {
                // 移除属性的引号
                removeAttributeQuotes: true
            },
            // 禁用缓存
            hash: true,
            template: './src/index.html'
        }),
        // 移除未使用的css
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, './src/*.html'))
        })
    ],
    // 5.开发服务
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        compress: true,
        port: 80
    }
}