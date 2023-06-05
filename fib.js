function generateFibonacci(limit) {
  if (limit <= 0) {
    return [];
  } else if (limit === 1) {
    return [0];
  } else if (limit === 2) {
    return [0, 1];
  } else {
    const sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}

// Testing the fibonacci function
// let limit = 10; // Number of Fibonacci numbers to generate
// let result = generateFibonacci(limit);
// console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

module.exports = { generateFibonacci }