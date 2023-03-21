import { useState } from "react";
import './components/main.css'
import './components/global.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calculaImc = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso')
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      setClassificacao('Obesidade grau I');
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III')
    }
  }

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="title">Calculadora de IMC</h1>
        </header>
        <div className="form">
          <span className="imc"><strong>IMC</strong> Calculo do Índice de Massa Corporal</span>
          <label className="label" htmlFor="altura">Altura (cm)</label>
          <input className="input" type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
          <label className="label" htmlFor="peso">Peso (kg)</label>
          <input className="input" type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
          <div className="indiceCorporal">
            <label htmlFor="imc">IMC:</label>
            <span id="imc">{imc}</span>
          </div>
          <div className="classificacao">
            <label htmlFor="classificacao">Classificação:</label>
            <span id="classificacao">{classificacao}</span>
          </div>
          <button className="button" onClick={calculaImc}>Calcular</button>
        </div>
      </div>
    </>
  )
}

export default App;