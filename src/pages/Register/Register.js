import React from 'react';
import image from '../../assets/Banner.jpg'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleSignupForm = (event) => {
        event.preventDefault();
        alert("Formulario Enviado!");
        navigate('/login');
    }

    return (
        <div 
            style={{'--image-url': `url(${image})`}} 
            className='bg-[image:var(--image-url)] flex w-full justify-center h-[90vh] bg-cover'>
            <form action='#' className='flex flex-col py-5 my-10' onSubmit={handleSignupForm}>
                <h1 className='text-4xl text-white'>Formulário de Cadastro</h1>
                <label className='text-xl text-white mx-0 my-0'>Nome do Usuario</label>
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='text' placeholder='Nome Completo' required /> 
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='email' placeholder='E-mail' required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='email' placeholder='Confirme o E-mail' required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='password' placeholder='Senha' required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='password' placeholder='Confirme a Senha' required />
                <button className='@apply btn text-l border bg-red-900 text-white text-center py-2 my-5 rounded-[5px] w-full' type='submit'>Enviar</button>            
            </form>      
        </div>
    )
}

export default Register;
