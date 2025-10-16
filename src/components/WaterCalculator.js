import React, { useState } from 'react';
function WaterCalculator() {
  const [peso, setPeso] = useState('');
  const [atividade, setAtividade] = useState('moderada');
  const [aguaDiaria, setAguaDiaria] = useState(null);
  const calcularAgua = () => {
    if (peso) {
      let baseAgua = peso * 0.03;
      if (atividade === 'moderada') baseAgua *= 1.2;
      if (atividade === 'alta') baseAgua *= 1.5;
      setAguaDiaria(baseAgua.toFixed(2));
    } else {
      alert('Por favor, insira o peso.');
    }
  };
  return (
    <div>
      <input type="number" placeholder="Peso (kg)" onChange={(e) => setPeso(e.target.value)} />
      <select onChange={(e) => setAtividade(e.target.value)}>
        <option value="baixa">Atividade Baixa</option>
        <option value="moderada">Atividade Moderada</option>
        <option value="alta">Atividade Alta</option>
      </select>
      <button onClick={calcularAgua}>Calcular Consumo de Água</button>
      {aguaDiaria && <p>Você deve beber aproximadamente {aguaDiaria} litros por dia.</p>}
    </div>
  );
}
export default WaterCalculator;