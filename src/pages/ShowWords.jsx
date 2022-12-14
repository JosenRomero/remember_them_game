import { useWords } from '../hooks/useWords'

const ShowWords = () => {
  
  const { word, showingWords } = useWords();

  return (
    <div className="text-center">
      {showingWords && <div>{word}</div>}
      {!showingWords && <div>game over</div>}
    </div>
  )

}

export default ShowWords