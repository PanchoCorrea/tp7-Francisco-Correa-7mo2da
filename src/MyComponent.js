import React from 'react';
import { Button } from 'primereact/button';
import './MyComponent.css'; // Importa el archivo CSS personalizado

const MyComponent = () => {
  return (
    <div className="my-component-container">
      <h1>Framework PrimeReact</h1>
      <Button label="Botón de PrimeReact" />
    </div>
  );
};

export default MyComponent;