
const SelectLanguage = ({ changeLanguage, language, labelContent }) => {

  return (
    <div className="flex items-center gap-4">
      <label>{labelContent}</label>
      <select value={language} onChange={changeLanguage} className="bg-white dark:bg-gray-700 border rounded border-gray-400 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 p-2.5">
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  )

}

export default SelectLanguage
