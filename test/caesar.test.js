const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Student Tests of Caesar Shift", () => {
    it("Should return false if shift is not passed in", () => {
        const actual = caesar("Test");
        expect(actual).to.be.false;
    });

    it("Should return false if shift is 0", () => {
        const actual = caesar("Test", 0, true);
        expect(actual).to.be.false;
    });

    it("Should return false if shift is >= 26", () => {
        const actual = caesar("Test", 26, true);
        expect(actual).to.be.false;
    });

    it("Should return false if shift is <= 26", () => {
        const actual = caesar("Test", -26, true);
        expect(actual).to.be.false;
    });

    it("Should work correctly with symbols", () => {
        const expected = "zkyz? zkyz!!";
        const actual = caesar("test? test!!", 6, true)
        expect(actual).to.equal(expected);
    });

    it("Should ignore capital letters", () => {
        const expected = "zkyz? zkyz!!";
        const actual = caesar("test? TEST!!", 6, true)
        expect(actual).to.equal(expected);
    });

    it("Should circle the alphabet if shifted left past a", () => {
        const expected = "wxyz";
        const actual = caesar("cdef", 6, false)
        expect(actual).to.equal(expected);
    });

    it("Should circle the alphabet if shifted right past z", () => {
        const expected = "qrst";
        const actual = caesar("wxyz", 6, false)
        expect(actual).to.equal(expected);
    });
});