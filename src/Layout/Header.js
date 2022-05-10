import React from 'react';
import './Header.css'
import logo from '../logoTiaoCarreiro.png';

const Header = () => {
  return (
    <header className='header__menu'>
      <div className='header__logo'>
        <img 
          src={logo} 
          alt="logo com imagem de Tião Carreiro" 
        />
      </div>

      <h1 className='header__title'>
        Discografia
      </h1>
    </header>
  )
}

export default Header;