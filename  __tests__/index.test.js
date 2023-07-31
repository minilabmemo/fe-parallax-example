const fs = require("fs");
const path = require("path");

test("測試 index.html 快照", () => {
  // 讀取 index.html 檔案的內容
  const indexPath = path.join(__dirname, "../index.html");
  const indexContent = fs.readFileSync(indexPath, "utf8");

  // 將內容轉換成字串，這樣 Jest 可以將其保存為快照
  const contentString = JSON.stringify(indexContent, null, 2);

  // 將內容與快照進行比較
  expect(contentString).toMatchSnapshot();
});
