/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s1, s2) {

let mp1=  {};
let mp2 = {};
let flag = false;
s1 = s1.toLowerCase();
s2 = s2.toLowerCase();
if(s1.length===0 && s2.length===0){
  return true;
}
if(s1.length !=s2.length){
    console.log(false);
    return false;
}

for (let i = 0; i < s1.length; i++) {
    mp1[s1[i]] = (mp1[s1[i]] || 0) + 1;
  }

 for (let i = 0; i < s2.length; i++) {
        mp2[s2[i]] = (mp2[s2[i]] || 0) + 1;
    }


for(let i in mp1){
if(mp1[i]!==mp2[i]){
        console.log(false);
        return false;
    }
}
if(!flag){
    console.log(true);
    return true;
} 
}

module.exports = isAnagram;
