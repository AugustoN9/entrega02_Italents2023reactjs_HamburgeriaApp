import React from 'react'
import ProductList from '../../components/ProductList/ProductList';

const Home = () => {
  return (
    <>
      <section className='home-banner w-full px-3'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Os melhores hamburgers você encontra aqui!</h1>
        </div>
      </section>
      <ProductList />
    </>
  )
}

export default Home;

