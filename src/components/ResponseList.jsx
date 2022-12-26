
const ResponseList = ({ arr }) => {

  return (
    <div className="mt-4">
      <div className="mb-4">Respuestas agregadas</div>
      {arr.map((response, i) => {
        return (
          <div key={i}>
            <p className="text-start">Respuesta {i+1}: {response}</p>
          </div>
        );
      })}
    </div>
  )

}

export default ResponseList
