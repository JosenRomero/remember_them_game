import { Link } from 'react-router-dom';

const Result = ({ win, words, incorrectWord, result, lastLevelCompleted, level }) => {

  const goNextGame = () => {
    result({win: null, words: [], incorrectWord: []});
  }

  return (
    <>
      <div className="text-right">
        Nivel: {level}
        { win && !lastLevelCompleted && <span className="animate-pulse ml-2 font-semibold bg-lime-700 rounded-full text-white p-2"> 1+</span> }
      </div>
      <h2 className="text-center mb-4">Resultado</h2>
      <div>
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
        <h3 className="bg-lime-700 text-white py-2 my-5 text-center">Has completado todos los niveles. ¡Felicidades!</h3>
      )}
      <div className="flex justify-center gap-4 mt-4">

        <Link className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/"}>Inicio</Link>
        
        {win && !lastLevelCompleted && (
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>Siguiente nivel</button>
        )}

        {!win && (
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>Intentar otra vez</button>
        )}

      </div>
    </>
  )

}

export default Result
