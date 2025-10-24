import React, { useState } from 'react';

export default function MoodTracker() {
  const [entrada, setEntrada] = useState('');
  const [humor, setHumor] = useState('😄');
  const [historico, setHistorico] = useState([]);
  const [dica, setDica] = useState('');

  const handleAdicionar = () => {
    if (!entrada) return;

    // Adiciona a entrada no histórico
    const novaEntrada = { humor, entrada, data: new Date().toLocaleDateString() };
    setHistorico([novaEntrada, ...historico]);
    setEntrada('');

    // Gera uma dica baseada no humor (simulação simples de IA)
    let sugestao = '';
    if (humor === '😄') sugestao = 'Que bom que está se sentindo bem! Continue mantendo hábitos saudáveis.';
    if (humor === '😐') sugestao = 'Talvez tente fazer uma caminhada ou meditar por 10 minutos.';
    if (humor === '😢') sugestao = 'Hoje parece um dia difícil. Que tal ouvir uma música relaxante ou escrever mais sobre seus sentimentos?';
    
    setDica(sugestao);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#218838', textAlign: 'center', marginBottom: '20px' }}>📓 Diário de Humor</h1>

      {/* Seleção de humor */}
      <div style={{ marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center' }}>
        <button onClick={() => setHumor('😄')} style={{ margin: '0 10px', fontSize: '2rem' }}>😄</button>
        <button onClick={() => setHumor('😐')} style={{ margin: '0 10px', fontSize: '2rem' }}>😐</button>
        <button onClick={() => setHumor('😢')} style={{ margin: '0 10px', fontSize: '2rem' }}>😢</button>
      </div>

      {/* Entrada do usuário */}
      <textarea
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Como você está se sentindo hoje?"
        style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
      />

      <button
        onClick={handleAdicionar}
        style={{ backgroundColor: '#218838', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
      >
        Adicionar
      </button>

      {/* Dica da IA */}
      {dica && (
        <div style={{ marginTop: '20px', background: '#d4edda', color: '#155724', padding: '15px', borderRadius: '8px' }}>
          💡 Dica: {dica}
        </div>
      )}

      {/* Histórico */}
      <h2 style={{ marginTop: '30px', color: '#218838' }}>Histórico</h2>
      {historico.length === 0 ? (
        <p>Nenhuma entrada ainda.</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {historico.map((h, index) => (
            <li key={index} style={{ background: '#f6fff8', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{h.humor}</span>
              <strong>{h.data}:</strong> {h.entrada}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
