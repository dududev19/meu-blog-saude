import React from 'react';
import { Link } from 'react-router-dom';
import alimentacaoSaudavel from '../../assets/alimentacao-saudavel.jpg';

function Noticia2() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f6fff8',
      borderRadius: '10px',
      lineHeight: '1.6',
      color: '#333'
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

      {/* Imagem principal */}
      <img 
        src={alimentacaoSaudavel} 
        alt="Alimentação equilibrada" 
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
          marginBottom: '25px'
        }}
      />

      {/* Título */}
      <h1 style={{ color: '#7b2cbf', marginBottom: '15px' }}>
        Alimentação equilibrada para mais energia
      </h1>

      {/* Subtítulo */}
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        Descubra quais alimentos ajudam no bem-estar diário, aumentam a disposição e promovem uma vida mais saudável.
      </p>

      {/* Conteúdo da matéria */}
      <section style={{ marginBottom: '25px' }}>
        <p>
          No ritmo acelerado da vida moderna, manter a energia ao longo do dia pode parecer um desafio. 
          Mas a solução está muitas vezes no que colocamos no prato. Uma alimentação equilibrada, rica em nutrientes, 
          não só fornece energia física, mas também melhora o humor, a concentração e a imunidade.
        </p>
      </section>

      {/* Seções nutricionais */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Café da manhã nutritivo</h2>
        <p>Começar o dia com alimentos nutritivos é essencial...</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Lanches saudáveis</h2>
        <p>Pequenas refeições entre o café da manhã e o almoço...</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Almoço equilibrado</h2>
        <p>O almoço é a principal refeição do dia e deve fornecer energia suficiente...</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Hidratação constante</h2>
        <p>Beber água regularmente é fundamental para o bom funcionamento do corpo...</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Jantar leve</h2>
        <p>Prefira refeições leves à noite, com vegetais, proteínas magras...</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Curiosidades</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Alimentos ricos em vitamina C e antioxidantes ajudam a combater o cansaço.</li>
          <li>O consumo de fibras melhora a digestão e prolonga a sensação de saciedade.</li>
          <li>Evitar cafeína excessiva à tarde ajuda a manter o sono reparador.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <p>Uma alimentação equilibrada não precisa ser complicada. Com pequenas mudanças no dia a dia...</p>
      </section>

      {/* Botão de voltar */}
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '8px 16px',
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

export default Noticia2;
