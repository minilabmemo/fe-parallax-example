

scolldown = function () {
  console.log("test")
  console.log(`document.body.clientHeight ${document.body.scrollHeight}`)
  console.log(`document.body.scrollHeight ${document.body.clientHeight}`)
  window.scrollTo(0, document.body.scrollHeight)
}

// function scolldown() {
//   console.log("test")
// }