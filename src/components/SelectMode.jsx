import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SelectMode = ({ labelContent, animeMode_msg = "" }) => {

  const { mode, updateSettings } = useContext(SettingsContext);

  const handleChange = (e) => updateSettings("mode", e.target.value)

  return (
    <>
      <div className="flex items-center gap-4">
        <label>{labelContent}</label>
        <select value={mode} onChange={handleChange} className="bg-white border rounded border-gray-400 focus:ring-blue-500 focus:border-blue-500 p-2.5">
          <option value="basicMode">Basic</option>
          <option value="animeMode">Anime</option>
          <option value="iaMode">ia</option>
        </select>
      </div>
      { mode === "animeMode" && <p className="text-slate-500 text-sm mt-5">{animeMode_msg}</p> }
    </>
  )
  
}

export default SelectMode
