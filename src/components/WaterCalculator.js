import React, { useState } from 'react';

function WaterCalculator() {
  const [peso, setPeso] = useState('');
  const [agua, setAgua] = useState(null);

  const calcularAgua = () => {
    if (peso) {
      const valor = (peso * 35 / 1000).toFixed(2); // litros/dia
      setAgua(valor);
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
      <button onClick={calcularAgua}>Calcular Consumo de Água</button>

      {agua && <p>Você deve beber aproximadamente {agua} litros de água por dia.</p>}
    </div>
  );
}

export default WaterCalculator;

