import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import SelectLanguage from './SelectLanguage'
import HowToPlay from './HowToPlay'

const Menu = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value)

  return (
    <nav className="border-b border-gray-200 p-4">
      <div className="md:w-3/4 mx-auto flex items-center md:justify-between gap-x-5">
        <Link className="stroke-text-blue text-xl md:text-3xl text-white hover:text-slate-100" to={"/"}>Remember them</Link>
        <div className="text-zinc-800 flex gap-x-5">
          <SelectLanguage changeLanguage={changeLanguage} language={i18n.language} />
          <HowToPlay />
        </div>
      </div>
    </nav>
  )

}

export default Menu
