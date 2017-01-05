// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save
(function() {
  "use strict";

  module.exports = {
    targetSumIndex: targetSumIndex
  };

  function targetSumIndex(array, integer){
    var i;
    var j;
    var index1;
    var index2;
    var indexArray =[];

    if(!Array.isArray(array)|| !Number.isInteger(integer)){
      return ("invalid argument type");
    } else {
      for (i=0; i<array.length; i++){
        index1 = i;
        for (j=0; j<array.length; j++){
          if(i !== j && array[i] + array[j] === integer){
            indexArray.push(index1);
            indexArray.push(j);
            return indexArray;
          }
        }
      }
    return "No match, try again";
    }
  }
})();
