
const ResultWordsList = ({ incorrectWord, words}) => {

  return (
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
  )

}

export default ResultWordsList
