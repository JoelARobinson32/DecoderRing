// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        // create an alphabet array 
        const alphabet = [
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', '(i/j)', 'k'],
            ['l', 'm', 'n', 'o', 'p'],
            ['q', 'r', 's', 't', 'u'],
            ['v', 'w', 'x', 'y', 'z'],
        ]

        //Convert input to lowercase
        const loweredIn = input.toLowerCase();

        //create output string
        let result = "";

        if (encode) {
            for (let i = 0; i < loweredIn.length; i++) {
                let current = loweredIn[i];
                //convert i and j.
                if (current === 'i' || current === 'j') { current = '(i/j)' }
                //Preserve spaces.
                if (current === ' ') {
                    result += ' ';
                } else {
                    //loop through alphebet to find index.
                    for (let n = 0; n < alphabet.length; n++) {
                        for (let j = 0; j < alphabet[n].length; j++) {
                            if (alphabet[n][j] === current) {
                                result += (j+1);
                                result += (n+1);
                            }
                        }
                    }
                }
            }
        } else {
            //Exit if input is odd
            let count = input.length;
            for (let i = 0; i < input.length; i++) {
                if (input[i] === ' ') { count--; }
            }
            if ((count % 2) !== 0) { return false }
            //Decode
            for (let i = 0; i < loweredIn.length; i++) {
                //preserve spaces
                if (loweredIn[i] === ' ') {
                    result += ' ';
                } else {
                    result += alphabet[loweredIn[i + 1] - 1][loweredIn[i] - 1];
                    i++;
                }
            }
        }
        return result;
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
