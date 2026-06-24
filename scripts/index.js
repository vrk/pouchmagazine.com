async function main() {
  const easelContainerEl = document.getElementById("easel-container");
  const topPouchEl = document.getElementById("top-pouch");
  easelContainerEl.addEventListener("click", () => {
    topPouchEl.classList.toggle("open");
  })
}

main();

////////
////////
////////

function addFeatureHovers() {
  
}