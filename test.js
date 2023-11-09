import React, { useState } from "react";

const Multiplicador = () => {
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const multiplicarPor4 = () => {
    const respostaMultiplicacao = valor * 4;
    setResultado = respostaMultiplicacao;
  };

  const handleInputValor = (valorDigitado) => {
    setValor = valorDigitado;
  };

  return (
    <div>
      <h2>Multiplicador por 4</h2>
      <Input
        type="number"
        maxLength="3"
        value={valor}
        onChange={(event) => handleInputValor(event.target.value)}
      />
      <button onClick={multiplicarPor4}>Multiplica x4</button>
      <p>Resultado: </p>
    </div>
  );
};

export default Multiplicador;