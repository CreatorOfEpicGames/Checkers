function allowMove(details_of_event) {
  if (details_of_event.target.src == 'http://127.0.0.1:5500/light.png') {
    findEmptyCell(massOfLetter[activeCheckerLetter - 1], activeCheckerRow - 2)
    findEmptyCell(massOfLetter[activeCheckerLetter + 1], activeCheckerRow - 2)
  } else {
    findEmptyCell(massOfLetter[activeCheckerLetter - 1], +activeCheckerRow)
    findEmptyCell(massOfLetter[activeCheckerLetter + 1], +activeCheckerRow)
  }
}

function refreshActivity() {
  let massiveAllCells = document.querySelectorAll('.cell')
  for (let current_cell of massiveAllCells) {
    current_cell.classList.remove('box_shadow')
  }
}

function refreshMove() {
  let allCellsWithGreenShadow = document.querySelectorAll('.green-shadow')
  for (const cellwithGreenShadow of allCellsWithGreenShadow) {
    cellwithGreenShadow.classList.remove('green-shadow')
    cellwithGreenShadow.onclick = null
  }
}

function refreshAttack() {
  let allCellsWithGreenShadow = document.querySelectorAll('.attack-shadow')
  for (const cellwithAttackShadow of allCellsWithGreenShadow) {
    cellwithAttackShadow.classList.remove('attack-shadow')
    cellwithAttackShadow.onclick = null
  }
}
function changeTurnBackround() {
  turnBackround.classList.toggle('black')
  if (turnBackround.classList?.[1]) {
    enableBlackChecker()
  } else {
    enableWhiteChecker()
  }
}

function enableWhiteChecker() {
  let allWhiteCheckers = document.querySelectorAll('.light')
  let allBlackCheckers = document.querySelectorAll('.dark')
  for (const blackCheker of allBlackCheckers) {
    blackCheker.onclick = undefined
  }
  for (const whiteCheker of allWhiteCheckers) {
    if (whiteCheker.classList.length == 1) {
      whiteCheker.onclick = nextStep
    } else {
      whiteCheker.onclick = queenMove
    }
  }
}
function enableBlackChecker() {
  let allWhiteCheckers = document.querySelectorAll('.light')
  let allBlackCheckers = document.querySelectorAll('.dark')
  for (const whiteCheker of allWhiteCheckers) {
    whiteCheker.onclick = undefined
  }
  for (const blackCheker of allBlackCheckers) {
    if (blackCheker.classList.length == 1) {
      blackCheker.onclick = nextStep
    } else {
      blackCheker.onclick = queenMove
    }
  }
}
