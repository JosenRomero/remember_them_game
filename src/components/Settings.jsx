import { useTranslation } from 'react-i18next'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import SelectLanguage from './SelectLanguage'
import LightButton from './LightButton'
import SelectMode from './SelectMode'
import ChangeTheme from './ChangeTheme'

const Settings = () => {

  const { t, i18n } = useTranslation();
  const { isOpenModal, openModal, closeModal } = useModal();

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value)

  return (
    <>
      <LightButton click={openModal} text={ t('settings.title') } />
      <Modal isOpen={isOpenModal} closeModal={closeModal} title={ t('settings.title') }>
        <div className="mt-5 flex flex-col gap-5">
          <ChangeTheme />
          <SelectLanguage changeLanguage={changeLanguage} language={i18n.language} labelContent={ t('settings.selectLanguage') } />
          <SelectMode labelContent={ t('settings.gameMode') } animeMode_msg={ t('settings.messages.animeMode_msg') } />
        </div>
      </Modal>
    </>
  )
  
}

export default Settings
