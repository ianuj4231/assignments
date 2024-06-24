/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxx = Number.MIN_SAFE_INTEGER;
    if(numbers.length===0){
        return undefined;
    }
for(let i of numbers){
    if(i>maxx){
        maxx=i;
    }
}
return maxx;
}

module.exports = findLargestElement;
