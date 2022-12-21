import { useState, useEffect, createContext } from 'react';
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS, TOTAL_LEVELS } from '../utils/CONSTANTS'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ level, setLevel ] = useState(INITIAL_LEVEL);
  const [ numberOfWords, setNumberOfWords] = useState(INITIAL_NUMBER_OF_WORDS);

  useEffect(() => {

    let currentLevel = localStorage.getItem('level');

    if(currentLevel === null) {
      localStorage.setItem('level', JSON.stringify(INITIAL_LEVEL));
      currentLevel = INITIAL_LEVEL;
    }

    setLevel(JSON.parse(currentLevel));

  }, [])

  const nextLevel = () => {

    if(level < TOTAL_LEVELS) {
      let newValue = level + 1;
      localStorage.setItem('level', JSON.stringify(newValue));
      setLevel(newValue);
      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) setNumberOfWords(numberOfWords + 1);
    }

  }

  return (
    <UserContext.Provider value={{ level, nextLevel, numberOfWords }}>
      {children}
    </UserContext.Provider>
  )

}