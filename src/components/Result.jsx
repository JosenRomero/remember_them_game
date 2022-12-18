import { Link } from 'react-router-dom';

const Result = ({ win, words, incorrectWord, result }) => {

  const goNextGame = () => {
    result({win: null, words: [], incorrectWord: []});
  }

  return (
    <>
      <h2 className="text-center mb-4">Result</h2>
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
      <div className="flex justify-center gap-4 mt-4">
        <Link className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/"}>Home</Link>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white" onClick={goNextGame}>Next Game</button>
      </div>
    </>
  )

}

export default Result
