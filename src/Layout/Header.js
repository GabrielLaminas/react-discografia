import React from 'react';

import logo from '../logoTiaoCarreiro.png';

const Header = () => {
  return (
    <header>
      <div>
        <img 
          src={logo} 
          alt="logo com imagem de Tião Carreiro" 
        />
      </div>

      <h1>Discografia</h1>
    </header>
  )
}

export default Header;