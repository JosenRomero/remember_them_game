import { useState, useEffect, createContext } from 'react';
import { TOTAL_LEVELS } from '../utils/CONSTANTS'
import { checkingCurrentData, setStorageItem } from '../utils/checkingStorage'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ gameState, setGameState ] = useState({
    currentLevel: null,
    currentNumberOfWords: null,
    isLastLevelCompleted: false,
    currentLevelAttempts: null
  });

  useEffect(() => {
    let currentGameState = checkingCurrentData();
    setGameState(currentGameState);
  }, [])

  const updateGameState = (id, value) => {
    let newGameState = { ...gameState, [id]: value }
    setGameState(newGameState);
    setStorageItem("gameState", newGameState);
  }

  const nextLevel = () => {

    let newGameState = { ...gameState }

    if(gameState.currentLevel < TOTAL_LEVELS) {
      let newValue = gameState.currentLevel + 1;
      newGameState.currentLevel = newValue;
      if(newValue % 3 === 0 && newValue !== 9 && newValue !== 15) newGameState.currentNumberOfWords = gameState.currentNumberOfWords + 1;
    }
    
    if(gameState.currentLevel === TOTAL_LEVELS) newGameState.isLastLevelCompleted = true;

    newGameState.currentLevelAttempts = gameState.currentLevelAttempts + 1;

    setGameState(newGameState);
    setStorageItem("gameState", newGameState);

  }

  const updateLevelAttempts = (resetValue) => {
    let newValue = (resetValue) ? 0 : gameState.currentLevelAttempts + 1
    updateGameState("currentLevelAttempts", newValue);
  }

  return (
    <UserContext.Provider value={{ level: gameState.currentLevel, nextLevel, updateLevelAttempts, levelAttempts: gameState.currentLevelAttempts, numberOfWords: gameState.currentNumberOfWords, lastLevelCompleted: gameState.isLastLevelCompleted }}>
      {children}
    </UserContext.Provider>
  )

}