import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <>
      <h2 className="text-center">Remember them</h2>
      <div className="h-full grid place-content-center">
        <Link className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white hover:text-white" to={"/play"}>Play</Link>
      </div>
    </>
  )

}

export default HomePage
