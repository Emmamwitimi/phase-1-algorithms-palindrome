function isPalindrome(word) {
  // Write your algorithm here
  const arrayWord = word.split('');
  //reverse the array
  const reversedArrayWord = arrayWord.reverse();
  //transform array into string
  const reverseword = reversedArrayWord.join('');
  //compare the reverseword and word
  if (reverseword === word){
    return true;
  }
  else{
    return false;
  }

}

/* 
  Add your pseudocode here
  function called is palidrome that take in a string
  get the user input and save it a variable word
  convert the string into an array
  then reverse the array
  convert the reversed array into a string
  compare the reversed string to word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
