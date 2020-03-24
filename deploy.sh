#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist
# 部署到自定义域域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 部署到 https://github.com/yinmin8610/homie.git 分支為 gh-pages
git push -f https://github.com/yinmin8610/homie.git master:gh-pages
cd -