function placeShip(ship) {
  Math.floor(Math.random() * (2)) === 0 ? placeShipHorz(ship) : placeShipVert(ship)
}

function placeShipHorz(ship) {
  var v = Math.floor(Math.random() * (8))
  var emptyIndexes = []
  console.log('emptyIndexes', emptyIndexes); //does this reset each time emtpyindex is called
  for (var k = 0; k < 8; k++) {
    emptyIndexes.push(k)
  }
  for (var z = 0; z < 8; z++) {
    for (var x = 0; x < ship; x++) {
      if (grid[v][z + x] === 0)
        ""
      else {
        emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
        break //prevent multiple z splice.
      }
      // console.log('emptyIndexes',z,x,emptyIndexes, 'grid value',grid[v][z+x])
    }
  }
  //get
  var shipPosIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
  // console.log('shipPosIndex',shipPosIndex)

  //place the ship
  for (var i = shipPosIndex; i < shipPosIndex + ship; i++) {
    grid[v][i] = ship
  }
  console.log(grid)
} //end placeShipHorz
function placeShipVert(ship) {
  var h = Math.floor(Math.random() * (8))
  var emptyIndexes = []
  for (var k = 0; k < 8; k++) {
    emptyIndexes.push(k)
  }
  for (var z = 0; z < 8; z++) {
    for (var x = 0; x < ship; x++) {
      if (x + z > 7) {
        emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
        break
      } else if (grid[z + x][h] === 0) {
        ""
      } else {
        emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
        break; //prevent multiple z splice.
      }
      // console.log('emptyIndexes', z, x, emptyIndexes)
      // console.log('grid value', grid[z + x][h])
    }
  }
  // console.log(emptyIndexes)
  var shipPosIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
  // console.log('shipPosIndex',shipPosIndex)
  //place the ship
  for (var i = shipPosIndex; i < shipPosIndex + ship; i++) {
    grid[i][h] = ship
  }
  console.log('final grid', grid)
} //end placeShipVert

console.log(grid)
