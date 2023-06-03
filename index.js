function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var sequence = [0, 1];
      for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    }
  }
  
  // Testing the fibonacci function
  var n = 10; // Number of Fibonacci numbers to generate
  var result = fibonacci(n);
  console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  