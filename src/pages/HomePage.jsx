import { getRandomWords } from '../utils/utils'

const HomePage = () => {

  return (
    <div>
      Remember them 
      {console.log(getRandomWords(3))}
    </div>
  )

}

export default HomePage
