function countLetters(str) {
    const count = {};
    let mostCommonLetter = '';
    let leastCommonLetter = '';
    let mostCount = 0;
    let leastCount = Infinity;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
    //   console.log(char);
      if (char === ' ') continue;
  
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    
  
    for (const char in count) {
      if (count[char] > mostCount) {
        mostCount = count[char];
        mostCommonLetter = char;
      }
      if (count[char] < leastCount) {
        leastCount = count[char];
        leastCommonLetter = char;
      }
    }
    console.log("mostCount",mostCount);
    console.log("mostCommonLetter",mostCommonLetter);
    console.log("leastCount",leastCount);
    console.log("leastCommonLetter",leastCommonLetter);
    //object that contains the count of each character in the string
    console.log("4. Count of each character",count);
    return { count, mostCommonLetter, leastCommonLetter };
  }
  
  const str = 'Twitter Blue has it all, be it editing tweets, posting longer videos, or flaunting your verification badge! But it still fails to solve the one trivial issue, which is advertisements.';
  const result = countLetters(str);
  console.log("3.count, mostCommonLetter, leastCommonLetter ",result);



const numElements = 50;
const arr = [];

for (let i = 0; i < numElements; i++) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  arr.push(randomNum);
}

console.log("5. RandomNumber",arr);