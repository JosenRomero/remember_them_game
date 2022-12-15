import { words } from '../data'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = () => `${words[getRandomNumber(words.length)]}`

const iqualWords = (str1, str2) => str1 === str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

export const getRandomWords = (number_of_words) => {

  return [...Array(number_of_words).fill('')]
    .map(() => getRandomWord())
    
}

export const checkingResponse = (arr, objResponse) => {

  let incorrectWord = []
  let win = true;

  for(let i = 0; i < arr.length - 1; i++) {
    let iqualWord = iqualWords(arr[i], objResponse[i])
    incorrectWord[i] = (iqualWord) ? "" : objResponse[i]
    if (!iqualWord) win = false;
  }

  return { incorrectWord, win }

}