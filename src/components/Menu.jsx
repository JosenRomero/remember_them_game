import { Link } from 'react-router-dom';
import HowToPlay from './HowToPlay'
import Settings from './Settings'

const Menu = () => {

  return (
    <nav className="border-b border-gray-200 dark:border-zinc-500 p-4">
      <div className="md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3">
        <Link className="stroke-text-blue text-xl md:text-3xl text-white hover:text-slate-100" to={"/"}>Remember them</Link>
        <div className="text-zinc-800 dark:text-white flex gap-x-3">
          <Settings />
          <HowToPlay />
        </div>
      </div>
    </nav>
  )

}

export default Menu
