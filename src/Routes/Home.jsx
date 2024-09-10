import React from 'react'
import "../index.css"
import "../Components/styles/Home.css"
import Card from '../Components/Card'
import dentistImg from "../assets/dentist.jpg"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <section className='main-section-title'>
        <div className='div-main-title'>
          <h1 className='title-light'>Encuentra a tu Dentista Ideal</h1>
          <p>Descubre una selección de los mejores dentistas disponibles, listos para brindarte el mejor cuidado dental.</p>
        </div>
        <img src={dentistImg} alt="" />
      </section>

      <h2>Conoce a Nuestros Dentistas Destacados</h2>
      <p>Agrega a tus favoritos</p>
      
      <div className='card-grid'>
        <p>cards aqui</p>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home