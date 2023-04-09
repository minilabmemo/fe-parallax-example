


## 文案
```
Uncover the mysteries of the night sky
揭開夜弄的奧密

The night sky is vast and mysterious, shimmering with stars and constellations. Each celestial body has its own unique story and charm, leaving us in awe and wonder. Exploring the night sky is an unforgettable journey.
夜空廣闊神秘，閃耀著星群和星座。每個星體都有著獨特的故事和魅力，令人驚嘆和著迷。探索夜空是一次永難忘懷的旅程。
```

## 排版
- full-page-container 滿版
要讓一個區塊填滿整個視窗， `height: 100vh; width: 100%;`


- 背景縮放
  - 設定縮放動畫 //TODO 調整計算符合設計稿
  - 動畫範圍：
因為“只有背景”要縮放，所以要自己獨立一層，否則如果把文字等等的內容一起放在同一個區塊中，就會發現文字所有內容一起跟著放大縮小．
 - background-repeat: round. 
//我有一張圖，超級大，但是我設定了滿版效果，試圖填滿螢幕
但發現超出去的地方不見了，而我用了這個設定，它就自動縮小填滿了


- 背景圖一開始是放大圖，超出了滿版區塊
要設定父層，讓他超出去的地方隱藏 ` overflow: hidden`

- 獨立之後的排版定位調整
因為圖片背景佔了一些空間，其他文字標題等等空間會被擠到下方，因此定位上讓這些物件變成absolute，然後定位在畫面上方．

- 標題的水平置中
absolute的水平置中，原先的flex置中失效了
```
 /* 標題水平置中 左右設為0 邊界自動計算*/
  left: 0;
  right: 0;
  margin: auto;
  ```

- 淡出動畫
```
animation: fadein 4s;
```

- img標籤的白邊問題 與使用背景圖background-image
  - [如何解决 img 标签四周出现白边的问题](https://blog.csdn.net/yiguoxiaohai/article/details/121673610)
  - [新增圖片時，該用HTML的img，還是CSS的background-image？](https://jimmyswebnote.com/html-img-or-css-background-image/)

  ```diff
  四周出現白邊
  - <img class="fe-img">
  - .bg-img {
  - background-image: url(./src/img/2_back.png);
  - }
  
  + <img class="fe-img" src="./src/img/fe.png">

  ```
- 滾動到下一個視窗
```diff
scolldown = function () {
  console.log("test")
  console.log(`document.body.scrollHeight ${document.body.scrollHeight}`) //2600 範例會根據視窗大小不同
  console.log(`document.body.clientHeight ${document.body.clientHeight}`) //995 範例會根據視窗大小不同
+  window.scrollTo(0, document.body.clientHeight)
}
如果設定scrollHeight會滾動到底部

```
