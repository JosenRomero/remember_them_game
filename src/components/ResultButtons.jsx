import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResultButtons = ({ win, lastLevelCompleted, result }) => {

  const { t } = useTranslation();

  const goNextGame = () => result({win: null, words: [], incorrectWord: []})
  
  return (
    <div className="flex flex-col sm:flex-row justify-center text-center gap-4 mt-8">

      <Link className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/"}>{ t('buttons.home') }</Link>
        
      { win && !lastLevelCompleted && (
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>{ t('buttons.nextLevel') }</button>
      )}

      { !win && (
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>{ t('buttons.tryAgain') }</button>
      )}

    </div>
  )

}

export default ResultButtons
