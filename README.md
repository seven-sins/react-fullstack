### 1. init

  npm init
  npm install

  npm run server

  webpack打包

  #npm install -g live-server # 服务, 使用live-server启动, 端口8080

  #npm install redux --save
  #npm install antd-mobile@next --save
  #npm install axios --save
  #npm install cookie-parser --save
  #npm install --save-dev webpack-cli

  webapck4.x后, 相关命令移到webpack-cli

### 2. 自动添加css3前缀

  npm install --save-dev postcss-loader autoprefixer 

  自动添加css3前缀, 配置postcss.config.js

  module.exports={
    plugins: [
        require('autoprefixer')
    ]
  }

### 3. 打包时移除未使用的css

  #插件未生效, 待排查
  npm install --save-dev purify-css    # npm -i -D 等同于npm install --save-dev
  npm install --save-dev purifycss-webpack

### 4. babel
  
  npm install --save babel-core 
  npm install --save babel-loader 
  npm install --save babel-preset-es2015 
  npm install --save babel-preset-react