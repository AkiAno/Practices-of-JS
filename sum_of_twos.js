// Task:  To create a function
//        that will calculate the sum of two elements in an array 
//        and check if the sum is equal to a specific number. The return of a function
//        should be an array of indexes of the numbers, that met the requirement.
// Inputs of a function:
//        array of numbers and a number
// Solution:

let add = function(array, prevIndex, curIndex, target) { // secondary function with inputs: array, previous index, current index, a number                                                                (to check if the sum of two elements in an array, equal to it).
  let indexes = [];                                      
  for (let i = curIndex; i < array.length; i++) {        
    if (array[prevIndex] + array[i] === target) {        // condition, which checks if the sum of two elements of the array equal to the                                                           // target number 
      indexes = [prevIndex, i];                          // if condition is met, then put inside the array prevIndex and i
      break;                                             // once condition is met, then break the array
    }
  }
  return indexes;                                        // return array of indexes
};

let twoSum = function(nums, target) {                   // main function, that will be called on the console. Inputs: array, a number
  let result = [];                                      
  nums.map(function(element, index) {                   
    if (index < nums.length - 1) {                      // condition to be aware, that loop does not go out of the array
      let arrayOfIndexes = add(nums, index, index + 1, target);    // call a function add 
      if (arrayOfIndexes.length > 0) {
        result.push(arrayOfIndexes);                               // put inside the array the value of arrayOfIndexes
      }
    }
  });
  return result;                                        
};


// Examples:
// twoSum([2,3,4], 5) // result: [[0,1]], the sum of numbers under indexes 0, 1 equal to 5
// twoSum([1,2,3], 4) // result: [[0,2]], the sum of numbers under indexes 0, 2 equal to 4
// twoSum([10,3,4],8) // result: empty array
// twoSum([5,11,9,12], 20) // result: [[0,2]], the sum of numbers under indexes 1, 2 equal to 20
