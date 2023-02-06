import React from 'react';
import logoMC from '../imagenes/tasksApp.png';
import '../styles/Logo.css';

function Logo(){
    return (
    <div className='logoContenedor'>
    <img 
    src={logoMC}
    className='logoMC'
    alt='logotipo MC'
    />
  </div>
    )
}

export default Logo;
