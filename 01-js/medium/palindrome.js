/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let str2 = "";
  if(str.length===0 || str.length===1)
    return true;
  for(let ch of str){
    if(ch>='a' && ch<='z')
      { 
        str2+=ch; 
      }
  }
  let n = str2.length;
  for (let i = 0; i < n / 2; i++) {
    if (str2[i] !== str2[n - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
