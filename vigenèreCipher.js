function vigenereCipher(plaintext, keyword) {
    // Convert the plaintext and keyword to uppercase
    plaintext = plaintext.toUpperCase();
    keyword = keyword.toUpperCase();
  
    let result = '';
    const keywordLength = keyword.length;
    let keywordIndex = 0;
  
    for (let i = 0; i < plaintext.length; i++) {
      const plaintextChar = plaintext[i];
  
      // Ignore non-alphabetic characters
      if (plaintextChar.match(/[A-Z]/)) {
        const keywordChar = keyword[keywordIndex % keywordLength];
  
        // Convert the plaintext and keyword characters to character codes
        const plaintextCharCode = plaintextChar.charCodeAt(0) - 65;
        const keywordCharCode = keywordChar.charCodeAt(0) - 65;
  
        // Apply the Vigenère cipher formula
        const encryptedCharCode = (plaintextCharCode + keywordCharCode) % 26;
  
        // Convert the encrypted character code back to a character
        const encryptedChar = String.fromCharCode(encryptedCharCode + 65);
  
        result += encryptedChar;
  
        // Move to the next character in the keyword
        keywordIndex++;
      } else {
        result += plaintextChar;
      }
    }
  
    return result;
  }
  
  // Example usage
  const encryptedText = vigenereCipher('HELLO', 'KEY');
  console.log(encryptedText); // Outputs: RIJVS
  
  function vigenereDecipher(ciphertext, keyword) {
    // Convert the ciphertext and keyword to uppercase
    ciphertext = ciphertext.toUpperCase();
    keyword = keyword.toUpperCase();
  
    let result = '';
    const keywordLength = keyword.length;
    let keywordIndex = 0;
  
    for (let i = 0; i < ciphertext.length; i++) {
      const ciphertextChar = ciphertext[i];
  
      // Ignore non-alphabetic characters
      if (ciphertextChar.match(/[A-Z]/)) {
        const keywordChar = keyword[keywordIndex % keywordLength];
  
        // Convert the ciphertext and keyword characters to character codes
        const ciphertextCharCode = ciphertextChar.charCodeAt(0) - 65;
        const keywordCharCode = keywordChar.charCodeAt(0) - 65;
  
        // Apply the Vigenère cipher formula in reverse
        const decryptedCharCode = (ciphertextCharCode - keywordCharCode + 26) % 26;
  
        // Convert the decrypted character code back to a character
        const decryptedChar = String.fromCharCode(decryptedCharCode + 65);
  
        result += decryptedChar;
  
        // Move to the next character in the keyword
        keywordIndex++;
      } else {
        result += ciphertextChar;
      }
    }
  
    return result;
  }
  
  // Example usage
  const decryptedText = vigenereDecipher('RIJVS', 'KEY');
  console.log(decryptedText); // Outputs: HELLO
  