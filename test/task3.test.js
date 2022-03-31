const task3 = require("../task3")

const wrongKeys = [
  { 2.9: 40, null: 30 },
  { 2.9: 40, undefined: 30 },
  { 2.9: 40, "": 30 },
  { 2.9: 40, "2.9x": 30 },
]

const wrongValues = [
  { 2.9: 40, 3.1: null },
  { 2.9: 40, 3.1: undefined },
  { 2.9: 40, 3.1: "" },
  { 2.9: 40, 3.1: "30x" },
  { 2.9: 40, 3.1: 40.1 },
]

describe("Testing key-value pairs", () => {
  it("Input is not an object throw 'Input is not an object'", () => {
    expect(() => task3([{ 2.9: 40 }])).toThrow("Input is not an object")
  })
  it("Empty object throw 'Input is empty'", () => {
    expect(() => task3({})).toThrow("Input is empty")
  })
  it("Key out of range throw 'Some key is out of range'", () => {
    expect(() => task3({ 2.9: 40, "-3.1": 30 })).toThrow(
      "Some key is out of range"
    )
  })
  it.each(wrongKeys)(
    "Some key is null, undefined, empty or not a number an throw 'Some key is not a number'",
    (value) => {
      expect(() => task3(value)).toThrow("Some key is not a number")
    }
  )
  it("Some value is out of range and throw 'Some value is out of range'", () => {
    expect(() => task3({ 2.9: 40, 3.1: -30 })).toThrow(
      "Some value is out of range"
    )
  })
  it("Values exceeds the maximum sum and throw 'Total sum of percentage values exceeds the maxium'", () => {
    expect(() => task3({ 2.9: 40, 3.1: 70 })).toThrow(
      "Total sum of percentage values exceeds the maxium"
    )
  })
  it.each(wrongValues)(
    "Some value is null, undefined, empty or not a integer an throw 'Some value is not a number'",
    (value) => {
      expect(() => task3(value)).toThrow("Some value is not a number")
    }
  )
  test("Input is correct and expect output be object with accumulatedPercentage and accumulatedNote", () => {
    expect(task3({ 2.9: 40, 3.1: 30 })).toHaveProperty(
      "accumulatedPercentage",
      70
    )
    expect(task3({ 2.9: 40, 3.1: 30 })).toHaveProperty("accumulatedNote", 2.09)
  })
})
