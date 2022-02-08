// dependencies
import React from 'react';
// local files
import Button from './components/Button/Button';

const App = () => {
  return (
    <main className="App">
      <a href="https://www.google.com" alt="Lawrence Yoon's profile">
        Lawrence Yoon
      </a>
      <div className="buttons">
        <Button buttonText="Click me!"></Button>
      </div>
    </main>
  );
};

export default App;
