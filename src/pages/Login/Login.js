import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './styleLogin.css';
import image from '../../assets/Banner.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    alert("Formulario Enviado!");
    navigate('/');
}
    

  return (
    <div 
    style={{'--image-url': `url(${image})`}} 
    className='bg-[image:var(--image-url)] flex w-full justify-center h-[70vh] bg-cover'>
        <form action='#' className='login-form py-[60px]' onSubmit={handleLogin}>
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faUser} /></label>
                <input type='text' placeholder='Username' required/>
            </div> 
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faLock} /></label>
                <input type='password' placeholder='Password' required/>
            </div>  
            <button className='submit_btn'>Login</button>         
        </form>      
    </div>
  )
}

export default Login;
