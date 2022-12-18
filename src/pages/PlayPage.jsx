import { useState } from 'react';
import ShowAndResponse from '../components/ShowAndResponse'
import Result from '../components/Result'

const PlayPage = () => {

  const [win, setWin] = useState(null);
  const [words, setWords] = useState([]);
  const [incorrectWord, setIncorrectWord] = useState([]);

  const result = (res) => {
    setWin(res.win);
    setWords(res.words);
    setIncorrectWord(res.incorrectWord);
  }

  return (
    <>
      {win === null 
        ? <ShowAndResponse result={result} /> 
        : <Result win={win} words={words} incorrectWord={incorrectWord} result={result} />
      }
    </>
  )

}

export default PlayPage
