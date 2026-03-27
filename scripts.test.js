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