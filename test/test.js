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

});
