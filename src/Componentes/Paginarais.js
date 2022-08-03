import React from 'react'
import desktop  from "../Componentes/assetnasa/assets/home/background-home-desktop.jpg"
import "../Componentes/Estilos.css"

const Paginarais = () => {
  return (
    <>  
      <div     className='hero-nasa'   style={{  
        backgroundImage
        :   `url(${desktop})`  }} >
            <div  className='hero-plastic' >

                <h1  className='parrago'>SO, YOU WANT TO TRAVEL TO </h1>
                  <h1 className='large' >SPACE</h1>
                  <p  className='parrafo-description'>lets ,face  if you to got ot space, you poruose as well ypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

            </div>
            <div className='hero-topic' >
                  <div  className='denter'>
                        <h1 style={{ 
                            color:"gray"

                        }} >EXPLORE </h1>

                  </div>
            </div>

      </div>
    
    </>
  )
}

export default Paginarais