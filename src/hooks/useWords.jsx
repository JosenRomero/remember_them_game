import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { getRandomWords } from '../utils/utils'
import { UserContext } from '../context/UserContext'

export const useWords = () => {

  const { i18n } = useTranslation();
  const { numberOfWords } = useContext(UserContext);

  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [index, setIndex] = useState(0);
  const [showingWords, setShowingWords] = useState(true);

  useEffect(() => {

    if(words.length === 0 && word === null && numberOfWords !== null) {

      let items = getRandomWords(numberOfWords, i18n.language, "basicMode");
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
