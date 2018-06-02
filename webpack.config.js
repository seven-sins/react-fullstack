const path=require('path');

module.exports={
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
    module: {},
    // 4.插件
    plugins: [],
    // 5.开发服务
    devServer: {}
}