import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from '../context/SettingsContext'
import { getIAData } from '../services/ia.js'
import Loader from './Loader'

const WordInput = ({ buttonText, paragraph1}) => {

  const { iaData, updateSettings } = useContext(SettingsContext);
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  const updateData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let words = await getIAData(word);
    let number = iaData.number + 1;
    if(words.length > 0) {
      updateSettings("iaData", { words, number });
      navigate('/play');
    } else {
      console.log("Error: ", words);
    }
  }

  if(loading) return <Loader />
  
  return (
    <form className="flex flex-col lg:flex-row gap-2" onSubmit={updateData}>
      <input 
        type="text"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        placeholder={paragraph1}
        className="bg-white border text-gray-700 rounded py-2 px-3 lg:w-3/4 shadow"
        required
      />
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">{buttonText}</button>
    </form>
  )

}

export default WordInput
