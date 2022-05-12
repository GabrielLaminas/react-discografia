import React from 'react';
import { Link } from 'react-router-dom';
import './CreateButton.css';

const CreateButton = ({text}) => {
  /*
  function handleClick(){
    setModal((modal) => !modal)
  }*/
  
  return (
    <div className='CreateButton__container'>
      <Link to="/discografia">
        {text}
      </Link>
    </div>
  )
}

export default CreateButton;