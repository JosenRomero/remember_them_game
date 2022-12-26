import { useState } from 'react';

const ResponseInput = ({ handleInput }) => {

  const [currentResponse, setCurrentResponse] = useState("");

  const nextResponse = () => {
    handleInput(currentResponse);
    setCurrentResponse("");
  }

  return (
    <div className="mt-4">
      <div className="mb-4">Escribe las palabras en el orden correcto</div>
      <div className="mb-4">
        <input
          type="text"
          name="response"
          onChange={(e) => setCurrentResponse(e.target.value)}
          value={currentResponse}
          placeholder={`Agregar la palabra`}
          className="bg-white border text-gray-700 rounded py-2 px-3 shadow"
        />
        <button onClick={() => nextResponse()} className="ml-3 bg-sky-500 hover:bg-sky-700 px-5 py-2 font-semibold text-white">Add</button>
      </div>
    </div>
  )

}

export default ResponseInput
