import React, { useState } from 'react';

function IMCCalculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const valor = (peso / (altura * altura)).toFixed(2);
      setImc(valor);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && <p>Seu IMC é: {imc}</p>}
    </div>
  );
}

export default IMCCalculator;
