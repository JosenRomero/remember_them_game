import { useState, useEffect, createContext } from 'react';
import { TOTAL_LEVELS } from '../utils/CONSTANTS'
import { checkingCurrentData, setStorageItem } from '../utils/utils'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ lastLevelCompleted, setLastLevelCompleted ] = useState(false);
  const [ level, setLevel ] = useState(null);
  const [ numberOfWords, setNumberOfWords] = useState(null);

  useEffect(() => {
    let gameState = checkingCurrentData();
    updateState(gameState);
  }, [])

  const updateState = (gameState) => {
    setLevel(gameState.currentLevel);
    setNumberOfWords(gameState.currentNumberOfWords);
    setLastLevelCompleted(gameState.isLastLevelCompleted);
  }

  const currentGameState = () => {
    return { currentLevel: level, currentNumberOfWords: numberOfWords, isLastLevelCompleted: lastLevelCompleted }
  }

  const nextLevel = () => {

    let gameState = currentGameState();

    if(level < TOTAL_LEVELS) {
      let newValue = level + 1;
      gameState.currentLevel = newValue;
      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) gameState.currentNumberOfWords = numberOfWords + 1;
    }
    
    if(level === TOTAL_LEVELS) gameState.isLastLevelCompleted = true;

    updateState(gameState);
    setStorageItem("gameState", gameState);

  }

  return (
    <UserContext.Provider value={{ level, nextLevel, numberOfWords, lastLevelCompleted }}>
      {children}
    </UserContext.Provider>
  )

}