const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Student Tests of Polybius Square", () => {
    it("Output should be a string when encoding", () => {
        const actual = polybius("Test", true);
        expect(actual).to.be.a("string");
    });

    it("Should return flase if an uneven amount of characters, excluding spaces, are passed", () => {
        const actual = polybius("42435113 4234 22245111444", false);
        expect(actual).to.be.false;
    });

    it("Should preserve spaces", () => {
        const expected = 'test test';
        const actual = polybius("44513444 44513444", false)
        expect(actual).to.equal(expected);
    });

    it("Should ignore capitol letters", () => {
        const expected = '44513444';
        const actual = polybius("TEST", true);
        expect(actual).to.equal(expected);
    });

    it("Should decode 42 to (i/j)", () => {
        const expected = '(i/j)oel (i/j)s great';
        const actual = polybius("42435113 4234 2224511144", false);
        expect(actual).to.equal(expected);
    });

    it("Should encode both i and j to 42", () => {
        const expected = '42435113 4234 2224511144';
        const actual = polybius("Joel is great", true);
        expect(actual).to.equal(expected);
    });
});