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
        this.blockedTiles = [];
    }

    placeShip(length, start, direction) {
        let ship = new Ship(length);
        let coordinates = [];
        //check if ship is longer than the board
        if (length>10) {
            throw new Error ('Ship reaches outside the board.');
        }
        //check if the ship fits
        console.log(direction);
        console.log(direction == 'horizontal');
        if (direction == 'horizontal') {
            if ((start[0] + length) > this.boardSize) {
                throw new Error ('Ship reaches outside the board.');
            }
        } else {
            console.log(direction);
            if ((start[1] + length) > this.boardSize) {
                throw new Error ('Ship reaches outside the board.');
            }
        }
        //place ship
        for (let i=0; i<length; i++) {
            if (direction == 'horizontal') {
                let coordinate = [start[0]+i, start[1]];
                coordinates[i] = coordinate;
                for (let j=0; j<this.blockedTiles.length; j++) {
                    if (this.blockedTiles[j][0] == coordinate[0] && this.blockedTiles[j][1] == coordinate[1]) {
                        return "Ship overlaps another ship.";
                    }
                }
            } else {
                let coordinate = [start[0], start[1]+i];
                coordinates[i] = coordinate;
                for (let j=0; j<this.blockedTiles.length; j++) {
                    if (this.blockedTiles[j][0] == coordinate[0] && this.blockedTiles[j][1] == coordinate[1]) {
                        return "Ship overlaps another ship.";
                    }
                }
            }
        }
        //add ship tiles to blocked tiles
        for (let i=0; i<coordinates.length; i++) {
            this.blockedTiles.push(coordinates[i]);
        }
        console.log(this.blockedTiles);

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

module.exports = Gameboard;