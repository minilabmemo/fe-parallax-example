

## start
- v1.0.0
- sandcodebox （vanilla）
- landing-page-forked to fe-night-sky
- parallax animation 


  ## 啟動

  第一種方式. 安裝 live server 按 go live
  第二種方式. 利用 npm start 用 parcel 啟動
  ```
  > parcel index.html --open

  Server running at http://localhost:1234 

  過程中會產生.cache(加速開發) 與 dist 資料夾，可以將兩者加入 gitignore 中
  ```

  - parcel build index.html 報錯 跟這篇 htmlnano 解法一樣 [parcel-js-tree-render-is-not-a-function](https://stackoverflow.com/questions/67087634/parcel-js-tree-render-is-not-a-function)
  
  - 確保可以 build 之後, 撰寫 dockerfile, build image
  ```
  docker build -t fe-night-sky . --no-cache
  docker run -p 80:80 fe-night-sky
  打開 http://localhost 看到網站了！
  ```