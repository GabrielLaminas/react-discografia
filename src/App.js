import React from 'react';
import Button from './Components/Button';
import Search from './Components/Search';
import Header from './Layout/Header';

const App = () => {
  return (
    <main>
      <Header />
      <Search />
      <Button name="Procurar" />
    </main>
  )
}

export default App;