// var grid = Array(8).fill( Array(8).fill(0))
// console.log(grid)
 var grid = []
grid.push(Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0))
//user facing grid
var userGrid = []
userGrid.push(Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0),Array(8).fill(0))

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

function placeShip(ship){
  Math.floor(Math.random()*(2))===0?placeShipHorz(ship):
   placeShipVert(ship)
}

function placeShipHorz(ship){
  var v = Math.floor(Math.random()*(8))
  var emptyIndexes = []
  for(var k = 0;k<8;k++){
    emptyIndexes.push(k)
  }
  for (var z=0; z<8;z++){
for(var x =0;x<ship; x++){
  if(grid[v][z+x]===0)
    ""
 else{
  emptyIndexes.splice(emptyIndexes.indexOf(z),1)
  break //prevent multiple z splice.
}
  // console.log('emptyIndexes',z,x,emptyIndexes, 'grid value',grid[v][z+x])
}
}

//get
var shipPosIndex = emptyIndexes[Math.floor(Math.random()*emptyIndexes.length)]
  // console.log('shipPosIndex',shipPosIndex)
  //place the ship
  for(var i=shipPosIndex;i<shipPosIndex+ship;i++){
    grid[v][i]=ship
  }
// console.log(grid)
}
function placeShipVert(ship){
  var h = Math.floor(Math.random()*(8))
  var emptyIndexes = []
  for(var k = 0;k<8;k++){
    emptyIndexes.push(k)
  }
for (var z = 0; z < 8; z++) {
  for (var x = 0; x < ship; x++) {
    if (x+z>7){
    emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
    break }
    else if (grid[z+x][h] === 0) {
     ""}
    else {
      emptyIndexes.splice(emptyIndexes.indexOf(z), 1)
      break; //prevent multiple z splice.
    }
    // console.log('emptyIndexes', z, x, emptyIndexes)
    // console.log('grid value', grid[z + x][h])
    }
}
// console.log(emptyIndexes)
  var shipPosIndex = emptyIndexes[Math.floor(Math.random()*emptyIndexes.length)]
    // console.log('shipPosIndex',shipPosIndex)
    //place the ship
    for(var i=shipPosIndex;i<shipPosIndex+ship;i++){
      grid[i][h]=ship
    }
  // console.log('final grid',grid)
}
//horz placement - find start point randomly.
//e.g. var long  = 5, start point is (8-long) = 3.
//Math.floor does rounding down.
// var start = Math.floor(Math.random()*(7-ship))
// var vertStart = Math.floor(Math.random()*(8))
// console.log(start)
//will place ship values points in the row with a start index that is randomly selected above.
//to:do later- loop to check if any value is !==0. change start position if 0 is found.
  //select vertical start randomly


//call/write function to check
// var occupied = false
// for(var i=0,start;i<ship;start++,i++){
// occupied= (grid[vertStart][start]!==0)
// }

// for(var i=0,start;i<ship;start++,i++){
//   //check this grid[vertStart][start]
//   grid[vertStart][start]=ship
// }
// }
console.log(grid)
//--------------------
//vert placement - find start point randomly.
//e.g. var long  = 5, start point is (8-long) = 3.

// var start = Math.floor(Math.random()*(8-long+1))
// console.log(start)
// //will create nums from 0 to place in a row.
// for(var i=0,start;i<long;start++,i++){
//   grid[0][start]=long
// }
var shot=""
var turns = 0
var winningShots = 0
//
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
function checkShot(shot){
  shot=shot-11
  var shotString  = shot //check this code.
  shotString  =  shotString.toString()
  var i = shotString.charAt(0)
  var j= shotString.charAt(1)
  //check if the grid has this shot.
    if(grid[i][j]){
      userGrid[i][j]="Y"
      winningShots++
      setText(shot+11,"Y")//check this code.
    }
    else{
    userGrid[i][j]="X"
    setText(shot+11,"X")
  }
    turns++
    console.log(userGrid)
    console.log(grid[i][j]);

}
function checkWin(){
  if (turns<51 && winningShots===17)
  return true
  else
  return false
}
// checkShot(shot)

// console.log(userGrid);

$(function() {
  var $box = $('.box')
    // var $submit = $('#submit')
    $box.on('click', function(){
    if(checkWin())
      alert("you won!")
    else{
        //refactor to get input from grid : shot = $(this).attr('data-id')
        //var shot =  $('input').val()
        var shot = $(this).attr('data-id')
        checkShot(shot)
      }
    })

})
//sets div with data-id of shot, to X or Y depending on if there is a ship.
function setText(shot,text){
  $(`[data-id='${shot}']`).text(text)
  text==="Y"? $(`[data-id='${shot}']`).css("color","red"):""
}
