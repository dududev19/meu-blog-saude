import React from 'react';
import { Link } from 'react-router-dom';
import hortaComunitaria from '../../assets/horta_comunitaria.jpg';

function NoticiaHorta() {
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
      
      {/* Imagem principal */}
      <img 
        src={hortaComunitaria} 
        alt="Horta Comunitária" 
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
          marginBottom: '25px'
        }}
      />

      {/* Título */}
      <h1 style={{ color: '#218838', marginBottom: '15px' }}>
        Hortas Comunitárias: Benefícios, Desafios e Impactos na Saúde Mental
      </h1>

      {/* Subtítulo */}
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        Descubra como espaços verdes coletivos transformam comunidades, promovem alimentação saudável e contribuem para o bem-estar mental.
      </p>

      {/* Introdução */}
      <section style={{ marginBottom: '25px' }}>
        <p>
          As hortas comunitárias são espaços coletivos onde pessoas de uma comunidade cultivam alimentos juntos. 
          Além de incentivar a agricultura urbana, essas hortas promovem interação social, educação ambiental e hábitos alimentares mais saudáveis. 
          Elas têm se tornado cada vez mais populares em cidades, mostrando que pequenas áreas verdes podem gerar grandes impactos sociais.
        </p>
      </section>

      {/* Seção 1: Benefícios para a comunidade */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>1. Fortalecimento da comunidade</h2>
        <p>
          Trabalhar juntos em uma horta cria laços sociais e fortalece o senso de pertencimento. 
          Pessoas de diferentes idades e origens compartilham experiências, aprendem umas com as outras e desenvolvem um sentimento de cooperação e solidariedade.
        </p>
      </section>

      {/* Seção 2: Benefícios nutricionais e físicos */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>2. Alimentação saudável e atividade física</h2>
        <p>
          Cultivar alimentos próprios garante acesso a frutas, verduras e legumes frescos, ricos em nutrientes essenciais. 
          Além disso, cuidar da horta envolve atividades físicas leves como cavar, regar e colher, contribuindo para a saúde do corpo.
        </p>
      </section>

      {/* Seção 3: Benefícios para a saúde mental */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>3. Redução do estresse e melhora da saúde mental</h2>
        <p>
          Passar tempo ao ar livre em contato com a natureza tem efeitos comprovados na redução de ansiedade e depressão. 
          Trabalhar na horta estimula a atenção plena (mindfulness) e promove sensação de realização, autoestima e relaxamento. 
          Estudos mostram que pessoas que participam de hortas comunitárias apresentam maior bem-estar emocional e sensação de conexão com o ambiente.
        </p>
      </section>

      {/* Seção 4: Impacto ambiental */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>4. Contribuição ambiental</h2>
        <p>
          Hortas urbanas ajudam a reduzir a pegada ecológica, diminuem o desperdício de alimentos e incentivam práticas sustentáveis como compostagem e economia de água. 
          Elas também promovem biodiversidade, atraindo insetos polinizadores e melhorando a qualidade do ar local.
        </p>
      </section>

      {/* Seção 5: Possíveis desafios */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>5. Desafios e cuidados</h2>
        <p>
          Apesar dos muitos benefícios, hortas comunitárias podem enfrentar desafios como falta de espaço, financiamento limitado, manutenção irregular e conflito de interesses entre participantes. 
          Um planejamento adequado, regras claras e engajamento da comunidade ajudam a superar esses obstáculos.
        </p>
      </section>

      {/* Curiosidades */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#2c7a7b', marginBottom: '10px' }}>Curiosidades</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>A primeira horta comunitária moderna surgiu em Nova York durante a Grande Depressão, como forma de combater a fome.</li>
          <li>Participar de hortas comunitárias pode reduzir sintomas de estresse em até 40%, segundo estudos de psicologia ambiental.</li>
          <li>Além de alimentos, hortas podem incluir plantas medicinais, flores e ervas aromáticas que melhoram o microclima urbano.</li>
        </ul>
      </section>

      {/* Conclusão */}
      <section style={{ marginBottom: '25px' }}>
        <p>
          Hortas comunitárias vão muito além do cultivo de alimentos. Elas promovem saúde física, mental e social, incentivam hábitos sustentáveis e fortalecem comunidades. 
          Participar de uma horta é investir em bem-estar, conexão com a natureza e qualidade de vida.
        </p>
      </section>

      {/* Link para voltar */}
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
        onMouseEnter={e => e.target.style.backgroundColor = '#218838'}
        onMouseLeave={e => e.target.style.backgroundColor = '#218838'}
      >
        ← Voltar para Home
      </Link>
    </div>
  );
}

export default NoticiaHorta;
