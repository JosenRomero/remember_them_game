import { useState, useEffect } from 'react';
import Modal from './Modal'

const ResponseEdit = ({ isOpenModal, closeModal, oneResponse, updateResponse, clearOneResponse }) => {

  const [responseModificated, setResponseModificated] = useState("");

  useEffect(() => setResponseModificated(oneResponse.content), [])

  const saveResponse = () => {
    if(responseModificated !== "") {
      updateResponse(responseModificated, oneResponse.index);
      clear();
    }
  }

  const clear = () => {
    setResponseModificated("");
    closeModal();
    clearOneResponse();
  }

  return (
    <Modal isOpen={isOpenModal} closeModal={clear} title={"Editar Respuesta"}>
      <div className="mt-5">
        <input 
          type="text"
          onChange={(e) => setResponseModificated(e.target.value)}
          value={responseModificated}
          className="bg-white border text-gray-700 rounded py-2 px-3 w-3/4 shadow"
        />
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <button onClick={() => clear()} className="bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-xl font-semibold text-white">Cancelar</button>
        <button onClick={() => saveResponse()} className="bg-sky-500 hover:bg-sky-700 px-5 py-2 rounded-xl font-semibold text-white">Guardar</button>
      </div>
    </Modal>
  )

}

export default ResponseEdit
