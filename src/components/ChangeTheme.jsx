import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from '../hooks/useTheme'

const ChangeTheme = ({ labelContent }) => {

  const { darkTheme, updateTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <p>{labelContent}</p>
      <button
        onClick={() => updateTheme(!darkTheme)}
        className="transition-all hover:-translate-y-0.5"
      >
        { darkTheme ? <BiSun size={22} /> : <BiMoon size={22} />}
      </button>
    </div>
  )

}

export default ChangeTheme
