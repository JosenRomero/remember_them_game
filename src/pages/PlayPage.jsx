import { useState, useContext } from 'react';
import ShowAndResponse from '../components/ShowAndResponse'
import Result from '../components/Result'
import { UserContext } from '../context/UserContext'

const PlayPage = () => {

  const { level, nextLevel, updateLevelAttempts, levelAttempts, lastLevelCompleted } = useContext(UserContext);

  const [win, setWin] = useState(null);
  const [words, setWords] = useState([]);
  const [incorrectWord, setIncorrectWord] = useState([]);

  const result = (res) => {
    setWin(res.win);
    setWords(res.words);
    setIncorrectWord(res.incorrectWord);
    if(res.win) nextLevel();
    if(res.win === false) updateLevelAttempts(false);
  }

  return (
    <>
      {win === null 
        ? <ShowAndResponse result={result} /> 
        : <Result win={win} words={words} incorrectWord={incorrectWord} result={result} lastLevelCompleted={lastLevelCompleted} level={level} levelAttempts={levelAttempts} updateLevelAttempts={updateLevelAttempts} />
      }
    </>
  )

}

export default PlayPage
