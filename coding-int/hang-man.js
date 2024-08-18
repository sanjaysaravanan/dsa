// input - word to play with, offensive word which  can be formed out the guesses

//  letter input

//  Output

// synchronized, snond

// checkForOffensive - word, offensiveWord

// word == offensiveWord -> return true

const checkForOffensive = (word, offWord) => {
  let i = 0;
  let j = 0;

  while (i < offWord.length) {
    // try finding the ith letter of offWord in word
    while (j < word.length) {
      if (word[j] === offWord[i]) {
        if (i === offWord.length - 1) {
          return true;
        }
        j++;
        break;
      }

      j++;
    }
    if (j === word.length) {
      return false;
    }

    i++;
  }
};

console.log(checkForOffensive("synchronized", "sond"));
