function sc(apple){
  let pos = []
  apple.forEach(row => {
    row.forEach(col => {
      if(col === 'B') {
        pos = [apple.indexOf(row), row.indexOf(col)]
      }
    })
  })
  return (pos)
}