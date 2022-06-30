function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('');
  return reversedWord === word
  // Write your algorithm here
  //1.Check if word is  equal reverse(word)
  // 2.Return True if yes and false if not
}

/* 
  Add your pseudocode here
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
