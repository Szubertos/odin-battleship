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
            this.sunk = true;
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
        this.missedShots = [];
    }

    placeShip(length, start, direction) {
        let ship = new Ship(length);
        let coordinates = [];
        //check if ship is longer than the board
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

        let shipSaved = {Ship: ship, Coordinates: coordinates};
        this.ships.push(shipSaved);
        return shipSaved;
    }

    returnAllShips() {
        return this.ships;
    }

    receiveAttack(attackCoordinate) {
        for (let i=0; i<this.ships.length; i++) {
            let allCoords = this.ships[i].Coordinates;
            for (let j=0; j<allCoords.length; j++) {
                console.log(attackCoordinate[0], attackCoordinate[1]);
                console.log(allCoords[j][0], allCoords[j][1]);
                if (allCoords[j][0] == attackCoordinate[0] && allCoords[j][1] == attackCoordinate[1]){
                    return true;
                };
            }
        }
        this.missedShots.push(attackCoordinate);
        console.log(this.missedShots);
        return false;
    }

}

module.exports = Gameboard;