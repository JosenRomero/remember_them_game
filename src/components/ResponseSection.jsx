import { useState } from 'react';
import ResponseInput from './ResponseInput'
import ResponseList from './ResponseList'
import { checkingResponse } from '../utils/utils'

const ResponseSection = ({ words, result }) => {

  const [response, setResponse] = useState([]);

  const handleResponse = () => {
    let { incorrectWord, win } = checkingResponse(words, response);
    result({ win, words, incorrectWord });
  }

  const handleInput = (currentResponse) => setResponse([...response, currentResponse])

  return (
    <>
      { response.length < words.length-1
        ? <ResponseInput handleInput={handleInput} />
        : <button onClick={() => handleResponse()} className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">ver resultado</button>
      }
      <ResponseList arr={response} />
    </>
  )

}

export default ResponseSection
