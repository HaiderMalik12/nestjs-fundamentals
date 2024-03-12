const sum = require('./sum');

test('it should give me the result 1+2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1,4)).toBe(5)
})