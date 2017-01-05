"use strict";

const code = require('../jan5warmup.js');
const expect = require('chai').expect;

describe("targetSumIndex", () => {

  it("Should accept only an array and an integer", () => {
    expect(code.targetSumIndex()).to.equal("invalid argument type");
    expect(code.targetSumIndex(8)).to.equal("invalid argument type");
    expect(code.targetSumIndex('string', 'string')).to.equal("invalid argument type");
    expect(code.targetSumIndex({}, [])).to.equal("invalid argument type");
    expect(code.targetSumIndex(8, [])).to.equal("invalid argument type");
    expect(code.targetSumIndex([], {})).to.equal("invalid argument type");
  });

  it("Should return an array with two index numbers with values that sum to equal the second argument", () => {
    expect(code.targetSumIndex([1,2,3,4], 4)).to.eql([0,2]);
    expect(code.targetSumIndex([1,2,5], 7)).to.eql([1,2]);
    expect(code.targetSumIndex([1, 2, 3, 4, 5, 6, 7], 13)).to.eql([5,6]);
  });
  it("Should return no match if there isn't a match in the array given", () => {
    expect(code.targetSumIndex([1,1], 4)).to.equal("No match, try again");
    expect(code.targetSumIndex([1,1,1], 3)).to.equal("No match, try again");
    expect(code.targetSumIndex([0,1,2], 4)).to.equal("No match, try again");
    expect(code.targetSumIndex([0,1,2,3,4], 8)).to.equal("No match, try again");
  });

});
