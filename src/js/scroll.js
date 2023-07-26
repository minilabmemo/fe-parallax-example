
export function install() {

  const cards = document.querySelectorAll('.group-container');
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    let triggerBottom = window.innerHeight * 1;
    cards.forEach((card, i) => {
      let boxTop = card.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        card.style.animation = ` 2s fade-in-photo ${(i + 1) * 0.3}s ease-in-out`
        card.style.animationFillMode = 'forwards'; /*動畫會停留在最後一步 */

      } else {
        card.style.animation = ''
        card.style.opacity = 0; /*一開始看不到，才不會出現又消失 */
      }
    });
  }
}