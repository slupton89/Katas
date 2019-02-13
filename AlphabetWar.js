function alphabetWar(fight) {
  let score = { left: 0, right: 0 }
  const hostiles = {
    leftSide: {
      w: 4,
      p: 3,
      b: 2,
      s: 1
    },
    rightSide: {
      m: 4,
      q: 3,
      d: 2,
      z: 1
    }
  }
  fight.split('').map(fighter => {
    if(hostiles.leftSide[fighter]) {
      score.left += hostiles.leftSide[fighter]
    } else if(hostiles.rightSide[fighter]) {
      score.right += hostiles.rightSide[fighter]
    }
  })
  return score.left > score.right ? "Left side wins!"
    : score.right > score.left ? "Right side wins!"
    : "Let's fight again!"
}

console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );