import { useWords } from '../hooks/useWords'
import ResponseSection from './ResponseSection'

const ShowAndResponse = ({ result }) => {

  const { words, word, showingWords } = useWords();
  
  return (
    <div className="text-center">
      {showingWords && 
        <div>{word}</div>
      }
      {!showingWords &&
        <ResponseSection 
          words={words}
          result={result}
        />
      }
    </div>
  )

}

export default ShowAndResponse
