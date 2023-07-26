

## start
- v1.0.0
- sandcodebox （vanilla）
- landing-page-forked to fe-night-sky
- package -tool  parcel
- parallax animation 


  ## 啟動

  第一種方式. 安裝 live server 對著index.html 按 go live 
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

  - 改變預設生成資料夾 /dist 改成生成在/build 
  採用gh-pages -d build 時可能會抓這邊。
  ```
  "build": "parcel build index.html --out-dir build",
  ```

* build 後的 index.html 理論上應該也可以用 live server 開啟正常。

  ## deploy
  ```
  $ npm run deploy
  > gh-pages -d build

  Published
  ```
- https://minilabmemo.github.io/fe-parallax-example/

  ### (補充) deploy/build open issue
  - 網站樣式與圖片都不見了
  parcel build 會幫你把css/js等等檔案放到build中，然後引入路徑也不一樣，可是這樣通常是絕對路徑，會造成找不到檔案的狀況。

```
  //本地打開 build index.html
Refused to apply style from 'http://127.0.0.1:5500/style.01b3b57d.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

//部署上去也是
   minilabmemo.github.io/:1     GET https://minilabmemo.github.io/style.01b3b57d.css 404
  
 ```

- 解法 加上--public-url ./  可以改成相對路徑 再次開啟就抓到了。


```
"build": "parcel build index.html --out-dir build  --public-url ./
```