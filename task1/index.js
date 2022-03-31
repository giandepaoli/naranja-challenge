function solution(n) {
  const solution = []

  if (n < 1) return solution

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return num > 1
  }

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      solution.push(i)
    }
  }

  return solution
}

module.exports = solution
