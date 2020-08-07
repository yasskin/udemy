import GuessedWords from '../GuessedWords';

/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @param {number} number - Number of letters matched between guessed word and answer
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
