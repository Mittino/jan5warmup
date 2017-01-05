// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save
"use strict";

// module.exports = {
//
//
//
//   targetSumIndex(array, integer){
//     var i;
//     var j;
//     var index1;
//     var index2;
//     var array =[];
//
//     if(!Array.isArray(array)|| !Number.isInteger(integer)){
//       return ("invalid argument type");
//     }
//
//     for (i=0; i<array.length; i++){
//       index1 = array[i];
//       console.log(array);
//       for (j=0; j<array.length; j++){
//         if(index1 + array[j] === integer){
//           array.push(index1);
//           array.push(array[j]);
//           return array;
//         }
//       }
//     }
//
//   }
//
//
//
//
// };
console.log("hello");

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
    index1 = array[i];
    console.log(array[i]);
    for (j=0; j<array.length; j++){
      if(index1 + array[j] === integer){
        indexArray.push(index1);
        indexArray.push(array[j]);
        return indexArray;
      }
    }
    }
  }
}

console.log(targetSumIndex([1,2,3], 3));
