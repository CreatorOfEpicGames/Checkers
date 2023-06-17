function moveCheckers(details_of_event) {
  let activeCheckerClassList =
    activeChecker.classList.length == 2
      ? `${activeChecker.classList[0]} ${activeChecker.classList[1]}`
      : activeChecker.classList[0]
  details_of_event.target.innerHTML = `<img class="${activeCheckerClassList}" src="${activeChecker.src}" />`
  checkerBecomesQueen(details_of_event.target)

  activeChecker.remove()
  refreshMove()
  refreshAttack()
  refreshActivity()
  changeTurnBackround()
}

function nextStep(details_of_event) {
  refreshMove()
  refreshAttack()
  refreshActivity()
  setActiveCell(details_of_event.target)
  activeChecker.parentElement.classList.add('box_shadow')
  allowMove(details_of_event)
  allowAttack(activeChecker.src)
}
function win() {
  let allWhiteCheckers = document.querySelectorAll('.light')
  let allBlackCheckers = document.querySelectorAll('.dark')
  if (allWhiteCheckers.length == 0) {
    alert('Black win')
  }
  if (allBlackCheckers.length == 0) {
    alert('White win')
  }
}
