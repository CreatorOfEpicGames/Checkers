let mass_of_letter = [".a", ".b", ".c", ".d", ".e", ".f", ".g", ".h"];
let active_checkers_row;
let active_checkers_letter;

function findActiveChekerCoordinates(details_of_event) {
  active_checkers_row = details_of_event.target.parentElement.classList[2];
  active_checkers_letter = mass_of_letter.indexOf(
    `.${details_of_event.target.parentElement.classList[1]}`
  );
}

function findEmptyCell(letter, row) {
  let current_box = findCurrentBoxUsingCordinates(row, letter);
  let there_is_Checker = current_box?.lastElementChild?.localName == "img"; // there is will be true\false

  if (current_box && !there_is_Checker) {
    current_box.classList.add("green-shadow");
    current_box.onclick = moveCheckers;
  }
}

function findFirstEnemyNearby(activeCheckersrc) {
  let letter = mass_of_letter[active_checkers_letter - 1];
  let row = active_checkers_row - 2;
  let existEnemy = findCurrentBoxUsingCordinates(row, letter);
  let enemyHasChecker = existEnemy?.lastElementChild?.localName; // there is will be true\false
  let existPlaceAfterAttack = findCurrentBoxUsingCordinates(
    +active_checkers_row - 3,
    mass_of_letter[active_checkers_letter - 2]
  );
  let placeAfterAttackHasChecker =
    !existPlaceAfterAttack?.lastElementChild?.localName;
  let friendlyFire = activeCheckersrc == existEnemy?.children[0]?.src;
  if (
    existEnemy &&
    enemyHasChecker &&
    existPlaceAfterAttack &&
    placeAfterAttackHasChecker &&
    !friendlyFire
  ) {
    existPlaceAfterAttack.classList.add("attack-shadow");
    existPlaceAfterAttack.onclick = function (details_of_event) {
      attacking(details_of_event, existEnemy);
    };
    return true;
  }
}

function findSecondEnemyNearby(activeCheckersrc) {
  let letter = mass_of_letter[active_checkers_letter + 1];
  let row = active_checkers_row - 2;
  let enemy = findCurrentBoxUsingCordinates(row, letter); //supposed enemy
  let enemyHasChecker = enemy?.lastElementChild?.localName; // there is will be true\false
  let placeAfterAttack = findCurrentBoxUsingCordinates(
    +active_checkers_row - 3,
    mass_of_letter[active_checkers_letter + 2]
  );
  let placeAfterAttackHasChecker =
    !placeAfterAttack?.lastElementChild?.localName;
  let friendlyFire = activeCheckersrc == enemy?.children[0]?.src;

  if (
    enemy &&
    enemyHasChecker &&
    placeAfterAttack &&
    placeAfterAttackHasChecker &&
    !friendlyFire
  ) {
    placeAfterAttack.classList.add("attack-shadow");
    placeAfterAttack.onclick = moveCheckers;
    placeAfterAttack.onclick = function (details_of_event) {
      attacking(details_of_event, enemy);
    };
    return true;
  }
}
function findThirdEnemyNearby(activeCheckersrc) {
  let letter = mass_of_letter[active_checkers_letter - 1];
  let row = active_checkers_row;
  let enemy = findCurrentBoxUsingCordinates(row, letter);
  let enemyHasChecker = enemy?.lastElementChild?.localName; // there is will be true\false
  let placeAfterAttack = findCurrentBoxUsingCordinates(
    +active_checkers_row + 1,
    mass_of_letter[active_checkers_letter - 2]
  );
  let placeAfterAttackHasChecker =
    !placeAfterAttack?.lastElementChild?.localName;
  let friendlyFire = activeCheckersrc == enemy?.children[0]?.src;

  if (
    enemy &&
    enemyHasChecker &&
    placeAfterAttackHasChecker &&
    placeAfterAttack &&
    !friendlyFire
  ) {
    placeAfterAttack.classList.add("attack-shadow");
    placeAfterAttack.onclick = moveCheckers;
    placeAfterAttack.onclick = function (details_of_event) {
      attacking(details_of_event, enemy);
    };
    return true;
  }
}
function findFourthEnemyNearby(activeCheckersrc) {
  let letter = mass_of_letter[active_checkers_letter + 1];
  let row = active_checkers_row;
  let enemy = findCurrentBoxUsingCordinates(row, letter);
  let enemyHasChecker = enemy?.lastElementChild?.localName; // there is will be true\false
  let placeAfterAttack = findCurrentBoxUsingCordinates(
    +active_checkers_row + 1,
    mass_of_letter[active_checkers_letter + 2]
  );
  let placeAfterAttackHasChecker =
    !placeAfterAttack?.lastElementChild?.localName; // there is will be true\false
  let friendlyFire = activeCheckersrc == enemy?.children[0]?.src;

  if (
    enemy &&
    enemyHasChecker &&
    placeAfterAttackHasChecker &&
    placeAfterAttack &&
    !friendlyFire
  ) {
    placeAfterAttack.classList.add("attack-shadow");
    placeAfterAttack.onclick = moveCheckers;
    placeAfterAttack.onclick = function (details_of_event) {
      attacking(details_of_event, enemy);
    };
    return true;
  }
}

function allowMove(details_of_event) {
  if (details_of_event.target.src == "http://127.0.0.1:5500/light.png") {
    findEmptyCell(
      (letter = mass_of_letter[active_checkers_letter - 1]),
      (row = active_checkers_row - 2)
    );
    findEmptyCell(
      (letter = mass_of_letter[active_checkers_letter + 1]),
      (row = active_checkers_row - 2)
    );
  } else {
    findEmptyCell(
      (letter = mass_of_letter[active_checkers_letter - 1]),
      (row = +active_checkers_row)
    );
    findEmptyCell(
      (letter = mass_of_letter[active_checkers_letter + 1]),
      (row = +active_checkers_row)
    );
  }
}
function allowAttack(activeCheckersrc) {
  console.log(
    findFirstEnemyNearby(activeCheckersrc),
    findSecondEnemyNearby(activeCheckersrc),
    findThirdEnemyNearby(activeCheckersrc),
    findFourthEnemyNearby(activeCheckersrc)
  );
}

function findCurrentBoxUsingCordinates(rowNumber, letter) {
  row_cells = document.querySelectorAll(letter);
  return row_cells[rowNumber];
}

function refreshActive() {
  let massiveAllCells = document.querySelectorAll(".cell");
  for (let current_cell of massiveAllCells) {
    current_cell.children[0]?.classList.remove("box_shadow");
    current_cell.classList.remove("green-shadow");
  }
}

function refreshMove() {
  let allCellsWithGreenShadow = document.querySelectorAll(".green-shadow");
  for (const cellwithGreenShadow of allCellsWithGreenShadow) {
    cellwithGreenShadow.classList.remove("green-shadow");
    cellwithGreenShadow.onclick = null;
  }
}

function refreshAttack() {
  let allCellsWithGreenShadow = document.querySelectorAll(".attack-shadow");
  for (const cellwithAttackShadow of allCellsWithGreenShadow) {
    cellwithAttackShadow.classList.remove("attack-shadow");
    cellwithAttackShadow.onclick = null;
  }
}
function changeTurnBackround() {
  turnBackround.classList.toggle("black");

  if (turnBackround.classList?.[1]) {
    enableBlackChecker();
  } else {
    enableWhiteChecker();
  }
}
function enableWhiteChecker() {
  let allWhiteCheckers = document.querySelectorAll(".light");
  let allBlackCheckers = document.querySelectorAll(".dark");
  for (const whiteCheker of allWhiteCheckers) {
    whiteCheker.onclick = activeChecker;
  }
  for (const blackCheker of allBlackCheckers) {
    blackCheker.onclick = undefined;
  }
}
function enableBlackChecker() {
  let allWhiteCheckers = document.querySelectorAll(".light");
  let allBlackCheckers = document.querySelectorAll(".dark");
  for (const whiteCheker of allWhiteCheckers) {
    whiteCheker.onclick = undefined;
  }
  for (const blackCheker of allBlackCheckers) {
    blackCheker.onclick = activeChecker;
  }
}

function checkerBecomesQueen(currentChecker) {
  if (currentChecker.classList[2] == "8") {
    currentChecker.innerHTML = `<img class=${currentChecker.className}   src="blackDama.png" />`;
  }
  if (currentChecker.classList[2] == "1") {
    currentChecker.innerHTML = `<img class=${currentChecker.className}   src="whiteDama.png" />`;
  }
}
function massAttack() {
  findFirstEnemyNearby(activeCheckersrc),
    findSecondEnemyNearby(activeCheckersrc),
    findThirdEnemyNearby(activeCheckersrc),
    findFourthEnemyNearby(activeCheckersrc);
}
