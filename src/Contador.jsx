import { useState } from "react";

function Contador(){
  const[contador, setContador] = useState(0);

  function incrementar(){
    if(contador <10){
      setContador(contador + 1);
    }
  }
  function zerar(){
    setContador(0);
  }
  return(
    <div className="card text-center shadow-sm p-4">
      <h2 className="card-title text-secondary">Contador</h2>

      <p className="display-4 fw-bold my-3">Cliques: {contador}</p>

      {contador === 10 && <p className="alert alert-danger py-2">Limite atingido</p>}

      <div className="d-flex justify-content-center gap-2 mt-2">
        <button onClick={incrementar} disabled={contador>=10}className="btn btn-primary px-4"
          >
            Clicar
          </button>

        <button
         onClick={zerar}className="btn btn-outline-secondary px-4"
         >Zerar
         </button>
      </div>
    </div>
  )
}

export default Contador;​