import { useTranslation } from 'react-i18next'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import SelectLanguage from './SelectLanguage'

const Settings = () => {

  const { t, i18n } = useTranslation();
  const { isOpenModal, openModal, closeModal } = useModal();

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value)

  return (
    <>
      <button onClick={openModal} className="hover:opacity-50">{ t('settings.title') }</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal} title={ t('settings.title') }>
        <div className="mt-5 flex flex-col gap-5">
          <SelectLanguage changeLanguage={changeLanguage} language={i18n.language} labelContent={ t('settings.selectLanguage') } />
        </div>
      </Modal>
    </>
  )
  
}

export default Settings
