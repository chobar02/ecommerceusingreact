import React from 'react'
import { Hero, ProductCard, Container, Loader } from '../components'
import { useGetAllProductsQuery } from "../redux/services/productApi"

const Home = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();


  return (
    <>
      <Hero />
      <Container>
        <div>
          <div className="text text-center py-10">
            <h2 className='md:text-3xl text-lg font-bold'>New Arrivals</h2>
            <p className='md:text-lg'>Indulge in luxury without breaking the bank.</p>
          </div>
          <div className='products flex flex-wrap justify-center gap-5'>

           

            {isLoading && <Loader/>}

            {error && <div className='text-center my-20'>
              <h1 className='font-black text-gray-300 text-xl md:text-4xl'>Sorry Could not found the Products</h1>
            </div>}

            {data && data.map(product => ( 
                <ProductCard key={product.id} title={product.title} id={product.id} img={product.images[0].replace(/[^a-zA-Z0-9\/\.\:]/g, '')} price={product.price} />
                
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
