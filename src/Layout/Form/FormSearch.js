import React from 'react';
import './FormSearch.css'

const FormSearch = ({setSearch}) => {
  const [valueS, setValueS] = React.useState('');

  function handleSubmitSearch(e){
    e.preventDefault();
    if(valueS) setSearch(valueS);
  }

  function handleChangeSearch({target}){
    if(target.value){
      setValueS(target.value);
    }
    else{
      setSearch('');
      setValueS('');
    }
  }

  return (
    <form className='form__container' onSubmit={handleSubmitSearch} >
      <label htmlFor='search' className='form__label'>
        Digite uma palavra chave
      </label>

      <div className='form__container__flex'>
        <input
          className='form__inputSearch' 
          type="search"
          id="search"
          name="search"
          value={valueS}
          onChange={handleChangeSearch}
        />

        {valueS
        ? (
            <button 
              className='form_button'
            >
              Procurar
            </button>
          )
        : (
            <button 
              style={{
                opacity: 0.5, 
                pointerEvents: 'none'
              }} 
              className='form_button'
            >
              Procurar
            </button>
          )
        }
      </div>
    </form>
  )
}

export default FormSearch;