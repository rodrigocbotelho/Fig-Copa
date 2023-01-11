let start = false
function changeCard(event) {
    const card = event.currentTarget;
    const backgroundImage = start
        ? "img-2-verde"
        : "img-1-azul";
    start = !start
    card.style.backgroundImage = `url(assets/${backgroundImage}.svg)`;
}