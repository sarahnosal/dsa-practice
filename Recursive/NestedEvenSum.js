//Write a function that returns the sum of all even numbers in an object which may contain nested objects

function nestedEvenSum (obj, sum=0) {
    // add whatever parameters you deem necessary - good luck!
        for (var key in obj) {
          if (typeof obj[key] === 'object'){
              sum += nestedEvenSum(obj[key]);
          } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
              sum += obj[key];
          }
      }
      return sum;
}