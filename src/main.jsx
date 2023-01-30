import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './context/UserContext'
import { SettingsProvider } from './context/SettingsContext'
import './index.css'
import './i18n/i18nConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SettingsProvider>
  </React.StrictMode>,
)
