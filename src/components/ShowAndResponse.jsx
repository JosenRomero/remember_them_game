import { useWords } from '../hooks/useWords'
import ResponseSection from './ResponseSection'

const ShowAndResponse = ({ result }) => {

  const { words, word, showingWords } = useWords();
  
  return (
    <>
      {showingWords && 
        <div className="h-full grid place-content-center">
          {word}
        </div>
      }
      {!showingWords &&
        <div className="text-center">
          <ResponseSection 
            words={words}
            result={result}
          />
        </div>
      }
    </>
  )

}

export default ShowAndResponse
