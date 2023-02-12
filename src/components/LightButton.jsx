
const LightButton = ({ click, text}) => {

  return (
    <button 
      onClick={click}
      className="bg-white dark:bg-zinc-800 hover:bg-gray-100 hover:dark:bg-zinc-700 border border-gray-300 dark:border-zinc-500 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5"
    >{ text }</button>
  )

}

export default LightButton
