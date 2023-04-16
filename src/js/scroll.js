// window.addEventListener('scroll', () => {
//   const scrollPositionY = window.pageYOffset;
//   console.log(`scrollPositionY${scrollPositionY}`)
//   // const moon = document.querySelector('.moon');
//   // const moonMoveSpeed = Number(moon.dataset.speed);

//   // moon.style.transform = `translateY(${scrollPositionY * moonMoveSpeed}px)`;
//   //let boxes = document.querySelectorAll(".box");

// });

const moon = document.querySelector('.team-member-container');
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  let triggerBottom = window.innerHeight * 0.8;
  console.log("🚀 ~ file: scroll.js:23 ~ checkBoxes ~ triggerBottom:", triggerBottom)
  // boxes.forEach((box) => {
  let boxTop = moon.getBoundingClientRect().top;
  console.log("🚀 ~ file: scroll.js:26 ~ //boxes.forEach ~ boxTop:", boxTop)
  if (boxTop < triggerBottom) {
    moon.classList.add("show");
    console.log("add")
  } else {
    moon.classList.remove("show");
    console.log("remove")
  }
  //});
}



// window.addEventListener('scroll', () => {
//   console.log("test")
//   const scrollPositionY = window.pageYOffset;
//   console.log(`scrollPositionY${scrollPositionY}`)
//   // const moon = document.querySelector('.moon');
//   // const moonMoveSpeed = Number(moon.dataset.speed);

//   // moon.style.transform = `translateY(${scrollPositionY * moonMoveSpeed}px)`;
//   //let boxes = document.querySelectorAll(".box");

// });