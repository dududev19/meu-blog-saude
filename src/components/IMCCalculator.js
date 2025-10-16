import React from 'react';
import IMCCalculator from './components/IMCCalculator';
import WaterCalculator from './components/WaterCalculator';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Blog de Saúde e Bem-Estar</h1>
        <nav>
          <ul>
            <li><a href="#imc">Calculadora de IMC</a></li>
            <li><a href="#agua">Calculadora de Água</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="imc">
          <h2>Calculadora de IMC</h2>
          <IMCCalculator />
        </section>
        <section id="agua">
          <h2>Calculadora de Consumo de Água</h2>
          <WaterCalculator />
        </section>
      </main>
      <footer>
        <p>© 2023 Seu Blog de Saúde</p>
      </footer>
    </div>
  );
}
export default App;