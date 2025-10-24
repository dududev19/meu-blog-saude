import React from 'react';
import WaterCalculator from '../components/WaterCalculator';
import { Link } from 'react-router-dom';

function WaterPage() {
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
      <h1 style={{ color: '#2196f3', marginBottom: '25px' }}>
        💧 Calculadora de Consumo de Água
      </h1>

      {/* Introdução */}
      <p style={{ marginBottom: '25px', color: '#555' }}>
        Descubra a quantidade ideal de água que você deve beber diariamente para manter seu corpo saudável e hidratado.
      </p>

      {/* Calculadora */}
      <div style={{
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <WaterCalculator />
      </div>

      {/* Botão de voltar */}
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '12px 25px',
          backgroundColor: '#2196f3',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0d47a1'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2196f3'}
      >
        ← Voltar para Home
      </Link>
    </div>
  );
}

export default WaterPage;

