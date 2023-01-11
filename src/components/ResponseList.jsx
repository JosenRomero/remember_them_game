import { useTranslation } from 'react-i18next'

const ResponseList = ({ arr, responseId }) => {

  const { t } = useTranslation();

  if(arr.length === 0) return <></>

  return (
    <div className="mt-6">
      <div className="mb-4">{ t('text.addedAnswers') }</div>
      {arr.map((response, i) => {
        return (
          <div className="flex mb-2" key={i}>
            <p className="text-start">{ t('text.answer') } {i+1}: {response}</p>
            <button className="bg-slate-500 hover:bg-slate-700 px-3 ml-3 rounded-xl font-semibold text-white" onClick={() => responseId(i)}>{ t('buttons.edit') }</button>
          </div>
        );
      })}
    </div>
  )

}

export default ResponseList
