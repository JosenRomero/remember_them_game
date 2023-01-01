
const ResponseList = ({ arr, responseId }) => {

  if(arr.length === 0) return <></>

  return (
    <div className="mt-6">
      <div className="mb-4">Respuestas agregadas</div>
      {arr.map((response, i) => {
        return (
          <div className="flex mb-2" key={i}>
            <p className="text-start">Respuesta {i+1}: {response}</p>
            <button className="bg-slate-500 hover:bg-slate-700 px-3 ml-3 rounded-xl font-semibold text-white" onClick={() => responseId(i)}>editar</button>
          </div>
        );
      })}
    </div>
  )

}

export default ResponseList
