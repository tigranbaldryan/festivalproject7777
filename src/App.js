import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu/Menu';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
