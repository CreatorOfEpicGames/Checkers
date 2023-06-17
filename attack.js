function attacking(details_of_event, enemy) {
  let activeCheckerClassList =
    activeChecker.classList.length == 2
      ? `${activeChecker.classList[0]} ${activeChecker.classList[1]}`
      : activeChecker.classList[0]
  details_of_event.target.innerHTML = `<img class="${activeCheckerClassList}"   src=${activeChecker.src} />`
  checkerBecomesQueen(details_of_event.target)
  activeChecker.remove()
  enemy.remove()
  refreshAttack()
  refreshMove()
  refreshActivity()
  setActiveCell(details_of_event.target.children[0])

  if (allowMassAttack()) {
    activeChecker.parentElement.classList.add('green-shadow')
    activeChecker.parentElement.onclick = stopMassAttack
    nextAttackInMassAtack(details_of_event.target)
    return
  }
  win()
  changeTurnBackround()
}

function allowAttack() {
  createAttack(findFirstEnemyNearby()),
    createAttack(findSecondEnemyNearby()),
    createAttack(findThirdEnemyNearby()),
    createAttack(findFourthEnemyNearby())
}

function createAttack(placeAfterAttackWithEnemy) {
  if (placeAfterAttackWithEnemy == 'break') {
    return true
  }
  if (placeAfterAttackWithEnemy) {
    let [placeAfterAttack, enemy] = placeAfterAttackWithEnemy
    placeAfterAttack.classList.add('attack-shadow')
    placeAfterAttack.onclick = function (details_of_event) {
      attacking(details_of_event, enemy.children[0])
    }
    return enemy
  }
}

function nextAttackInMassAtack(activeChecker) {
  refreshActivity()
  activeChecker.classList.add('green-shadow')
  allowAttack(activeChecker.src)
}

function allowMassAttack() {
  let allow = findFirstEnemyNearby() || findSecondEnemyNearby() || findThirdEnemyNearby() || findFourthEnemyNearby()
  return allow
}

function stopMassAttack() {
  changeTurnBackround()
  refreshMove()
  refreshAttack()
  refreshActivity()
}
