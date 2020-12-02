const { sum } = require('.');

it('should add two numbers correctly', () => {
  const result = sum(1,3)
  expect(result).toBe(4)
  expect(sum(2,5)).toBe(7)
  expect(sum(2834974, 1234871237)).toBe(1237706211)
})

