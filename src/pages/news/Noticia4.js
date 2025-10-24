import React from 'react';
import { Link } from 'react-router-dom';
import saudeMental from '../../assets/saude-mental.jpg';

function Noticia4() {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f6fff8',
        borderRadius: '10px',
        lineHeight: '1.6',
        color: '#333',
      }}
    >
      {/* MENU NO TOPO */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          padding: '20px',
          backgroundColor: '#218838',
          borderRadius: '8px',
          marginBottom: '40px',
        }}
      >
        {[
          { to: '/', label: '🏠 Home' },
          { to: '/imc', label: '🧮 IMC' },
          { to: '/agua', label: '💧 Água' },
          { to: '/mood-tracker', label: '📓 Diário de Humor' },
          { to: '/receitas-fit', label: '🍎 Receitas Fit' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: '0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* IMAGEM PRINCIPAL */}
      <img
        src={saudeMental}
        alt="Saúde Mental"
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
          marginBottom: '25px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* TÍTULO */}
      <h1 style={{ color: '#7b2cbf', marginBottom: '15px' }}>
        A importância da saúde mental
      </h1>

      {/* SUBTÍTULO */}
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        Como cuidar da mente pode refletir no corpo, no bem-estar e na qualidade de vida diária.
      </p>

      {/* CONTEÚDO PRINCIPAL */}
      <section style={{ marginBottom: '25px' }}>
        <p>
          A saúde mental é tão importante quanto a saúde física. O equilíbrio emocional influencia diretamente o comportamento,
          a produtividade, os relacionamentos e até a imunidade do corpo. Reconhecer a importância de cuidar da mente é o primeiro passo para uma vida mais saudável.
        </p>
      </section>

      {/* SEÇÕES */}
      {[
        {
          titulo: '1. Identificando sinais de alerta',
          texto:
            'Sintomas como ansiedade excessiva, tristeza persistente, irritabilidade, insônia ou dificuldade de concentração podem indicar que algo não está bem. Ficar atento a esses sinais ajuda a buscar ajuda antes que os problemas se agravem.',
        },
        {
          titulo: '2. Praticando autocuidado',
          texto:
            'Dedicar tempo para si mesmo é fundamental. Isso inclui manter hobbies, praticar exercícios físicos, ter momentos de lazer, dormir bem e alimentar-se de forma saudável. O autocuidado fortalece a mente e ajuda a reduzir o impacto do estresse diário.',
        },
        {
          titulo: '3. Técnicas de relaxamento e mindfulness',
          texto:
            'Práticas como meditação, respiração profunda e yoga auxiliam no controle da ansiedade e promovem sensação de calma. Reservar alguns minutos do dia para essas atividades traz benefícios significativos para a saúde mental.',
        },
        {
          titulo: '4. Conexões sociais',
          texto:
            'Manter relações saudáveis com família, amigos e colegas ajuda a reduzir o estresse e fortalece o suporte emocional. Conversar sobre sentimentos e experiências contribui para a prevenção de transtornos mentais.',
        },
        {
          titulo: '5. Buscando apoio profissional',
          texto:
            'Psicólogos, psiquiatras e terapeutas oferecem orientação especializada para lidar com questões emocionais e comportamentais. Buscar ajuda não é sinal de fraqueza, mas sim um passo importante para manter a saúde mental em equilíbrio.',
        },
      ].map((secao, index) => (
        <section key={index} style={{ marginBottom: '25px' }}>
          <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>{secao.titulo}</h2>
          <p>{secao.texto}</p>
        </section>
      ))}

      {/* CURIOSIDADES */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Curiosidades</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Pessoas com boa saúde mental têm maior resistência a doenças físicas.</li>
          <li>Praticar gratidão diariamente melhora o humor e reduz sintomas de depressão.</li>
          <li>Atividades físicas regulares liberam endorfina, hormônio responsável pela sensação de bem-estar.</li>
        </ul>
      </section>

      {/* CONCLUSÃO */}
      <section style={{ marginBottom: '25px' }}>
        <p>
          Cuidar da mente é essencial para viver de forma plena e saudável.
          Integrar hábitos de autocuidado, manter relações sociais saudáveis e buscar apoio profissional quando necessário
          são passos fundamentais para proteger a saúde mental e refletir positivamente na saúde física.
        </p>
      </section>

      {/* BOTÃO DE VOLTAR */}
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 18px',
          backgroundColor: '#218838',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#18632a')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#218838')}
      >
        ← Voltar para Home
      </Link>
    </div>
  );
}

export default Noticia4;
