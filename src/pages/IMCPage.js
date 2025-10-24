import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function IMCPage() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const h = parseFloat(altura) / 100; // altura em metros
    const p = parseFloat(peso);

    if (!p || !h) {
      alert('Por favor, insira valores válidos de peso e altura.');
      return;
    }

    const imc = p / (h * h);
    setResultado(imc.toFixed(1));

    // Classificação
    let msg = '';
    if (imc < 18.5) {
      msg = 'Abaixo do peso. É recomendado procurar orientação nutricional e incluir alimentos nutritivos na dieta.';
    } else if (imc < 24.9) {
      msg = 'Peso normal. Mantenha hábitos saudáveis, alimentação equilibrada e prática regular de exercícios.';
    } else if (imc < 29.9) {
      msg = 'Sobrepeso. Procure acompanhamento médico ou nutricional, pratique exercícios físicos e ajuste a alimentação.';
    } else if (imc < 34.9) {
      msg = 'Obesidade grau I. É importante buscar orientação médica para avaliar a saúde e iniciar mudanças no estilo de vida.';
    } else if (imc < 39.9) {
      msg = 'Obesidade grau II. Necessário acompanhamento médico e nutricional, além de prática regular de exercícios e ajustes alimentares.';
    } else {
      msg = 'Obesidade grau III. Procure avaliação médica imediata e siga orientação profissional rigorosa para reduzir riscos à saúde.';
    }
    setMensagem(msg);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#f6fff8',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      lineHeight: '1.6'
    }}>
      {/* Título */}
      <h1 style={{ color: '#218838', marginBottom: '25px' }}>
        🧮 Calculadora de IMC
      </h1>

      {/* Introdução */}
      <p style={{ marginBottom: '25px', color: '#555' }}>
        Descubra seu Índice de Massa Corporal (IMC) e entenda se seu peso está dentro da faixa saudável.
      </p>

      {/* Inputs */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={e => setPeso(e.target.value)}
          style={{
            padding: '10px',
            width: '150px',
            marginRight: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={e => setAltura(e.target.value)}
          style={{
            padding: '10px',
            width: '150px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {/* Botão calcular */}
      <button
        onClick={calcularIMC}
        style={{
          padding: '12px 25px',
          backgroundColor: '#218838',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: '0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2c7a7b'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#218838'}
      >
        Calcular IMC
      </button>

      {/* Resultado */}
      {resultado && (
        <div style={{
          marginTop: '25px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#218838' }}>Seu IMC: {resultado}</h2>
          <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#555' }}>{mensagem}</p>
        </div>
      )}

      {/* Botão voltar */}
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '12px 25px',
          backgroundColor: '#218838',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#218838'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#218838'}
      >
        ← Voltar para Home
      </Link>
    </div>
  );
}

export default IMCPage;


