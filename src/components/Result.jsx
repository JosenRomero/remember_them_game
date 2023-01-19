import { useTranslation } from 'react-i18next'
import ResultWordsList from './ResultWordsList'
import ResultButtons from './ResultButtons'

const Result = ({ win, words, incorrectWord, result, lastLevelCompleted, level }) => {

  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-center mt-5 mb-8 text-3xl">{ t('text.level') } {win ? level-1 : level}. { win ? t('result.complete') : t('result.failed') }</h2>
      <ResultWordsList incorrectWord={incorrectWord} words={words} />
      { lastLevelCompleted && (
        <h3 className="bg-lime-700 text-white py-2 my-5 text-center">{ t('text.endText') }</h3>
      )}
      <ResultButtons win={win} lastLevelCompleted={lastLevelCompleted} result={result} />
    </>
  )

}

export default Result
