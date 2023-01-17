import { useState, useRef } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import language_translate from '../images/language_translate.svg'

const Dropdown = ({ changeLanguage, language }) => {

  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref?.current, () => setDropdown(false)) // if click out then close dropdown

  const handlerDropdown = () => setDropdown((prev) => !prev)

  return (
    <>
      <img src={language_translate} onClick={handlerDropdown} ref={ref} className="w-8 h-8 cursor-pointer hover:opacity-50" />
      <div className={`${dropdown ? 'block' : 'hidden'} bg-white border rounded border-gray-400 absolute mt-10 py-2 min-w-[5rem]`}>
        <button onClick={changeLanguage} className={`w-full py-2 px-4 block ${language === 'es' ? 'bg-gray-300' : ''} hover:bg-gray-400`} value='es'>Español</button>
        <button onClick={changeLanguage} className={`w-full py-2 px-4 block ${language === 'en' ? 'bg-gray-300' : ''} hover:bg-gray-400`} value='en'>English</button>
      </div>
    </>
  )

}

export default Dropdown
