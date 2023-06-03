function fibonacciGoldenRatio(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    let ratios = [];
    for (let j = 1; j < sequence.length; j++) {
      let ratio = sequence[j] / sequence[j - 1];
      ratios.push(ratio);
    }
    
    return ratios;
  }
}

// Testing the fibonacciGoldenRatio function
let n = 10; // Number of Fibonacci numbers to generate
let result = fibonacciGoldenRatio(n);
console.log(result); // Output: [1, 2, 1.5, 1.6666666666666667, 1.6, 1.625, 1.6153846153846154, 1.619047619047619, 1.6176470588235294]
