const task_2 = require(".")

describe("Removing the 5 digit from number", () => {
  it("Entered number 8 expect error 'Value must be at least 2 digits'", () => {
    expect(() => task_2(8)).toThrow("Value must be at least 2 digits")
  })
  it("Entered number 12 expect error 'Value not contains the digit 5'", () => {
    expect(() => task_2(12)).toThrow("Value not contains the digit 5")
  })
  it("Entered number 1000005 expect error 'Value out of range'", () => {
    expect(() => task_2(1000005)).toThrow("Value out of range")
  })
  test("Input number 15859 expect 1859", () => {
    expect(task_2(15859)).toBe(1859)
  })
  test("Input number 15351 expect 1531", () => {
    expect(task_2(15351)).toBe(1531)
  })
  test("Input number -5351 expect -351", () => {
    expect(task_2(-5351)).toBe(-351)
  })
  test("Input number -5000 expect 0", () => {
    expect(task_2(-5000)).toBe(0)
  })
  test("Input number -5050 expect -50", () => {
    expect(task_2(-5050)).toBe(-50)
  })
})
