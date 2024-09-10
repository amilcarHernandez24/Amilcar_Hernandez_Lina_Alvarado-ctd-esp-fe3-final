import React from 'react'
import logo from '../assets/logo-white.svg'
import '../Components/styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-section">
      <span className='subtitle'>Proyecto</span>
      <span>Examen Frontend | Digital House</span>
    </div>
    <div className="footer-section">
      <img src={logo} alt="Logo Dental Studio" className="footer-logo" />
    </div>
    <div className="footer-section">
      <span  className='subtitle'>Desarrollado por</span>
      <span>@Amilcar Hernandez & @Lina Alvarado</span>
    </div>
  </footer>
  )
}

export default Footer
