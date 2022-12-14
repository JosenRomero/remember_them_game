import { useState } from 'react';
import { useWords } from '../hooks/useWords'
import Form from '../components/Form'

const ShowWords = () => {
  
  const { words, word, showingWords } = useWords();
  const [response, setResponse] = useState({});

  const handleResponse = (event) => {
    event.preventDefault();
    console.log(response)
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