import { words, oneWord } from '../data/data.js'
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS } from './CONSTANTS'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = (language) => `${words[language][getRandomNumber(words[language].length)]}`

export const getRandomWords = (number_of_words, language) => {

  return [...Array(number_of_words).fill('')]
    .reduce((t) => {
      let randomWord = getRandomWord(language);
      (t[t.length-1] === randomWord) ? t.push(oneWord) : t.push(randomWord)
      return t
    }, [])
    
}

export const checkingResponse = (arr, arrResponse) => {

  let incorrectWord = []
  let win = true;

  for(let i = 0; i < arr.length - 1; i++) {
    let iqualWord = arr[i] === arrResponse[i]
    incorrectWord[i] = (iqualWord) ? "" : arrResponse[i]
    if (!iqualWord) win = false;
  }

  return { incorrectWord, win }

}

export const checkingCurrentData = () => {

  let gameState = getStorageItem("gameState");

  if(gameState === null) {
    gameState = { currentLevel: INITIAL_LEVEL, currentNumberOfWords: INITIAL_NUMBER_OF_WORDS, isLastLevelCompleted: false }
    setStorageItem("gameState", gameState);
  } else {
    gameState = JSON.parse(gameState)
  }

  return gameState

}

export const getStorageItem = (key) => localStorage.getItem(key)

export const setStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
