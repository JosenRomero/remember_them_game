import { useState, useEffect, createContext } from 'react';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [ level, setLevel ] = useState(1);

  useEffect(() => {

    let currentLevel = localStorage.getItem('level');

    if(currentLevel === null) {
      localStorage.setItem('level', JSON.stringify(1));
      currentLevel = 1;
    }

    setLevel(JSON.parse(currentLevel));

  }, [])

  const nextLevel = () => {
    let newValue = level + 1;
    localStorage.setItem('level', JSON.stringify(newValue));
    setLevel(newValue);
  }

  return (
    <UserContext.Provider value={{ level, nextLevel }}>
      {children}
    </UserContext.Provider>
  )

}