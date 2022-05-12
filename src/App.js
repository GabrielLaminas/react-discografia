import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Discografia from './Pages/Discografia/Discografia';
import GlobalStore from './Context/AlbumContext';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStore>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discografia/:id' element={<Discografia />} />
        </Routes>
      </GlobalStore>
    </BrowserRouter>
  )
}

export default App;