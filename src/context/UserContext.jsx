import { useState, useEffect, createContext } from 'react';
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS, TOTAL_LEVELS } from '../utils/CONSTANTS'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ level, setLevel ] = useState(INITIAL_LEVEL);
  const [ numberOfWords, setNumberOfWords] = useState(INITIAL_NUMBER_OF_WORDS);

  useEffect(() => {

    checkingCurrentData();

  }, [])

  const checkingCurrentData = () => {
    let currentLevel = localStorage.getItem('level');
    let currentNumberOfWords = localStorage.getItem('numberOfWords');

    if(currentLevel === null) {
      localStorage.setItem('level', JSON.stringify(INITIAL_LEVEL));
      localStorage.setItem('numberOfWords', JSON.stringify(INITIAL_NUMBER_OF_WORDS));
      currentLevel = INITIAL_LEVEL;
      currentNumberOfWords = INITIAL_NUMBER_OF_WORDS;
    }

    setLevel(JSON.parse(currentLevel));
    setNumberOfWords(JSON.parse(currentNumberOfWords));

  }

  const nextLevel = () => {

    if(level < TOTAL_LEVELS) {
      
      let newValue = level + 1;
      localStorage.setItem('level', JSON.stringify(newValue));
      setLevel(newValue);

      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) {
        localStorage.setItem('numberOfWords', JSON.stringify(numberOfWords + 1));
        setNumberOfWords(numberOfWords + 1);
      }

    }

  }

  return (
    <UserContext.Provider value={{ level, nextLevel, numberOfWords }}>
      {children}
    </UserContext.Provider>
  )

}