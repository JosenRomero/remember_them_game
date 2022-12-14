import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="text-center">
      <h2 className="mb-4">Remember them</h2>
      <Link className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/play"}>Play</Link>
    </div>
  )

}

export default HomePage
