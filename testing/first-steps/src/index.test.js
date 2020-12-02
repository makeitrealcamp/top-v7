const { sum, multiply, person, map } = require('.');

describe('sum', () => {
  it('should add two numbers correctly', () => {
    const result = sum(1,3)
    expect(result).toBe(4)
    expect(sum(2,5)).toBe(7)
    expect(sum(2834974, 1234871237)).toBe(1237706211)
  })
})

describe('multiply', () => {
  test('should multiply two number correctly', () => {
    expect(multiply(2,4)).toBe(8)
  })

  test('should multiply 3 and 5 correctly', () => {
    expect(multiply(3,5)).toBe(15)
  })
})

describe('person', () => {
  it('should create a person with name maria and age 27', () => {
    const maria = person('maria', 27)

    expect(maria).toMatchObject({ name: 'maria', age: 27 })
    // expect(maria.name).toBe('maria')
    // expect(maria.age).toBe(27)
  })

  it('should be able to greet', () => {
    const maria = person('maria', 27)

    expect(maria.greet()).toMatch(/hola/i)
  })
})

describe('map', () => {
  it('should execute callback', () => {
    const handleSubmit = jest.fn()
    map(handleSubmit)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
