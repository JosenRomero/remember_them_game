import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from '../hooks/useTheme'

const ChangeTheme = () => {

  const { darkTheme, updateTheme } = useTheme();

  return (
    <button
      onClick={() => updateTheme(!darkTheme)}
      className="transition-all hover:-translate-y-0.5"
    >
      { darkTheme ? <BiSun size={22} /> : <BiMoon size={22} />}
    </button>
  )

}

export default ChangeTheme
