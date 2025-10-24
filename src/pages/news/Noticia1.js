import React from 'react';
import { Link } from 'react-router-dom';
import minhaFoto from '../../assets/exercicio-fisico.jpeg'; // ✅ Caminho corrigido

function Noticia1() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '25px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.7',
      color: '#333',
      backgroundColor: '#f6fff8',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
    }}>

      {/* MENU NO TOPO */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px',
          backgroundColor: '#218838',
          borderRadius: '8px',
          marginBottom: '40px'
        }}
      >
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          🏠 Home
        </Link>
        <Link to="/imc" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          🧮 IMC
        </Link>
        <Link to="/agua" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          💧 Água
        </Link>
        <Link to="/mood-tracker" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          📓 Diário de Humor
        </Link>
        <Link to="/receitas-fit" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          🍎 Receitas Fit
        </Link>
      </nav>

      {/* Título */}
      <h1 style={{ textAlign: 'center', color: '#2c7a7b', marginBottom: '25px' }}>
        Movimente-se! 10 exercícios para manter o corpo saudável e prevenir doenças
      </h1>

      {/* Imagem principal */}
      <img 
        src={minhaFoto}
        alt="Exercício Físico"
        style={{ 
          width: '100%', 
          height: '1000px', 
          objectFit: 'cover', 
          borderRadius: '12px', 
          marginBottom: '25px' 
        }}
      />

      {/* Conteúdo da matéria */}
      <p>
        Manter o corpo ativo não é apenas uma questão estética, mas um investimento na saúde a longo prazo. Estudos recentes apontam que pessoas que praticam atividades físicas regularmente têm <strong>30% menos risco de desenvolver doenças cardiovasculares</strong> e <strong>25% menos chance de apresentar diabetes tipo 2</strong>. Em tempos de rotina corrida e sedentarismo crescente, incluir exercícios na agenda diária tornou-se essencial.
      </p>

      <p>
        Para entender melhor os benefícios da atividade física, conversamos com especialistas que reforçam a importância de diversificar os exercícios. 
        <em>“Não existe um único exercício que resolva tudo. O ideal é combinar atividades aeróbicas, de força, alongamento e equilíbrio para atingir um corpo saudável e prevenir doenças”</em>, afirma Mariana Silva, educadora física com mais de 10 anos de experiência em programas de saúde corporativa.
      </p>

      <h2 style={{ color: '#2c7a7b', marginTop: '30px', marginBottom: '15px' }}>Os 10 Exercícios Essenciais</h2>
      <ol style={{ marginLeft: '20px', marginBottom: '25px' }}>
        <li><strong>Caminhada:</strong> Atividade simples e eficaz, fortalece o coração...</li>
        <li><strong>Corrida leve:</strong> Ideal para aumentar a resistência cardiovascular...</li>
        <li><strong>Alongamentos:</strong> Aumentam a flexibilidade...</li>
        <li><strong>Musculação:</strong> Fortalece músculos e ossos...</li>
        <li><strong>Natação:</strong> Trabalha todos os grupos musculares...</li>
        <li><strong>Ciclismo:</strong> Melhora o condicionamento cardiovascular...</li>
        <li><strong>Yoga:</strong> Combina respiração, equilíbrio e alongamento...</li>
        <li><strong>Pilates:</strong> Focado no fortalecimento do core e na postura...</li>
        <li><strong>Exercícios de equilíbrio:</strong> Pranchas laterais, exercícios em um pé só...</li>
        <li><strong>Atividades funcionais:</strong> Simulam movimentos do dia a dia...</li>
      </ol>

      <p>
        Além dos benefícios físicos, especialistas apontam impactos positivos na saúde mental. 
        <em>“Pessoas que se exercitam regularmente relatam melhor humor, menor estresse e maior capacidade de concentração”</em>, afirma o psicólogo esportivo Dr. Carlos Almeida.
      </p>

      <h2 style={{ color: '#2c7a7b', marginTop: '30px', marginBottom: '15px' }}>Dicas Práticas para Incluir Exercícios na Rotina</h2>
      <p>
        Para quem sente dificuldade de manter uma rotina ativa, pequenas mudanças podem fazer grande diferença: subir escadas em vez de usar o elevador, caminhar durante intervalos de trabalho e alongar-se antes de dormir são medidas simples e eficazes.
      </p>

      <p>
        A mensagem dos especialistas é clara: mover-se é essencial para viver melhor. Com disciplina, escolhas conscientes e prática regular, é possível prevenir doenças, melhorar a disposição e garantir um corpo e mente saudáveis.
      </p>

      {/* Botão de voltar */}
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
      >
       ← Voltar para Home
      </Link>
    </div>
  );
}

export default Noticia1;
