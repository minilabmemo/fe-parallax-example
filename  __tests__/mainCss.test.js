const fs = require("fs");
const path = require("path");

test("測試 main.css 快照", () => {
  // 讀取 main.css 檔案的內容
  const cssPath = path.join(__dirname, "../src/css/main.css");
  const cssContent = fs.readFileSync(cssPath, "utf8");

  // 將內容與快照進行比較
  expect(cssContent).toMatchSnapshot();
});
