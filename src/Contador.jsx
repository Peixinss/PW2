import { useState } from "react";

function Contador() {​
  const [valor, setValor] = useState(0);​

return (​
<div>​
<p>Contagem: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>​
        Incrementar​
</button>​
      <button onClick={() => setValor(0)}>Zerar</button>​
</div>​
);​
}​

export default Contador;​