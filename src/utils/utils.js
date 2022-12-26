import { words, oneWord } from '../data'
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS } from './CONSTANTS'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = () => `${words[getRandomNumber(words.length)]}`

const iqualWords = (str1, str2) => str1 === str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

export const getRandomWords = (number_of_words) => {

  return [...Array(number_of_words).fill('')]
    .reduce((t) => {
      let randomWord = getRandomWord();
      (t[t.length-1] === randomWord) ? t.push(oneWord) : t.push(randomWord)
      return t
    }, [])
    
}

export const checkingResponse = (arr, arrResponse) => {

  let incorrectWord = []
  let win = true;

  for(let i = 0; i < arr.length - 1; i++) {
    let iqualWord = iqualWords(arr[i], arrResponse[i])
    incorrectWord[i] = (iqualWord) ? "" : arrResponse[i]
    if (!iqualWord) win = false;
  }

  return { incorrectWord, win }

}

export const checkingCurrentData = () => {
  
  let currentLevel = localStorage.getItem('level');
  let currentNumberOfWords = localStorage.getItem('numberOfWords');

  if(currentLevel === null) {
    localStorage.setItem('level', JSON.stringify(INITIAL_LEVEL));
    localStorage.setItem('numberOfWords', JSON.stringify(INITIAL_NUMBER_OF_WORDS));
    currentLevel = INITIAL_LEVEL;
    currentNumberOfWords = INITIAL_NUMBER_OF_WORDS;
  }

  return { currentLevel, currentNumberOfWords }

}