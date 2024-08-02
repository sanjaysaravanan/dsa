const draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", null); // Required for Firefox
  event.dataTransfer.effectAllowed = "move";
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log(draggable.offsetHeight);
  console.log(event.pageX);
  const offsetX = event.offsetX - draggable.offsetWidth / 2;
  const offsetY = event.offsetY - draggable.offsetHeight / 2;
  draggable.style.position = "absolute";
  draggable.style.left = `${event.pageX - offsetX}px`;
  draggable.style.top = `${event.pageY - offsetY}px`;
});
