class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        if (this.hits >= this.length) {
            return true;
        } else {
            return false;
        }
    }
}

class Gameboard {
    constructor(boardSize){
        this.shipsAndCoordinates = [];
        this.hits = [];
        this.boardSize = boardSize;
    }

    placeShip(length, start, end) {
        let ship = new Ship(length);
    }

}