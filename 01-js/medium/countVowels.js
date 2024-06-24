/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str=    str.toLowerCase();
    var c=0;
    for(let ch of str){
        if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) { 
    if(ch=='a'|| ch=='i'||ch=='e'|| ch=='o'|| ch=='u' ){
        ++c;
      }
    }}return c;
  }

module.exports = countVowels;
