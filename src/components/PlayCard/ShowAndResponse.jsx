import { useWords } from '../../hooks/useWords'
import ResponseSection from './ResponseSection/ResponseSection'

const ShowAndResponse = ({ result }) => {

  const { words, word, showingWords } = useWords();
  
  return (
    <>
      {showingWords && 
        <div className="h-full grid place-content-center text-3xl">
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
