const countVowels = (word) => {
    const vowels = 'AEIOUaeiou';
    let count = 0;

    for (const char of word) {
        if (vowels.includes(char)) count++;
    }

    return count;
}

const getLongestWordWithMostVowels = (sentence) => {
    const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
  
    let longestWord = '';
    let maxVowelCount = 0;
  
    for (const word of words) {
        const vowelCount = countVowels(word);
    
        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowelCount)) {
            longestWord = word;
            maxVowelCount = vowelCount;
        }
    }
  
    return longestWord;
}
  
const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const longestWord = getLongestWordWithMostVowels(sentence);

console.log("The longest word with most vowels is", longestWord);
