const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Student Tests of Substitution Cypher", () => {
    it("Should preserve spaces", () => {
        const subAlpha = ['q', 'a', 'z', 'w', 's', 'x', '#', 'e', 'd', 'c', '$', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', '*', 'i', 'k'];
        const expected = 'nshn nshn';
        const actual = substitution("test test", subAlpha, true);
        expect(actual).to.equal(expected);
    });

    it("Should decode as well as encode", () => {
        const subAlpha = ['q', 'a', 'z', 'w', 's', 'x', '#', 'e', 'd', 'c', '$', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', '*', 'i', 'k'];
        const expected = 'test test';
        const actual = substitution("nshn nshn", subAlpha, false);
        expect(actual).to.equal(expected);
    });

    it("Should ignore capital letters", () => {
        const subAlpha = ['q', 'a', 'z', 'w', 's', 'x', '#', 'e', 'd', 'c', '$', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', '*', 'i', 'k'];
        const expected = 'nshn nshn';
        const actual = substitution("TEST TEST", subAlpha, true);
        expect(actual).to.equal(expected);
    });

    it("Alphabet passed in should return false if it is not exactly 26 characters", () => {
        const subAlpha = ['q', 'a', 'z', 'w', 's', 'x', '#', 'e', 'd', 'c', '$', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', '*', 'i', 'k','o'];
        const actual = substitution("TEST TEST", subAlpha, true);
        expect(actual).to.be.false
    });

    it("Alphabet passed in should return false if all characters are not unique", () => {
        const subAlpha = ['q', 'a', 'z', 'w', 's', 'x', '#', 'e', 'd', 'c', '$', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', '*', 'i', 'i'];
        const actual = substitution("TEST TEST", subAlpha, true);
        expect(actual).to.be.false;
    });
});