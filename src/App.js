import React from 'react';
import './App.css';

import FormSearch from './Layout/FormSearch';
import Header from './Layout/Header';

const App = () => {
  return (
    <main className='main__container'>
      <Header />
      <FormSearch />
    </main>
  )
}

export default App;