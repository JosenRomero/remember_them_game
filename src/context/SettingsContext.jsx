import { useState, useEffect, createContext } from 'react';
import { checkingCurrentSettings, setStorageItem } from '../utils/checkingStorage'

export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {

  const [ settings, setSettings ] = useState({
    mode: "",
    iaData: null
  });

  useEffect(() => {
    let currentSettings = checkingCurrentSettings();
    setSettings(currentSettings);
  }, [])

  const updateSettings = (id, value) => {
    let newSettings = { ...settings, [id]: value }
    setSettings(newSettings);
    setStorageItem("settings", newSettings);
  }

  return (
    <SettingsContext.Provider value={{ mode: settings.mode, iaData: settings.iaData, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )

}