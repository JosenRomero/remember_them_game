import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Result = ({ win, words, incorrectWord, result, lastLevelCompleted, level }) => {

  const { t } = useTranslation();

  const goNextGame = () => {
    result({win: null, words: [], incorrectWord: []});
  }

  return (
    <>
      <div className="text-right">
        { t('text.level') }: {level}
        { win && !lastLevelCompleted && <span className="animate-pulse ml-2 font-semibold bg-lime-700 rounded-full text-white p-2"> 1+</span> }
      </div>
      <h2 className="text-center mt-5 mb-8">{ t('title.result') }</h2>
      <div className="text-center">
        {incorrectWord.map((word, i) => {
          return (
            <p 
              key={i} 
              className={`font-semibold mb-2 ${word === "" ? "text-lime-700" : "text-red-700 line-through"} `}
            >
              {word === "" ? words[i] : word}
            </p>  
          );
        })}
      </div>
      { lastLevelCompleted && (
        <h3 className="bg-lime-700 text-white py-2 my-5 text-center">{ t('text.endText') }</h3>
      )}
      <div className="flex justify-center gap-4 mt-8">

        <Link className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/"}>{ t('buttons.home') }</Link>
        
        {win && !lastLevelCompleted && (
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>{ t('buttons.nextLevel') }</button>
        )}

        {!win && (
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>{ t('buttons.tryAgain') }</button>
        )}

      </div>
    </>
  )

}

export default Result
