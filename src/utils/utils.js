import { words } from '../data/data.js'
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS } from './CONSTANTS'
import { encryptStorage } from './storage.js'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = (myWords) => `${myWords[getRandomNumber(myWords.length - 1)]}`

export const getRandomWords = (number_of_words, language, mode) => {

  const myWords = words[language][mode];

  return [...Array(number_of_words).fill('')]
    .reduce((t) => {
      let randomWord = getRandomWord(myWords);
      (t[t.length-1] === randomWord) ? t.push(myWords[myWords.length - 1]) : t.push(randomWord)
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

export const checkingCurrentSettings = () => {

    let settings = getStorageItem("settings");

    if(settings === undefined) {
      settings = { mode: "basicMode" }
      setStorageItem("settings", settings);
    }

    return settings

}

export const checkingCurrentData = () => {

  let gameState = getStorageItem("gameState");

  if(gameState === undefined) {
    gameState = { currentLevel: INITIAL_LEVEL, currentNumberOfWords: INITIAL_NUMBER_OF_WORDS, isLastLevelCompleted: false, currentLevelAttempts: 0 }
    setStorageItem("gameState", gameState);
  }

  // update gameState
  if(gameState && !gameState.hasOwnProperty("currentLevelAttempts")) {
    gameState.currentLevelAttempts = 0;
    setStorageItem("gameState", gameState);
  }

  return gameState

}

export const getStorageItem = (key) => encryptStorage.getItem(key)

export const setStorageItem = (key, value) => encryptStorage.setItem(key, value)
