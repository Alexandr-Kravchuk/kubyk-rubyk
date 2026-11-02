// Size each grid item independently so shorter steps do not leave empty rows.
const steps = document.querySelector('.steps');
steps.classList.add('packed');
const cards = [...steps.children];
let frame;
function arrange() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const columns = getComputedStyle(steps).gridTemplateColumns.split(' ').length;
    for (const card of cards) {
      card.style.gridRowEnd = columns > 1
        ? `span ${Math.ceil(card.getBoundingClientRect().height) + 20}`
        : '';
    }
  });
}
const observer = new ResizeObserver(arrange);
observer.observe(steps);
cards.forEach(card => observer.observe(card));
arrange();
