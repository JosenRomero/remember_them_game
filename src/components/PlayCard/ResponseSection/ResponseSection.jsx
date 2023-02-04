import { useState } from 'react'
import { useModal } from '../../../hooks/useModal'
import ResponseInput from './ResponseInput'
import ResponseList from './ResponseList'
import ResponseEdit from './ResponseEdit'
import { checkingResponse } from '../../../utils/utils'
import { useTranslation } from 'react-i18next'

const ResponseSection = ({ words, result }) => {

  const { t } = useTranslation();
  const [response, setResponse] = useState([]);
  const [oneResponse, setOneResponse] = useState({ index: "", content: "" });
  const { isOpenModal, openModal, closeModal } = useModal();

  const handleResponse = () => {
    let { incorrectWord, win } = checkingResponse(words, response);
    result({ win, words, incorrectWord });
  }

  const handleInput = (currentResponse) => setResponse([...response, currentResponse])

  const responseId = (index) => {
    setOneResponse({ index: index, content: response[index] });
    openModal();
  }

  const updateResponse = (responseModificated, index) => {
    let newResponses = [...response]
    newResponses[index] = responseModificated;
    setResponse(newResponses);
  }

  const clearOneResponse = () => setOneResponse({ index: "", content: "" });

  return (
    <>
      { response.length < words.length-1
        ? <ResponseInput handleInput={handleInput} />
        : <button onClick={() => handleResponse()} className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">{ t('buttons.check') }</button>
      }
      <ResponseList arr={response} responseId={responseId} />
      { oneResponse.content !== "" && 
        <ResponseEdit isOpenModal={isOpenModal} closeModal={closeModal} oneResponse={oneResponse} updateResponse={updateResponse} clearOneResponse={clearOneResponse} />
      }
    </>
  )

}

export default ResponseSection
