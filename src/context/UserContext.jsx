import { useState, useEffect, createContext } from 'react';
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS, TOTAL_LEVELS } from '../utils/CONSTANTS'
import { checkingCurrentData } from '../utils/utils'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ lastLevelCompleted, setLastLevelCompleted ] = useState(false);
  const [ level, setLevel ] = useState(INITIAL_LEVEL);
  const [ numberOfWords, setNumberOfWords] = useState(INITIAL_NUMBER_OF_WORDS);

  useEffect(() => {

    let { currentLevel, currentNumberOfWords } = checkingCurrentData();

    setLevel(JSON.parse(currentLevel));
    setNumberOfWords(JSON.parse(currentNumberOfWords));

    checkingLastLevelCompleted();

  }, [])

  const checkingLastLevelCompleted = () => {
    let value = localStorage.getItem('lastLevelCompleted');
    if(value !== null) setLastLevelCompleted(JSON.parse(value));
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
    
    if(level === TOTAL_LEVELS) {
      localStorage.setItem('lastLevelCompleted', JSON.stringify(true));
      setLastLevelCompleted(true);
    }

  }

  return (
    <UserContext.Provider value={{ level, nextLevel, numberOfWords, lastLevelCompleted }}>
      {children}
    </UserContext.Provider>
  )

}