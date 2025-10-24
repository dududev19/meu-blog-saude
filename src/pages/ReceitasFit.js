import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Adicionado para navegação
import panqueca_banana from '../assets/panqueca_banana.jpg';
import arroz_colorido from '../assets/arroz_colorido.jpg';
import omelete_legumes from '../assets/omelete_legumes.jpg';
import sopa_legumes from '../assets/sopa_legumes.jpg';
import tapioca_frango from '../assets/tapioca_frango.jpg';
import salada_refrescante from '../assets/salada_refrescante.jpg';
import pure_batata_doce from '../assets/pure_batata_doce.jpg';
import sanduiche_natural from '../assets/sanduiche_natural.jpg';
import bolinho_chuva from '../assets/bolinho_chuva.jpg';
import mingau_aveia from '../assets/mingau_aveia.jpg';

// ✅ MENU SUPERIOR
function MenuSuperior() {
  return (
    <nav
      style={{
        backgroundColor: '#218838',
        padding: '12px 0',
        textAlign: 'center',
        boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'inline-flex',
          gap: '25px',
          alignItems: 'center',
        }}
      >
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/imc" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            🧮 IMC
          </Link>
        </li>
        <li>
          <Link to="/agua" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            💧 Água
          </Link>
        </li>
        <li>
          <Link to="/humor" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            📓 Diário de Humor
          </Link>
        </li>
        <li
          style={{
            position: 'relative',
          }}
        >
          <span
            style={{
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            🍽️ Receitas
          </span>
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#28a745',
              listStyle: 'none',
              padding: '8px 0',
              margin: 0,
              borderRadius: '8px',
              display: 'none',
            }}
            className="submenu"
          >
            <li>
              <Link
                to="/receitas-fit"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  display: 'block',
                }}
              >
                🍎 Receitas Fit
              </Link>
            </li>
            <li>
              <Link
                to="/receitas-saudaveis"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  display: 'block',
                }}
              >
                🍛 Receitas Saudáveis
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Script CSS interno do submenu */}
      <style>
        {`
          nav ul li:hover .submenu {
            display: block;
          }
          nav ul li:hover span {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}

const receitas = [
  // 🍎 Seu array de receitas permanece idêntico
  {
    id: 1,
    nome: 'Panqueca de Banana e Aveia',
    imagem: panqueca_banana,
    descricao: 'Uma opção rápida, saudável e barata para o café da manhã.',
    preparo: [
      'Amasse 1 banana madura em uma tigela.',
      'Adicione 2 colheres de sopa de aveia e 1 ovo.',
      'Misture bem até formar uma massa homogênea.',
      'Aqueça uma frigideira antiaderente e asse dos dois lados até dourar.',
    ],
    custo: 'Baixo custo',
    tempo: '10 min',
  },
  {
    id: 2,
    nome: 'Arroz Colorido com Legumes',
    imagem: arroz_colorido,
    descricao: 'Um prato nutritivo e colorido que aproveita sobras de legumes.',
    preparo: [
      'Refogue cebola e alho em um pouco de óleo.',
      'Adicione legumes picados (cenoura, ervilha, milho, pimentão).',
      'Misture com arroz cozido e tempere com sal e cheiro-verde.',
    ],
    custo: 'Econômico',
    tempo: '20 min',
  },
  {
    id: 3,
    nome: 'Omelete de Legumes',
    imagem: omelete_legumes,
    descricao: 'Uma refeição leve, rápida e rica em proteínas.',
    preparo: [
      'Bata 2 ovos com sal e temperos a gosto.',
      'Adicione legumes picados como cenoura, tomate e cebola.',
      'Despeje em uma frigideira e asse dos dois lados até dourar.',
    ],
    custo: 'Baixo custo',
    tempo: '10 min',
  },
  {
    id: 4,
    nome: 'Sopa de Legumes',
    imagem: sopa_legumes,
    descricao: 'Ideal para dias frios, nutritiva e barata.',
    preparo: [
      'Pique batata, cenoura, chuchu e abóbora.',
      'Refogue alho e cebola e adicione os legumes.',
      'Cubra com água e cozinhe até ficarem macios.',
      'Amasse um pouco e sirva quente.',
    ],
    custo: 'Baixo custo',
    tempo: '25 min',
  },
  {
    id: 5,
    nome: 'Tapioca com Frango Desfiado',
    imagem: tapioca_frango,
    descricao: 'Fonte de energia e proteína, fácil de preparar.',
    preparo: [
      'Hidrate 3 colheres de goma de tapioca.',
      'Espalhe na frigideira até firmar.',
      'Adicione frango desfiado temperado e dobre a tapioca.',
    ],
    custo: 'Médio',
    tempo: '15 min',
  },
  {
    id: 6,
    nome: 'Salada Refrescante',
    imagem: salada_refrescante,
    descricao: 'Rica em fibras e vitaminas, perfeita para o almoço.',
    preparo: [
      'Pique alface, tomate, pepino e cenoura ralada.',
      'Tempere com azeite, sal e limão.',
      'Sirva gelada com arroz e feijão.',
    ],
    custo: 'Baixo custo',
    tempo: '10 min',
  },
  {
    id: 7,
    nome: 'Purê de Batata Doce',
    imagem: pure_batata_doce,
    descricao: 'Uma alternativa saudável ao purê tradicional.',
    preparo: [
      'Cozinhe 2 batatas-doces até ficarem macias.',
      'Amasse com um garfo e adicione uma pitada de sal.',
      'Misture um fio de azeite para dar cremosidade.',
    ],
    custo: 'Baixo custo',
    tempo: '20 min',
  },
  {
    id: 8,
    nome: 'Sanduíche Natural Econômico',
    imagem: sanduiche_natural,
    descricao: 'Perfeito para o lanche ou uma refeição leve.',
    preparo: [
      'Pegue duas fatias de pão integral.',
      'Adicione frango desfiado, alface, tomate e cenoura ralada.',
      'Tempere com limão e monte o sanduíche.',
    ],
    custo: 'Econômico',
    tempo: '10 min',
  },
  {
    id: 9,
    nome: 'Bolinho de Chuva Fit',
    imagem: bolinho_chuva,
    descricao: 'Uma versão mais leve do tradicional bolinho de chuva.',
    preparo: [
      'Misture 1 banana amassada, 1 ovo e 2 colheres de aveia.',
      'Faça bolinhas e asse no forno por 15 minutos.',
      'Polvilhe canela por cima e sirva.',
    ],
    custo: 'Baixo custo',
    tempo: '20 min',
  },
  {
    id: 10,
    nome: 'Mingau de Aveia com Maçã',
    imagem: mingau_aveia,
    zoom: 0.8,
    descricao: 'Simples, nutritivo e ótimo para o café da manhã.',
    preparo: [
      'Em uma panela, coloque 1 xícara de leite e 2 colheres de aveia.',
      'Adicione pedaços de maçã e cozinhe até engrossar.',
      'Finalize com canela a gosto.',
    ],
    custo: 'Baixo custo',
    tempo: '10 min',
  },
];

export default function ReceitasFit() {
  const [selecionada, setSelecionada] = useState(null);

  return (
    <>
      {/* ✅ MENU ADICIONADO */}
      <MenuSuperior />

      {/* ✅ SEU CÓDIGO ORIGINAL COMEÇA AQUI */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: 'auto' }}>
        <h1 style={{ color: '#218838', marginBottom: '20px', textAlign: 'center' }}>
          🍎 Receitas Fit e Econômicas
        </h1>
        <p style={{ color: '#555', marginBottom: '30px', textAlign: 'center' }}>
          Opções simples, saudáveis e acessíveis para o seu dia a dia.
        </p>

        {!selecionada ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px',
            }}
          >
            {receitas.map((r) => (
              <div
                key={r.id}
                onClick={() => setSelecionada(r)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                  position: 'relative',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  background: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
                }}
              >
                {/* Imagem no topo */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={r.imagem}
                    alt={r.nome}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.6)',
                      color: '#fff',
                      padding: '5px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                    }}
                  >
                    ⏱ {r.tempo}
                  </div>
                </div>

                <div style={{ padding: '15px' }}>
                  <h3 style={{ color: '#218838', marginBottom: '10px' }}>{r.nome}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{r.descricao}</p>
                  <span
                    style={{
                      display: 'inline-block',
                      background: '#d4edda',
                      color: '#155724',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '0.8rem',
                    }}
                  >
                    {r.custo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelecionada(null)}
              style={{
                background: '#218838',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 15px',
                marginBottom: '20px',
                cursor: 'pointer',
              }}
            >
              ← Voltar
            </button>
            <h2 style={{ color: '#218838', marginBottom: '20px' }}>{selecionada.nome}</h2>
            <img
              src={selecionada.imagem}
              alt={selecionada.nome}
              style={{
                width: '100%',
                borderRadius: '12px',
                marginBottom: '20px',
                objectFit: 'cover',
                maxHeight: '400px',
              }}
            />
            <h3 style={{ marginBottom: '10px' }}>Modo de Preparo:</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {selecionada.preparo.map((passo, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  {passo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
