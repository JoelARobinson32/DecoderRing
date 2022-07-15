// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        //Escape the function if the passed in alphabet is the wrong length
        if (!alphabet || alphabet.length !== 26) { return false; }

        //Exit if the alphabet repeates a character
        for (let i = 0; i < alphabet.length; i++) {
            const current = alphabet[i];
            for (let n = i + 1; n < alphabet.length - i; n++) {
                if (current === alphabet[n]) { return false }
            }
        }
        //Fixes a bug where if only the last two characters repeat, it doesn't catch it.
        if (alphabet[24] === alphabet[25]) { return false }


        //array for the lowercase alphabet
        const standardAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //Convert the input to lowercase
        const loweredIn = input.toLowerCase();
        //create string to return
        let result = "";

        if (encode) {
            for (let i = 0; i < loweredIn.length; i++) {
                if (loweredIn[i] === ' ') {
                    result += ' ';
                } else {
                    for (let n = 0; n < 26; n++) {
                        if (loweredIn[i] === standardAlphabet[n]) {
                            result += alphabet[n];
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < loweredIn.length; i++) {
                if (loweredIn[i] === ' ') {
                    result += ' ';
                } else {
                    for (let n = 0; n < 26; n++) {
                        if (loweredIn[i] === alphabet[n]) {
                            result += standardAlphabet[n];
                        }
                    }
                }
            }
        }
            return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
