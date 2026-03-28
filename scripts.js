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
        this.ships = [];
    }

    placeShip(length, start, direction) {
        let ship = new Ship(length);
        let coordinates = [];
        if (length>10) {
            throw new Error ('Ship reaches outside the board.');
        }
        //check if the ship fits
        if (direction == 'horizontal') {
            if ((start[0] + length) > this.boardSize) {
                throw new Error ('Ship reaches outside the board.');
            }
        } else {
            if ((start[1] + length) > this.boardSize) {
                throw new Error ('Ship reaches outside the board.');
            }
        }

        for (let i=0; i<length; i++) {
            if (direction == 'horizontal') {
                let coodinate = [start[0]+i, start[1]];
                coordinates[i] = coodinate;
            } else {
                let coodinate = [start[0], start[1]+i];
                coordinates[i] = coodinate;
            }
        }

        let shipSaved = {Ship: ship, Coordinates: coordinates};
        this.ships.push(shipSaved);
        console.log(this.ships);
        return shipSaved;
    }

    returnAllShips() {
        console.log(this.ships);
        return this.ships;
    }

}

const three = function(){
    return 3;
};

module.exports = Gameboard;