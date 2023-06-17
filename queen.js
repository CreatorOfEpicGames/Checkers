function checkerBecomesQueen(target) {
  if (activeChecker.classList[1]) {
    return
  }
  if (target.classList[2] == '8') {
    target.innerHTML = `<img class="${activeChecker.className} queen"   src="blackDama.png" />`
  }
  if (target.classList[2] == '1') {
    target.innerHTML = `<img class="${activeChecker.className} queen"   src="whiteDama.png" />`
  }
}
function queenMove(details_of_event) {
  refreshMove()
  refreshAttack()
  refreshActivity()
  setActiveCell(details_of_event.target)
  activeChecker.parentElement.classList.add('box_shadow')
  allowQueenMove()
  allowQueenAttack()
}
function enableQueens() {
  let allQueens = document.querySelectorAll('.queen')
  for (const queen of allQueens) {
    queen.onclick = queenMove
  }
}

function allowQueenMove() {
  for (let i = 0; i < 7; i++) {
    let x = 1 + i
    let y = 2 + i
    if (allowFirstQueenMove(x, y)) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 1 + i
    let y = 2 + i
    if (allowSecondQueenMove(x, y)) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 1 + i
    let y = 0 + i
    if (allowThirdQueenMove(x, y)) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 1 + i
    let y = 0 + i
    if (allowFourthQueenMove(x, y)) {
      break
    }
  }
}

function allowFirstQueenMove(x = 0, y = 1) {
  let allow = findEmptyCell(massOfLetter[activeCheckerLetter - x], activeCheckerRow - y)
  return allow
}
function allowSecondQueenMove(x = 1, y = 2) {
  let allow = findEmptyCell(massOfLetter[activeCheckerLetter + x], activeCheckerRow - y)
  return allow
}
function allowThirdQueenMove(x = 1, y = 2) {
  let allow = findEmptyCell(massOfLetter[activeCheckerLetter - x], +activeCheckerRow + y)
  return allow
}
function allowFourthQueenMove(x = 1, y = 2) {
  let allow = findEmptyCell(massOfLetter[activeCheckerLetter + x], +activeCheckerRow + y)
  return allow
}

function allowQueenAttack() {
  for (let i = 0; i < 7; i++) {
    let x = 2 + i
    let y = 1 + i
    if (createAttack(findFirstEnemyNearby(x, y))) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 2 + i
    let y = 1 + i
    if (createAttack(findSecondEnemyNearby(x, y))) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 0 + i
    let y = 1 + i
    if (createAttack(findThirdEnemyNearby(x, y))) {
      break
    }
  }
  for (let i = 0; i < 7; i++) {
    let x = 0 + i
    let y = 1 + i
    if (createAttack(findFourthEnemyNearby(x, y))) {
      break
    }
  }
  win()
}
