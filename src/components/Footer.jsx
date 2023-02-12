import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="text-center p-2 [&_*]:text-zinc-800 [&_*]:dark:text-white">
      <p>{ t('footerText') } <a className="!text-opacity-70 hover:underline hover:text-zinc-800" href="https://github.com/JosenRomero" target="_blank">José Romero</a></p>
    </footer>
  )

}

export default Footer
