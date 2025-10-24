import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IMCPage from './pages/IMCPage';
import WaterPage from './pages/WaterPage';
import Noticia1 from './pages/news/Noticia1';
import Noticia2 from './pages/news/Noticia2';
import Noticia3 from './pages/news/Noticia3';
import Noticia4 from './pages/news/Noticia4';
import NoticiaHorta from './pages/news/NoticiaHorta';
import ReceitasFit from './pages/ReceitasFit';
import MoodTracker from './pages/MoodTracker';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
            Blog de Saúde e Bem-Estar
          </h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imc" element={<IMCPage />} />
            <Route path="/agua" element={<WaterPage />} />
            <Route path="/noticia1" element={<Noticia1 />} />
            <Route path="/noticia2" element={<Noticia2 />} />
            <Route path="/noticia3" element={<Noticia3 />} />
            <Route path="/noticia4" element={<Noticia4 />} />
            <Route path="/noticia-horta" element={<NoticiaHorta />} />
            <Route path="/receitas-fit" element={<ReceitasFit />} />
            <Route path="/mood-tracker" element={<MoodTracker />} />
          </Routes>
        </main>

        <footer>
          <p>© 2023 Seu Blog de Saúde</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
