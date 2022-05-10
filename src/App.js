import React from 'react';
import './App.css';

import Button from './Components/Button';
import Search from './Components/Search';
import Header from './Layout/Header';

const App = () => {
  return (
    <main className='main__container'>
      <Header />
      <Search />
      <Button name="Procurar" />
    </main>
  )
}

export default App;