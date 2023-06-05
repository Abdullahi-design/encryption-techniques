const impFib = require('./fib') 

// let limit = 3; // Number of Fibonacci numbers to generate
// let fibResult = impFib.generateFibonacci(limit);
// console.log(fibResult); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Function to encrypt the plaintext using the Fibonacci sequence
function goldenFibEncrypt(plaintext) {
  // Generate Fibonacci sequence up to the length of the plaintext
  const fibonacci = impFib.generateFibonacci(plaintext.length);

  let result = '';

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    const charCode = char.charCodeAt(0); //ASCII Value

    // Apply Fibonacci encryption by shifting the character code
    const encryptedCharCode = charCode + fibonacci[i];

    // Convert the encrypted character code back to a character
    const encryptedChar = String.fromCharCode(encryptedCharCode);

    result += encryptedChar;
  }

  return result;
}

// Function to decrypt the ciphertext using the golden ratio
function goldenFibDecrypt(ciphertext) {
    const fibonacci = impFib.generateFibonacci(ciphertext.length);
    // const goldenRatio = (1 + Math.sqrt(5)) / 2;
  
    let result = '';
  
    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      const charCode = char.charCodeAt(0);
  
      // Apply golden ratio decryption by shifting the character code back
      const decryptedCharCode = charCode - fibonacci[i];
    //   console.log(decryptedCharCode, 'decryptedCharCode');
  
      // Convert the decrypted character code back to a character
      const decryptedChar = String.fromCharCode(decryptedCharCode);
    //   console.log(charCode, '******');

  
      result += decryptedChar;
    }
  
    return result;
  }
  

// Example usage
const plaintext = 'MY NAME IS ABDULLAHI SANI MOHAMMED';
const encryptedText = goldenFibEncrypt(plaintext);
console.log('Encrypted Text:', encryptedText); 
const decryptedText = goldenFibDecrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
