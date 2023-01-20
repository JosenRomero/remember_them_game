
const ResultWordsList = ({ incorrectWord, words, title }) => {

  return (
    <table className="table-auto mx-auto w-[90%] md:w-[50%]">
      <thead>
        <tr className="border border-slate-300">
          <th className="py-2 px-3">{ title }</th>
        </tr>
      </thead>
      <tbody>
        {incorrectWord.map((word, i) => {
          return (
            <tr 
              key={i} 
              className={`font-semibold border border-slate-300 ${word === "" ? "text-lime-700" : "text-red-700 line-through"} `}
            >
              <td className="py-2 px-3 break-all">{word === "" ? words[i] : word}</td>
            </tr>  
          );
        })}
      </tbody>
    </table>
  )

}

export default ResultWordsList
