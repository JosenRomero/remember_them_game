
const Form = ({handleResponse, handleInput, arr}) => {

  return (
    <div className="mt-4">
      <div className="mb-4">Escribe las palabras en el orden correcto</div>
      <form onSubmit={handleResponse}>
        {arr.map((_, i) => {
          return (
            <div className="mb-4" key={i}>
              <input
                type="text"
                name={i}
                onChange={(e) => handleInput(e)}
                placeholder={`Palabra número ${i + 1}`}
                className="bg-white border text-gray-700 rounded py-2 px-3 shadow"
                required
              />
            </div>
          );
        })}
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">
          ver resultado
        </button>
      </form>
    </div>
  )
}

export default Form
