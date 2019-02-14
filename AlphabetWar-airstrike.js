function alphabetWar(fight) {
  let fighters = fight.split('')
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
  const explosions = () => {
    if(fighters.indexOf('*') > 0) {
      fighters.splice((fighters.indexOf('*') - 1), 3)
      explosions()
    } if(fighters.indexOf('*') === 0) {
      fighters.splice(0, 2)
      explosions()
    }
    fighters.map((fighter) => {
      if(hostiles.leftSide[fighter]) {
        score.left += hostiles.leftSide[fighter]
      } if(hostiles.rightSide[fighter]) {
        score.right += hostiles.rightSide[fighter]
      }
    })
  }

  explosions()
  return score.left > score.right ? "Left side wins!"
    : score.right > score.left ? "Right side wins!"
    : "Let's fight again!"
}


console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("****") , "Let's fight again!" );
console.log( alphabetWar("z*dq*mw*pb*s"), "Let's fight again!" );
console.log( alphabetWar("zdqmwpbs"), "Let's fight again!" );
console.log( alphabetWar("zz*zzs"), "Right side wins!" );
console.log( alphabetWar("sz**z**zs"), "Left side wins!" );
console.log( alphabetWar("z*z*z*zs"), "Left side wins!" );
console.log( alphabetWar("*wwwwww*z*"), "Left side wins!" );
console.log( alphabetWar("cir*re"), "Let's fight again!" );
