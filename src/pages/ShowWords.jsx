import { useState } from 'react';
import { useWords } from '../hooks/useWords'
import Form from '../components/Form'
import { checkingResponse } from '../utils/utils'

const ShowWords = () => {
  
  const { words, word, showingWords } = useWords();
  const [response, setResponse] = useState({});

  const handleResponse = (event) => {
    event.preventDefault();
    let { incorrectWord, win } = checkingResponse(words, response);
    console.log(incorrectWord, win)
  }

  const handleInput = ({target: {name, value}}) => {
    setResponse({ ...response, [name] : value })
  }

  return (
    <div className="text-center">
      {showingWords && 
        <div>{word}</div>
      }
      {!showingWords && 
        <Form 
          handleResponse={handleResponse}
          handleInput={handleInput}
          arr={[...Array(words.length - 1)]}
        />
      }
    </div>
  )

}

export default ShowWords