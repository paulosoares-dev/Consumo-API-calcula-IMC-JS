import React, { useState } from "react";

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const calcularIMC = () => {
    if (!peso || !altura) {
      setMensagem("Por favor, preencha peso e altura.");
      return;
    }

    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setMensagem("Abaixo do peso");
    } else if (imcCalculado < 24.9) {
      setMensagem("Peso normal");
    } else if (imcCalculado < 29.9) {
      setMensagem("Sobrepeso");
    } else {
      setMensagem("Obesidade");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Calculadora de IMC</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
          placeholder="Ex: 70"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Altura (m): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(Number(e.target.value))}
          step="0.01"
          placeholder="Ex: 1.75"
        />
      </div>

      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div style={{ marginTop: "20px" }}>
          <p>
            Seu IMC é: <strong>{imc}</strong>
          </p>
          <p>{mensagem}</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;
