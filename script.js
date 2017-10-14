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
  shot = shot - 11
  var shotString = shot //check this code.
  shotString = shotString.toString()
  var i = shotString.charAt(0)
  var j = shotString.charAt(1)
  //check if the grid has this shot.
  if (grid[i][j]) {
    userGrid[i][j] = "Y"
    winningShots++
    setText(shot + 11, "Y") //check this code.
  } else {
    userGrid[i][j] = "X"
    setText(shot + 11, "X")
  }
  turns++
  console.log(userGrid)
  console.log(grid[i][j]);

}

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
    if (checkWin())
      alert("you won!")
    else {
      //refactor to get input from grid : shot = $(this).attr('data-id')
      //var shot =  $('input').val()
      var shot = $(this).attr('data-id')
      checkShot(shot)
    }
  })

})
//sets div with data-id of shot, to X or Y depending on if there is a ship.
function setText(shot, text) {
  $(`[data-id='${shot}']`).text(text)
  text === "Y" ? $(`[data-id='${shot}']`).css("color", "red") : ""
}
