import { INITIAL_LEVEL, INITIAL_NUMBER_OF_WORDS } from './CONSTANTS.js'
import { encryptStorage } from './storage.js'

const checkingStorage = (key, defaultValue) => {

  let value = getStorageItem(key);

  if(value === undefined) {
    value = { ...defaultValue }
    setStorageItem(key, value);
  }

  return value

}

export const checkingCurrentSettings = () => {
  let settings = checkingStorage("settings", { mode: "iaMode", iaData: { words: [], number: 0 } });

  // update Settings
  if(!settings.hasOwnProperty("iaData")) {
    settings.iaData = { words: [], number: 0 }
    setStorageItem("settings", settings);
  }

  return settings
}

export const checkingCurrentData = () => {

  let gameState = checkingStorage("gameState", { currentLevel: INITIAL_LEVEL, currentNumberOfWords: INITIAL_NUMBER_OF_WORDS, isLastLevelCompleted: false, currentLevelAttempts: 0 });

  // update gameState
  if(gameState && !gameState.hasOwnProperty("currentLevelAttempts")) {
    gameState.currentLevelAttempts = 0;
    setStorageItem("gameState", gameState);
  }

  return gameState

}

export const getStorageItem = (key) => encryptStorage.getItem(key)

export const setStorageItem = (key, value) => encryptStorage.setItem(key, value)
