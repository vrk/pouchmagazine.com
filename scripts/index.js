async function main() {
  const spreadContainerEl = document.getElementById("spread-container");
  const topPouchEl = document.getElementById("top-pouch");
  spreadContainerEl.addEventListener("click", () => {
    topPouchEl.classList.toggle("open");
  })
}

main();

////////
////////
////////

function addFeatureHovers() {
  
}