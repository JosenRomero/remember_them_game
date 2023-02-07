import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from '../context/SettingsContext'
import { getIAData } from '../services/ia.js'
import Loader from './Loader'

const WordInput = ({ buttonText, paragraph1, errorText }) => {

  const { iaData, updateSettings } = useContext(SettingsContext);
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let words = await getIAData(word);
    let number = iaData.number + 1;
    if(words.length > 0) {
      updateSettings("iaData", { words, number });
      navigate('/play');
    } else {
      setLoading(false);
      setError(errorText);
    }
  }

  const handleInput = (e) => {
    if(error !== "") setError("")
    setWord(e.target.value);
  }

  if(loading) return <Loader />
  
  return (
    <>
      { error !== "" && <p className="text-red-500 mb-4">{error}</p>}
      <form className="flex flex-col lg:flex-row gap-2" onSubmit={updateData}>
        <input 
          type="text"
          onChange={handleInput}
          value={word}
          placeholder={paragraph1}
          className="bg-white border text-gray-700 rounded py-2 px-3 lg:w-3/4 shadow"
          required
        />
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">{buttonText}</button>
      </form>
    </>
  )

}

export default WordInput
