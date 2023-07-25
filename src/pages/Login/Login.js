import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './styleLogin.css';
import image from '../../assets/Banner.jpg'
import logo from '../../assets/LogoBurgeria - Login.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [inputValues, setInputValues ] = useState({
    email: '',
    senha: ''
  });

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Usuario ${inputValues.email} logado com sucesso! `);
    navigate('/');
  }

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
    console.log(inputValues);
  }


    

  return (
    <div 
    style={{'--image-url': `url(${image})`}} 
    className='bg-[image:var(--image-url)] flex w-full justify-center h-[80vh] bg-cover'>
        <form action='#' className='login-form py-[60px]' onSubmit={handleLogin}>
            <img src={logo} alt='Logo' />
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faUser} /></label>
                <input type='text' placeholder='Username' required onChange={handleChangeValues} />
            </div> 
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faLock} /></label>
                <input type='password' placeholder='Password' required onChange={handleChangeValues}/>
            </div>  
            <button className='submit_btn'>Login</button>         
        </form>      
    </div>
  )
}

export default Login;
