import { words } from '../data/data.js'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = (myWords) => `${myWords[getRandomNumber(myWords.length - 1)]}`

export const getRandomWords = (number_of_words, language, mode, iaData) => {

  const myWords = (mode === "iaMode") ? iaData.words : words[language][mode]

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
