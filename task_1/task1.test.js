const task_1 = require(".")

describe("Finding prime numbers until certain value", () => {
  test("Prime numbers until 30 should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]", () => {
    expect(task_1(30)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  })
  test("Prime numbers until 5 should return [2, 3]", () => {
    expect(task_1(5)).toStrictEqual([2, 3])
  })
  test("Prime numbers until 0 should return []", () => {
    expect(task_1(0)).toStrictEqual([])
  })
})
