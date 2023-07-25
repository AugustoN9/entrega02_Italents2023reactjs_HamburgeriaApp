import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LogoBurgeria.png';

const Navbar = () => {
  return (

      <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <Link to='/'>
                  <img src={logo} alt='Logo' className='min-w-[120px] cursor-pointer'  />
                  </Link>
                <h1 className='hidden text-center text-3xl font-semibold text-gray-700 md:block '>Hamburgeria App</h1>
            </div> 
            <div className='flex items-center justify-end space-x-6'>
                <Link to='/login'>  
                    <button className='text-xl font-light' >Login</button>
                </Link>
                <Link to='/register'>
                    <button className='bg-primary px-6 py-2 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
                </Link>
            </div>           
        </nav>
      </header>
  
  )
}

export default Navbar
