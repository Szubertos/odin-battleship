import {Gameboard, Player, Ship} from "./classes.js";
//const Ship = require('./classes.js');
//const Player = require('./classes.js');

const playerGameboard = new Gameboard(10);
const playerGrid = document.getElementById('playerGameboard');
playerGrid.style.gridTemplateColumns = "repeat("+playerGameboard.boardSize+", 1fr)";
for (let i=0; i<playerGameboard.boardSize*playerGameboard.boardSize; i++) {
    const gridTile = document.createElement("div");
    gridTile.classList.add("cell");
    gridTile.setAttribute('id', i);

    gridTile.addEventListener("click", function(event){

    });
    playerGrid.appendChild(gridTile);
}
console.log(playerGrid);