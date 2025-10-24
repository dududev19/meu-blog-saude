import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import exercicioFisico from '../assets/exercicio-fisico.jpeg';
import alimentacaoSaudavel from '../assets/alimentacao-saudavel.jpg';
import meditacao from '../assets/meditacao.jpg';
import saudeMental from '../assets/saude-mental.jpg';
import hortaComunitaria from '../assets/horta_comunitaria.jpg'; // ← import da nova matéria

function Home() {
  const noticiasFisica = [
    {
      image: exercicioFisico,
      title: '10 exercícios para manter o corpo saudável',
      description: 'Descubra como se manter ativo e prevenir doenças físicas.',
      link: '/noticia1'
    },
    {
      image: alimentacaoSaudavel,
      title: 'Alimentação equilibrada para mais energia',
      description: 'Saiba quais alimentos ajudam no bem-estar diário.',
      link: '/noticia2'
    }
  ];

  const noticiasMental = [
    {
      image: meditacao,
      title: '5 técnicas para reduzir o estresse',
      description: 'Aprenda a controlar a ansiedade e melhorar a qualidade de vida.',
      link: '/noticia3'
    },
    {
      image: saudeMental,
      title: 'A importância da saúde mental',
      description: 'Como cuidar da mente pode refletir no corpo e no dia a dia.',
      link: '/noticia4'
    }
  ];

  const noticiasHorta = [
    {
      image: hortaComunitaria,
      title: 'Hortas Comunitárias: benefícios e impacto na saúde mental',
      description: 'Descubra os efeitos positivos e desafios das hortas comunitárias.',
      link: '/noticia-horta' // ← rota da matéria completa
    }
  ];

  return (
    <div
      style={{
        backgroundColor: '#f6fff8',
        padding: '40px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
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

      {/* TÍTULO */}
      <h2
        style={{
          textAlign: 'center',
          color: '#2c7a7b',
          fontSize: '2rem',
          marginBottom: '30px'
        }}
      >
        🩺 Últimas notícias de Saúde e Bem-Estar
      </h2>

      {/* SAÚDE FÍSICA */}
      <section>
        <h3
          style={{
            color: '#218838',
            marginBottom: '15px',
            fontSize: '1.4rem'
          }}
        >
          💪 Saúde Física
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}
        >
          {noticiasFisica.map((noticia, index) => (
            <NewsCard key={index} {...noticia} />
          ))}
        </div>
      </section>

      {/* SAÚDE MENTAL */}
      <section style={{ marginTop: '50px' }}>
        <h3
          style={{
            color: '#7b2cbf',
            marginBottom: '15px',
            fontSize: '1.4rem'
          }}
        >
          🧘 Saúde Mental
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}
        >
          {noticiasMental.map((noticia, index) => (
            <NewsCard key={index} {...noticia} />
          ))}
        </div>
      </section>

      {/* HORTAS COMUNITÁRIAS */}
      <section style={{ marginTop: '50px' }}>
        <h3
          style={{
            color: '#2c7a7b',
            marginBottom: '15px',
            fontSize: '1.4rem'
          }}
        >
          🌱 Hortas Comunitárias
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}
        >
          {noticiasHorta.map((noticia, index) => (
            <NewsCard key={index} {...noticia} />
          ))}
        </div>
      </section>

      {/* RECEITAS FIT */}
      <section style={{ marginTop: '60px' }}>
        <h3
          style={{
            color: '#ff7043',
            fontSize: '1.4rem',
            marginBottom: '10px'
          }}
        >
          🍎 Receitas Fit e Econômicas
        </h3>
        <Link
          to="/receitas-fit"
          style={{
            color: '#2c7a7b',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          • Ver Receitas Fit
        </Link>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          backgroundColor: '#2c7a7b',
          color: '#fff',
          textAlign: 'center',
          marginTop: '60px',
          padding: '15px',
          borderRadius: '8px'
        }}
      >
        © {new Date().getFullYear()} Seu Blog de Saúde — Cuidando do seu corpo e mente 💚
      </footer>
    </div>
  );
}

export default Home;
