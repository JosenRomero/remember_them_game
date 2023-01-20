import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ResultBoard = ({ lengthWords, incorrectWord }) => {

  const { t } = useTranslation();
  const [result, setResult] = useState({totalIncorrectWords: 0, totalCorrectWords: 0});

  useEffect(() => {
    let totalIncorrectWords = incorrectWord.filter((currentValue) => currentValue !== "").length;
    let totalCorrectWords = lengthWords - totalIncorrectWords;
    setResult({totalIncorrectWords, totalCorrectWords})
  }, [])

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5 text-center">
      <p>{ t('result.correctWords') }: {result.totalCorrectWords} </p>
      <p>{ t('result.incorrectWords') }: {result.totalIncorrectWords} </p>
    </div>
  )

}

export default ResultBoard
