let massOfLetter = ['.a', '.b', '.c', '.d', '.e', '.f', '.g', '.h']
let activeCheckerRow
let activeCheckerLetter
let activeChecker

function setActiveCell(...data) {
  if (data.length == 1) {
    activeChecker = data[0]
    activeCheckerRow = activeChecker.parentElement.classList[2]
    activeCheckerLetter = massOfLetter.indexOf(`.${activeChecker.parentElement.classList[1]}`)
  } else {
    activeCheckerRow = data[0]
    activeCheckerLetter = data[1]
    activeChecker = findCell(activeCheckerRow, massOfLetter[activeCheckerLetter])
  }
}

function findCell(rowNumber, letter) {
  let row_cells = document.querySelectorAll(letter)
  return row_cells[rowNumber]
}

function findEmptyCell(letter, row) {
  let current_box = findCell(row, letter)
  let there_is_Checker = current_box?.lastElementChild?.localName == 'img' // there is will be true\false
  if (current_box && !there_is_Checker) {
    current_box.classList.add('green-shadow')
    current_box.onclick = moveCheckers
  }
  return there_is_Checker
}

function findFirstEnemyNearby(x = 2, y = 1) {
  let row = activeCheckerRow - x
  let letter = massOfLetter[activeCheckerLetter - y]
  let enemy = findCell(row, letter)
  let enemyHasChecker = enemy?.lastElementChild?.localName // there is will be true\false
  let placeAfterAttack = findCell(+activeCheckerRow - x - 1, massOfLetter[activeCheckerLetter - y - 1])
  let placeAfterAttackHasntChecker = !placeAfterAttack?.lastElementChild?.localName
  let friendlyFire = activeChecker.classList[0] == enemy?.children[0]?.classList[0]

  if (enemyHasChecker && placeAfterAttack && placeAfterAttackHasntChecker && !friendlyFire) {
    return [placeAfterAttack, enemy]
  }
}

function findSecondEnemyNearby(x = 2, y = 1) {
  let row = activeCheckerRow - x
  let letter = massOfLetter[activeCheckerLetter + y]
  let enemy = findCell(row, letter) //supposed enemy cell
  let enemyHasChecker = enemy?.lastElementChild?.localName // there is will be true\false
  let placeAfterAttack = findCell(+activeCheckerRow - x - 1, massOfLetter[activeCheckerLetter + y + 1])
  let placeAfterAttackHasntChecker = !placeAfterAttack?.lastElementChild?.localName
  let friendlyFire = activeChecker.classList[0] == enemy?.children[0]?.classList[0]
  if (enemyHasChecker && !placeAfterAttackHasntChecker && !friendlyFire) {
    return 'break'
  }
  if (enemyHasChecker && placeAfterAttack && placeAfterAttackHasntChecker && !friendlyFire) {
    return [placeAfterAttack, enemy]
  }
}
function findThirdEnemyNearby(x = 0, y = 1) {
  let row = +activeCheckerRow + x
  let letter = massOfLetter[activeCheckerLetter - y]
  let enemy = findCell(row, letter)
  let enemyHasChecker = enemy?.lastElementChild?.localName // there is will be true\false
  let placeAfterAttack = findCell(+activeCheckerRow + x + 1, massOfLetter[activeCheckerLetter - y - 1])
  let placeAfterAttackHasntChecker = !placeAfterAttack?.lastElementChild?.localName
  let friendlyFire = activeChecker.classList[0] == enemy?.children[0]?.classList[0]
  if (enemyHasChecker && !placeAfterAttackHasntChecker && !friendlyFire) {
    return 'break'
  }
  if (enemyHasChecker && placeAfterAttack && placeAfterAttackHasntChecker && !friendlyFire) {
    return [placeAfterAttack, enemy]
  }
}
function findFourthEnemyNearby(x = 0, y = 1) {
  let row = +activeCheckerRow + x
  let letter = massOfLetter[activeCheckerLetter + y]
  let enemy = findCell(row, letter)
  let enemyHasChecker = enemy?.lastElementChild?.localName // there is will be true\false
  let placeAfterAttack = findCell(+activeCheckerRow + x + 1, massOfLetter[activeCheckerLetter + y + 1])
  let placeAfterAttackHasntChecker = !placeAfterAttack?.lastElementChild?.localName // there is will be true\false
  let friendlyFire = activeChecker.classList[0] == enemy?.children[0]?.classList[0]
  if (enemyHasChecker && !placeAfterAttackHasntChecker && !friendlyFire) {
    return 'break'
  }
  if (enemyHasChecker && placeAfterAttack && placeAfterAttackHasntChecker && !friendlyFire) {
    return [placeAfterAttack, enemy]
  }
}
