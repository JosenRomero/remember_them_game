import { useState, useEffect, createContext } from 'react';
import { TOTAL_LEVELS } from '../utils/CONSTANTS'
import { checkingCurrentData, setStorageItem } from '../utils/utils'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ lastLevelCompleted, setLastLevelCompleted ] = useState(false);
  const [ level, setLevel ] = useState(null);
  const [ numberOfWords, setNumberOfWords] = useState(null);
  const [ levelAttempts, setLevelAttempts ] = useState(null);

  useEffect(() => {
    let gameState = checkingCurrentData();
    updateState(gameState);
  }, [])

  const updateState = (gameState) => {
    setLevel(gameState.currentLevel);
    setNumberOfWords(gameState.currentNumberOfWords);
    setLastLevelCompleted(gameState.isLastLevelCompleted);
    setLevelAttempts(gameState.currentLevelAttempts);
  }

  const currentGameState = () => {
    return { currentLevel: level, currentNumberOfWords: numberOfWords, isLastLevelCompleted: lastLevelCompleted, currentLevelAttempts: levelAttempts }
  }

  const nextLevel = () => {

    let gameState = currentGameState();

    if(level < TOTAL_LEVELS) {
      let newValue = level + 1;
      gameState.currentLevel = newValue;
      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) gameState.currentNumberOfWords = numberOfWords + 1;
    }
    
    if(level === TOTAL_LEVELS) gameState.isLastLevelCompleted = true;

    gameState.currentLevelAttempts = levelAttempts + 1;

    updateState(gameState);
    setStorageItem("gameState", gameState);

  }

  const updateLevelAttempts = (resetValue) => {
    let gameState = currentGameState();
    let newValue = (resetValue) ? 0 : levelAttempts + 1
    gameState.currentLevelAttempts = newValue;
    setLevelAttempts(newValue);
    setStorageItem("gameState", gameState);
  }

  return (
    <UserContext.Provider value={{ level, nextLevel, updateLevelAttempts, levelAttempts, numberOfWords, lastLevelCompleted }}>
      {children}
    </UserContext.Provider>
  )

}