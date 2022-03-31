function solution(pair) {
  if (pair.length) throw new Error("Input is not an object")

  const keys = Object.keys(pair)
  const values = Object.values(pair)

  if (!keys.length) throw new Error("Input is empty")

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] < 0 || keys[i] > 5) throw new Error("Some key is out of range")
    if (!keys[i] || isNaN(keys[i])) throw new Error("Some key is not a number")
    if (values[i] < 0 || values[i] > 100)
      throw new Error("Some value is out of range")
    if (values.reduce((a, b) => a + b, 0) > 100)
      throw new Error("Total sum of percentage values exceeds the maxium")
    if (!values[i] || isNaN(values[i]) || !Number.isInteger(values[i]))
      throw new Error("Some value is not a number")
  }

  const mulArrays = (arr1, arr2) => {
    return arr1.map((e, index) => e * (arr2[index] / 100))
  }

  return {
    accumulatedPercentage: values.reduce((a, b) => a + b, 0),
    accumulatedNote: mulArrays(keys, values).reduce((a, b) => a + b, 0),
  }
}

module.exports = solution
