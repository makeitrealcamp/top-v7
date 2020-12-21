const sum = require('.');

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(11,4)).toBe(15)
    expect(sum(78,2)).toBe(80)
  })
})
