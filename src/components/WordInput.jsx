import { useState } from 'react'
import { getIAData } from '../services/ia.js'
import Loader from './Loader'

const WordInput = () => {

  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  const updateData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let words = await getIAData(word);
    console.log(words);
  }

  if(loading) return <Loader />
  
  return (
    <form className="flex gap-2" onSubmit={updateData}>
      <input 
        type="text"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        placeholder="Escribe una palabra"
        className="bg-white border text-gray-700 rounded py-2 px-3 w-3/4 shadow"
        required
      />
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">Play</button>
    </form>
  )

}

export default WordInput
