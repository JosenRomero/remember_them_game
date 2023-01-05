import { useState, useEffect, createContext } from 'react';
import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS, TOTAL_LEVELS } from '../utils/CONSTANTS'
import { checkingCurrentData, setStorageItem } from '../utils/utils'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ lastLevelCompleted, setLastLevelCompleted ] = useState(false);
  const [ level, setLevel ] = useState(INITIAL_LEVEL);
  const [ numberOfWords, setNumberOfWords] = useState(INITIAL_NUMBER_OF_WORDS);

  useEffect(() => {

    let { currentLevel, currentNumberOfWords, isLastLevelCompleted } = checkingCurrentData();
    
    setLevel(currentLevel);
    setNumberOfWords(currentNumberOfWords);
    setLastLevelCompleted(isLastLevelCompleted);

  }, [])

  const nextLevel = () => {

    let gameState = { currentLevel: level, currentNumberOfWords: numberOfWords, isLastLevelCompleted: lastLevelCompleted }

    if(level < TOTAL_LEVELS) {
      
      let newValue = level + 1;
      gameState.currentLevel = newValue;
      setLevel(newValue);

      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) {
        gameState.currentNumberOfWords = numberOfWords + 1;
        setNumberOfWords(numberOfWords + 1);
      }

    }
    
    if(level === TOTAL_LEVELS) {
      gameState.isLastLevelCompleted = true;
      setLastLevelCompleted(true);
    }

    setStorageItem("gameState", gameState);

  }

  return (
    <UserContext.Provider value={{ level, nextLevel, numberOfWords, lastLevelCompleted }}>
      {children}
    </UserContext.Provider>
  )

}