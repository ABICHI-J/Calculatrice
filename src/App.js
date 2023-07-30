import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  // State pour stocker la valeur de l'input
  const [input, setInput] = useState("");

  // Fonction pour ajouter une valeur à l'input
  const addInput = (val) => {
    setInput(input + val);
  };

  // Fonction pour calculer le résultat
  const calculateResult = () => {
    if (input) {
      // Expression régulière pour vérifier les opérateurs consécutifs
      const consecutiveOperatorsRegex = /[+\-*/]{2,}/;
      if (consecutiveOperatorsRegex.test(input)) {
        alert("Veuillez entrer une expression mathématique valide.");
        return;
      }
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className="container-calculate">
        <Screen input={input} />

        <div className="column">
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>

        <div className="column">
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput}>5</Button>
          <Button driveClick={addInput}>6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>

        <div className="column">
          <Button driveClick={addInput}>7</Button>
          <Button driveClick={addInput}>8</Button>
          <Button driveClick={addInput}>9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>

        <div className="column">
          <Button driveClick={calculateResult}>=</Button>
          <Button driveClick={addInput}>0</Button>
          <Button driveClick={addInput}>.</Button>
          <Button driveClick={addInput}>/</Button>
        </div>

        {/* Bouton de réinitialisation */}
        <div className="column">
          <ButtonClear driveClear={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
