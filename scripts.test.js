const Gameboard = require('./scripts.js');

test('adds 1 + 2 to equal 3', () => {
    let GB = new Gameboard;
  expect(GB.four()).toBe(4);
  expect(GB.placeShip(4, [0,0], 'horizontal')).toBe(true);
});