import { useTranslation } from 'react-i18next'
import { useModal } from '../hooks/useModal'
import { useNeo } from '../hooks/useNeo'
import Modal from './Modal'
import ListItem from './ListItem'
import LightButton from './LightButton'

const HowToPlay = () => {

  const { t } = useTranslation();
  const { isOpenModal, openModal, closeModal } = useModal();

  useNeo(() => openModal())

  return (
    <>
      <LightButton click={openModal} text={ t('howToPlay.title') } />
      <Modal isOpen={isOpenModal} closeModal={closeModal} title={ t('howToPlay.title') }>
        <div className="mt-5 flex flex-col gap-5">
          {[...Array(3)].map((_, i) => {
            return <ListItem key={i} num={i+1} text={ t(`howToPlay.paragraph${i+1}`) } />
          })}
        </div>
      </Modal>
    </>
  )

}

export default HowToPlay
