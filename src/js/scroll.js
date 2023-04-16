
const cards = document.querySelectorAll('.team-member-container');
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  let triggerBottom = window.innerHeight * 1;
  cards.forEach((card, i) => {
    let boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.style.animation = ` 2s fadein-main ${(i + 1) * 0.3}s ease-in-out`
    } else {
      card.style.animation = ''
    }
  });
}
