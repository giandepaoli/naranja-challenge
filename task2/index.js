const solution = (n) => {
  let solution = 0
  let positive = true

  if (n < 0) {
    positive = false
  }

  const numbers = Array.from(String(parseInt(n)), Number).filter(
    (value) => !Number.isNaN(value)
  )

  if (numbers.length < 2) throw new Error("Value must be at least 2 digits")
  if (!numbers.includes(5)) throw new Error("Value not contains the digit 5")
  if (n > 999555 || n < -999995) throw new Error("Value out of range")

  let indexes = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
      indexes.push(i)
    }
  }

  let posibilities = []
  for (let i = 0; i < indexes.length; i++) {
    let auxArr = numbers
      .slice(0, indexes[i])
      .concat(numbers.slice(indexes[i] + 1, numbers.length))
    if (parseInt(auxArr.join("")) > solution) {
      posibilities.push(parseInt(auxArr.join("")))
      auxArr = numbers
    }
  }

  if (posibilities.length === 0) return solution
  if (positive) return Math.max(...posibilities)
  return -Math.min(...posibilities)
}

module.exports = solution
