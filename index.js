// 匯入 scroll.js 中的 install 函數
import {install} from './src/js/scroll.js';


// 定義 click 事件處理函數
function handleScrollDownClick() {
  window.scrollTo(0, document.body.clientHeight);// 捲動視窗到下一頁
}

// 等待整個頁面載入完成後再執行這個函數
window.addEventListener('load', function () {
  install();// 當頁面載入完成後，呼叫 scroll.js 中的 install 函數

  // 取得所有具有 class="scroll_down" 的元素 將 click 事件處理函數綁定到每個元素上
  const scrollDownElements = document.querySelectorAll('.scroll_down');
  scrollDownElements.forEach(element => {
    element.addEventListener('click', handleScrollDownClick);
  });
});