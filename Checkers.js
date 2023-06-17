enableWhiteChecker()



function activeChecker(details_of_event) {
  let currentActiveChecker = details_of_event.target
  findActiveChekerCoordinates(details_of_event)
  refreshActive()
  currentActiveChecker.classList.add('box_shadow')
  allowMove(details_of_event)
  allowAttack(currentActiveChecker.src)
}

