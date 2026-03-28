const Gameboard = require('./scripts.js');

let GB = new Gameboard(10);

test('place horizontal ship from 0,0', () => {
  expect(GB.placeShip(4, [0,0], 'horizontal')).toEqual({
    "Coordinates": [[0, 0], [1, 0], [2, 0], [3, 0]], 
    "Ship": {"hits": 0, "length": 4, "sunk": false}});
});

test('place vertical ship from 2,2', () => {
  expect(GB.placeShip(2, [2,2], 'vertical')).toEqual({
    "Coordinates": [[2, 2], [2, 3]], 
    "Ship": {"hits": 0, "length": 2, "sunk": false}});
});

test('ship starts too near of the board edge', () => {
  expect(()=> {GB.placeShip(5, [9,9], 'horizontal')}).toThrow('Ship reaches outside the board.');
});

test('ship too long', () => {
  expect(()=> {GB.placeShip(411, [0,0], 'horizontal')}).toThrow('Ship reaches outside the board.');
});

test('return all ships', () => {
    let GB2 = new Gameboard(10);
    GB2.placeShip(2, [0,0], 'horizontal');
    GB2.placeShip(2, [3,3], 'horizontal');
    GB2.placeShip(3, [1,4], 'vertical');
    GB2.placeShip(2, [5,8], 'vertical');
    expect(GB2.returnAllShips()).toEqual([{"Coordinates": [[0, 0], [1, 0]], "Ship": {"hits": 0, "length": 2, "sunk": false}}, {"Coordinates": [[3, 3], [4, 3]], "Ship": {"hits": 0, "length": 2, "sunk": false}}, {"Coordinates": [[1, 4], [1, 5], [1, 6]], "Ship": {"hits": 0, "length": 3, "sunk": false}}, {"Coordinates": [[5, 8], [5, 9]], "Ship": {"hits": 0, "length": 2, "sunk": false}}]);
});

test('return all ships except last two, check for ship intersection', () => {
    let GB2 = new Gameboard(10);
    GB2.placeShip(2, [0,8], 'horizontal');
    GB2.placeShip(2, [3,3], 'horizontal');
    GB2.placeShip(3, [2,6], 'vertical');
    GB2.placeShip(2, [5,8], 'vertical');
    GB2.placeShip(10, [0,9], 'horizontal');
    GB2.placeShip(3, [3, 2], 'vertical');
    expect(GB2.returnAllShips()).toEqual([{"Coordinates": [[0, 8], [1, 8]], "Ship": {"hits": 0, "length": 2, "sunk": false}}, {"Coordinates": [[3, 3], [4, 3]], "Ship": {"hits": 0, "length": 2, "sunk": false}}, {"Coordinates": [[2, 6], [2, 7], [2, 8]], "Ship": {"hits": 0, "length": 3, "sunk": false}}, {"Coordinates": [[5, 8], [5, 9]], "Ship": {"hits": 0, "length": 2, "sunk": false}}]);
});

test('attackShip', () => {
    let GB3 = new Gameboard(10);
    GB3.placeShip(5, [0,0], 'horizontal');
    expect(GB3.receiveAttack([1, 0])).toEqual(true);
    expect(GB3.receiveAttack([6, 6])).toEqual(false);
    expect(GB3.receiveAttack([7, 6])).toEqual(false);
    expect(GB3.receiveAttack([8, 6])).toEqual(false);
    expect(GB3.receiveAttack([9, 6])).toEqual(false);
    expect(GB3.missedShots).toEqual([6, 6], [7, 6], [8, 6], [9, 6]);
});