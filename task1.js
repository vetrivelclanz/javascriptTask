const text = 
"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean";

console.log(text);

const words = text.toLowerCase().split(/\W+/);
console.log(words);

const wordCounts = {};

for (const word of words) {
    if (word in wordCounts) 
    {
      wordCounts[word] += 1;
    } 
    else {
      wordCounts[word] = 1;
    }
  }

console.log(wordCounts);

const totalWords = Object.values(wordCounts).reduce((a, b) => a + b);

console.log(totalWords);
const wordFrequencies = {};
for (const [word, count] of Object.entries(wordCounts)) {
  wordFrequencies[word] = (count / totalWords) * 100;
}

console.log(wordFrequencies);