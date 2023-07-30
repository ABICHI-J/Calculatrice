import React from "react";
import "../styles/Button.css";

function Button(props) {
  // Vérifie si la valeur est un opérateur
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  // Fonction de gestion du clic sur le bouton
  const handleButtonClick = () => {
    // Vérifie si props.input est défini et différent de null
    if (typeof props.input !== "undefined" && props.input !== null) {
      // Récupère le dernier caractère de l'entrée
      const lastChar = props.input.charAt(props.input.length - 1);
      // Récupère le caractère actuel du bouton
      const currentChar = props.children;

      // Vérifie si les deux caractères sont des opérateurs consécutifs
      if (isOperator(lastChar) && isOperator(currentChar)) {
        // Affiche un message d'erreur
        alert("Veuillez entrer un seul opérateur mathématique à la fois.");
        return; // Sort de la fonction sans ajouter l'opérateur indésirable
      }
    }

    // Appelle la fonction driveClick du parent avec le caractère actuel
    props.driveClick(props.children);
  };

  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()} // Utilise trimEnd() pour supprimer les espaces en fin de chaîne de la classe
      onClick={handleButtonClick}
    >
      {props.children}
    </div>
  );
}

export default Button;
