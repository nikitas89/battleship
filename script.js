// var placeShip = require('./placeship.js') //na using node
// var grid = Array(8).fill( Array(8).fill(0))
// console.log(grid)
var grid = []
grid.push(Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0))
//user facing grid
var userGrid = []
userGrid.push(Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0), Array(8).fill(0))

//long ship with length will be indicated with value of 5 at array indexes
var long = 5
placeShip(long)
var medLong = 4
placeShip(medLong)
var medOne = 3
placeShip(medOne)
//add other length 3 ship later
var medTwo = 3
placeShip(medTwo)
var short = 2
placeShip(short)
//------------------------placeship-------------------------/
function placeShip(ship) {
  if(Math.floor(Math.random() * (2)) === 0){
    if( !placeShipHorz(ship) ){
      console.log('HORZ NOT VALID');
      placeShipVert(ship)
    }
 }
  else{
    if(!placeShipVert(ship)){
      console.log('VERT NOT VALID');
      placeShipHorz(ship)
    }
   }
}

function placeShipHorz(ship) {
  console.log('placing horz now... '+ship);
  var v = Math.floor(Math.random() * (8))
  var emptyIndexes = []
  // console.log('emptyIndexes', emptyIndexes); //does this reset each time emtpyindex is called
  for (var k = 0; k < 8-ship; k++) {
    emptyIndexes.push(k)
  }
  for (var z = 0; z < 8-ship; z++) { //this code is unique to hor/vert. combine the rest
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
  console.log('emptyIndexes.length ',emptyIndexes.length);
  var shipPosIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
  // console.log('shipPosIndex',shipPosIndex)

  //place the ship
  for (var i = shipPosIndex; i < shipPosIndex + ship; i++) {
    console.log('placed '+ ship );
    grid[v][i] = ship
  }
  // console.log(grid)
  return emptyIndexes.length
} //end placeShipHorz
function placeShipVert(ship) {
    console.log('placing vert now... '+ship);
  var h = Math.floor(Math.random() * (8))
  var emptyIndexes = []
  for (var k = 0; k < 8-ship; k++) {
    emptyIndexes.push(k)
  }
  for (var z = 0; z < 8-ship; z++) {
    for (var x = 0; x < ship; x++) {
      if (x + z > 7) {
        emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
        // console.log('vert exceeds col ','h', h, 'z, ',z, 'x, ',x );
        break
      } else if (grid[z + x][h] === 0) {
        ""
      } else {
        emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
        // console.log('vert occupied ','h',h, 'z, ',z, 'x, ',x );
        break; //prevent multiple z splice. break x for loop
      }
      // console.log('emptyIndexes', z, x, emptyIndexes)
      // console.log('grid value', grid[z + x][h])
    }
  }
  // console.log(emptyIndexes)
  console.log('emptyIndexes.length ',emptyIndexes.length); //what to do if emptyindixes is 0? call random no and run for loop again.
  var shipPosIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
  // console.log('shipPosIndex',shipPosIndex)
  //place the ship
  for (var i = shipPosIndex; i < shipPosIndex + ship; i++) {
    console.log('placed '+ ship );
    grid[i][h] = ship
  }
  // console.log('final grid', grid)
  return emptyIndexes.length
} //end placeShipVert

//------------------------game play-------------------------/
var shot = ""
var turns = 0
var winningShots = 0
//readline/console version
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
//   rl.question('where to place your attack ', (answer) => {
//       checkShot(answer)
//      rl.close()
//   })
// rl.question('where to place your attack ', (answer) => {
//     checkShot(answer)
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close()
// })
// var shot=22
//change this
function checkShot(shot) {
  //dont remove 1,1 yet.
  // shot = shot
  console.log('arrshot ',shot);
  console.log(typeof(shot));
  var shotString = shot //check this code.
  shotString = shotString.toString()
  console.log('shotString ',shotString);
  var row = Number(shotString.charAt(0) -1)
  var col = Number(shotString.charAt(1) -1)
  //check if the grid has this shot.
  if (grid[row][col]) {
    userGrid[row][col] = "Y"
    winningShots++
    setText(Number(shot), "Y") //check this code.
  } else {
    userGrid[row][col] = "X"
    setText(Number(shot), "X")
  }
  turns++
  console.log('userGrid ', userGrid)
  console.log('row,',row, 'col', col);

}
//not working. check this.
function checkWin() {
  if (turns < 51 && winningShots === 17)
    return true
  else
    return false
}
// checkShot(shot)

// console.log(userGrid);

$(function() {
  var $box = $('.box')
  // var $submit = $('#submit')
  $box.on('click', function() {
    if (checkWin()) //
      alert("you won!")
    else {
      //get input from grid : shot = $(this).attr('data-id')
      //var shot =  $('input').val()
      var shot = $(this).attr('data-id')
      checkShot(shot) //have added 1,1 to these.
      if (checkWin()) //
        alert("you won!")
    }
  })
})
//sets div with data-id of shot, to X or Y depending on if there is a ship.
function setText(shot, text) {
  $(`[data-id='${shot}']`).text(text)
  text === "Y" ? $(`[data-id='${shot}']`).css("color", "red") : ""
}
