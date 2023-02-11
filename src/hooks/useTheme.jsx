import { useState, useEffect } from 'react'

export const useTheme = () => {

  const [darkTheme, setDarkTheme] = useState(false);
  const element = document.querySelector("html");

  useEffect(() => {

    let theme = window.localStorage.getItem("DarkTheme");
    if(theme !== null) updateTheme(JSON.parse(theme))

  }, [])

  const updateTheme = (value) => {

    setDarkTheme(value);

    if(value) element.classList.add("dark")
    else element.classList.remove("dark")

    window.localStorage.setItem("DarkTheme", JSON.stringify(value));

  }

  return {
    darkTheme,
    updateTheme
  }

}
