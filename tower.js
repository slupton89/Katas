function towerBuilder(nFloors) {
  let tower = []
  let spaces = 0
  for (var i = nFloors; i > 0; i--) {
    tower.push(
      ' '.repeat(spaces)
      + '*'.repeat(i)
      + '*'.repeat(i - 1)
      + ' '.repeat(spaces)
    )
    spaces++
  }
  return tower.reverse()
}