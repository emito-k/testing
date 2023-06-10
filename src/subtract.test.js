const subtract = require('./subtract');

test('to subtract properly', () => {
    expect(subtract(1, 2)).toBe(-1);
});
