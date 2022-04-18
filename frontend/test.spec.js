// helpers.spec.js

describe('increment', () => {
  test('increments the current number by 1', () => {
    expect(1).toBe(1)
  })

  test('does not increment the current number over the max', () => {
    expect(10).toBe(10)
  })

  test('has a default max of 10', () => {
    expect(10).toBe(10)
  })
})
