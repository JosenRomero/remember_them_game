import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const ResponseInput = ({ handleInput }) => {

  const { t } = useTranslation();
  const [currentResponse, setCurrentResponse] = useState("");
  const ref = useRef(null);

  const nextResponse = () => {
    handleInput(currentResponse);
    setCurrentResponse("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    nextResponse();
    ref.current.focus();
  }

  const onKeyDownHandler = (e) => {
    if(e.keyCode === 13 && currentResponse !== "") nextResponse();
  }

  return (
    <div className="mt-4">
      <div className="mb-4">{ t('text.paragraph1') }</div>
      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="response"
            ref={ref}
            onKeyDown={onKeyDownHandler}
            onChange={(e) => setCurrentResponse(e.target.value)}
            value={currentResponse}
            placeholder={ t('text.inputText') }
            className="bg-white dark:bg-gray-700 border dark:border-gray-600 text-gray-700 dark:text-white dark:placeholder-gray-400 rounded py-2 px-3 w-3/4 md:w-1/3 shadow"
            required
          />
          <button className="ml-3 mt-3 bg-sky-500 hover:bg-sky-700 px-5 py-2 font-semibold text-white">{ t('buttons.add') }</button>
        </form>
      </div>
    </div>
  )

}

export default ResponseInput
