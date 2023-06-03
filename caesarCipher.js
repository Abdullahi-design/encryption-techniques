function caesarCipher(str, shift) {
    // Wrap shift value if it's greater than 26 or less than -26
    shift = shift % 26;
  
    // Convert the string to uppercase
    str = str.toUpperCase();
  
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // Ignore non-alphabetic characters
      if (char.match(/[A-Z]/)) {
        // Convert the character code to a value between 0 and 25
        const charCode = char.charCodeAt(0) - 65;

        //For encryption
        // Apply the shift to the character code
        const shiftedCharCode = (charCode + shift + 26) % 26;

        //For decryption
        // Apply the reverse shift to the character code
      // const shiftedCharCode = (charCode - shift + 26) % 26;
  
        // Convert the shifted character code back to a character
        const shiftedChar = String.fromCharCode(shiftedCharCode + 65);
  
        result += shiftedChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage
  const plainText = caesarCipher('HI THERE MY NAME IS ABDULLAHI AND I LOVE MY SWEETHEART JEMILA', 3);
  console.log(plainText);
  