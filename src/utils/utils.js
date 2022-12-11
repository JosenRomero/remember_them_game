import { words } from '../data'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomWord = () => `${words[getRandomNumber(words.length)]}`

export const getRandomWords = (number_of_words) => {

  return [...Array(number_of_words).fill('')]
    .map(() => getRandomWord())
    
}