import React, { useState } from 'react';
import { InputMask } from 'primereact/inputmask';

import './MyComponent.css'; 

const App = () => {
  return (
    <div className="app-container">
      {/* Contenido de tu aplicación */}
    </div>
  );
};


const TextCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 100) {
      setText(inputText);
    }
  };

  const isOverLimit = text.length > 100;

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>
        Caracteres ingresados: {text.length} / 100
        {isOverLimit && <span style={{ color: 'red' }}> ¡Has alcanzado el límite de caracteres!</span>}
      </p>
    </div>
    
  );
};

export default TextCounter;