import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Discografia from './Pages/Discografia/Discografia';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discografia' element={<Discografia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;