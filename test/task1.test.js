const task1 = require("../task1")

describe("Finding prime numbers until certain value", () => {
  test("Prime numbers until 30 should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]", () => {
    expect(task1(30)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  })
  test("Prime numbers until 5 should return [2, 3]", () => {
    expect(task1(5)).toStrictEqual([2, 3])
  })
  test("Prime numbers until 0 should return []", () => {
    expect(task1(0)).toStrictEqual([])
  })
})
