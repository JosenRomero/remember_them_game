import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="h-full grid place-content-center">
        <Link className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/play"}>{ t('buttons.play')}</Link>
      </div>
    </>
  )

}

export default HomePage
