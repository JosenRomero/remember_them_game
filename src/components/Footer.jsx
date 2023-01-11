import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="text-center p-2 text-zinc-800">
      <p>{ t('footerText') } <a href="https://github.com/JosenRomero" target="_blank">José Romero</a></p>
    </footer>
  )

}

export default Footer
