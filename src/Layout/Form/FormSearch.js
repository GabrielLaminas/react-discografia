import React from 'react';
import './FormSearch.css'

const FormSearch = () => {
  return (
    <form className='form__container'>
      <label htmlFor='search' className='form__label'>
        Digite uma palavra chave
      </label>

      <div className='form__container__flex'>
        <input
          className='form__inputSearch' 
          type="search"
          id="search"
          name="search"
        />

        <button className='form_button'>
          Procurar
        </button>
      </div>
    </form>
  )
}

export default FormSearch;