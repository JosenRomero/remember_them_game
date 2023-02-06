import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SettingsContext } from '../context/SettingsContext'
import WordInput from '../components/WordInput'

const HomePage = () => {

  const { t } = useTranslation();
  const { mode } = useContext(SettingsContext);

  return (
    <>
      <div className="h-full grid place-content-center">
        { mode === 'iaMode'
          ? <WordInput />
          : <Link className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/play"}>{ t('buttons.play')}</Link>
        }
      </div>
    </>
  )

}

export default HomePage
