let allCells = document.querySelectorAll(".cell");
let counter = 0;

while (counter < allCells.length) {
  counter++;
  switch (true) {
    case counter < 8:
      if (counter % 2) {
        allCells[counter - 1].classList.add("black");
      }
      break;
    case counter < 16:
      if (counter % 2) {
        allCells[counter].classList.add("black");
      }
      break;
    case counter < 24:
      if (counter % 2) {
        allCells[counter - 1].classList.add("black");
      }
      break;
    case counter < 32:
      if (counter % 2) {
        allCells[counter].classList.add("black");
      }
      break;
    case counter < 40:
      if (counter % 2) {
        allCells[counter - 1].classList.add("black");
      }
      break;
    case counter < 48:
      if (counter % 2) {
        allCells[counter].classList.add("black");
      }
      break;
    case counter < 56:
      if (counter % 2) {
        allCells[counter - 1].classList.add("black");
      }
      break;
    case counter < 64:
      if (counter % 2) {
        allCells[counter].classList.add("black");
      }
      break;
  }
}
