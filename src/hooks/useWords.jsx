import { useEffect, useState } from 'react';
import { getRandomWords } from '../utils/utils'

export const useWords = () => {

  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [index, setIndex] = useState(0);
  const [showingWords, setShowingWords] = useState(true);

  useEffect(() => {

    if(words.length === 0 && word === null) {

      let items = getRandomWords(3);
      items.push("");
      setWords(items);
      setWord(items[0]);

    }

  }, [])

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
