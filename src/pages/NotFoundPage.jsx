import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {

  const { t } = useTranslation();

  return (
    <div>{ t('title.notFoundPage') }</div>
  )

}

export default NotFoundPage
