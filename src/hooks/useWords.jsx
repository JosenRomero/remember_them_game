import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { getRandomWords } from '../utils/utils'
import { UserContext } from '../context/UserContext'
import { SettingsContext } from '../context/SettingsContext'

export const useWords = () => {

  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { numberOfWords } = useContext(UserContext);
  const { mode, iaData } = useContext(SettingsContext);

  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [index, setIndex] = useState(0);
  const [showingWords, setShowingWords] = useState(true);

  useEffect(() => {

    if(words.length === 0 && word === null && numberOfWords !== null) {

      if(mode === "iaMode" && iaData.words.length === 0) navigate('/')

      let items = getRandomWords(numberOfWords, i18n.language, mode, iaData);
      items.push("");
      setWords(items);
      setWord(items[0]);

    }

  }, [numberOfWords])

  useEffect(() => {

    if(index < words.length) {

      const timerId = setInterval(() => {
  
        setIndex((i) => i + 1)
  
      }, 2000);

      return () => clearInterval(timerId);

    }

  }, [words])

  useEffect(() => {

    if(words[index]) setWord(words[index]);
    
    if(words[index] === "") setShowingWords(false);
    
  }, [index])

  return {
    words,
    word,
    showingWords
  }

}
