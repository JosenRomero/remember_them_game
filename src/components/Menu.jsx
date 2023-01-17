import { useTranslation } from 'react-i18next'
import Dropdown from './Dropdown'
import HowToPlay from './HowToPlay'

const Menu = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value)

  return (
    <nav className="border-b border-gray-200 p-4">
      <div className="md:w-3/4 mx-auto flex items-center md:justify-between gap-x-5">
        <p className="stroke-text-blue text-xl md:text-3xl text-white">Remember them</p>
        <div className="text-zinc-800 flex gap-x-5">
          <Dropdown changeLanguage={changeLanguage} language={i18n.language} />
          <HowToPlay />
        </div>
      </div>
    </nav>
  )

}

export default Menu
