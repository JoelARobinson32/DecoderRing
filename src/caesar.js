// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    //Helper functions to increment/decrement characters. This method did not work.
    /*function incChar(char, shift) {
        console.log(shift);
        let temp;

        temp = String.fromCharCode(char.charCodeAt(0) + shift);
        return temp;
    }

    function decChar(char, shift) {
        let temp;
        for (let i = 0; i < shift; i++)

        temp = String.fromCharCode(char.charCodeAt(0) - shift);
        return temp;
    }*/

    function caesar(input, shift, encode = true) {
        //Check that the shift value is valid and escape the function if not
        if (!shift || shift < -25 || shift > 25 || shift === 0) {
            return false;
        }

        //array for the lowercase alphabet
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let shiftedAlpha = [];

        //Convert the input to lowercase
        const loweredIn = input.toLowerCase();
        //create string to return
        let result = "";

        //reverse the alphabet if decoding
        if (!encode) {
            alphabet.sort((letter1, letter2) =>
                letter1 < letter2 ? 1 : -1);
        }

        //Create an array of the shifted alphabet
        for (let i = 0; i < 26; i++) {
            //shifting right
            if (shift > 0) {
                //handle passing z
                if (i + shift < 26) {
                    shiftedAlpha.push(alphabet[i + shift]);
                } else {
                    let temp = (i + shift) - 26;
                    shiftedAlpha.push(alphabet[temp]);
                }
            //shifting left
            } else {
                //handle passing a
                if (i + shift >= 0) {
                    shiftedAlpha.push(alphabet[i + shift]);
                } else {
                    let temp = (i + shift) + 26;
                    shiftedAlpha.push(alphabet[temp]);
                }
            }
        }

        //fill the result string with shifted letters.
        for (let i = 0; i < input.length; i++) {
            for (let n = 0; n < 26; n++) {
                //Check if the current character is a letter.
                if (alphabet.find((letter) => letter === loweredIn[i])) {
                    if (loweredIn[i] === alphabet[n]) {
                        result += shiftedAlpha[n];
                    }
                } else {
                    //Add symbols and escape the loop.
                    result += loweredIn[i];
                    n = 26;
                }
            }
        }

        return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
