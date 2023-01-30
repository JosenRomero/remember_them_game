import { useState, useEffect, createContext } from 'react';
import { checkingCurrentSettings, setStorageItem } from '../utils/utils'

export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {

  const [ settings, setSettings ] = useState({
    mode: ""
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
    <SettingsContext.Provider value={{ mode: settings.mode, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )

}