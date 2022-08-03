import React, { useState } from 'react'
import technologyia from "../Componentes/assetnasa/assets/technology/background-technology-desktop.jpg"
import "../Componentes/tec.css"
import data from "../Componentes/helpers/data.json"

const heroimagnes = require.context( '../Componentes/assetnasa/assets/technology')


const Tecnology = () => {

  

  const  {crew , destinations, technology} =  data
  const {images} =  technology
  const  [tec,settec]  =  useState(technology[0])
  const [imagenes , setimagnes] =  useState("image-launch-vehicle-portrait.jpg")

  const hanldeclicktec = ( element , index)=>{
        settec(element)
        element.indice =   index
        const moderno = element.images.portrait.split("/")
        setimagnes( moderno[moderno.length -1] )
  }
  return (

        <>
        
    
          <div  style={{ 
              backgroundImage  :`url(${technologyia})`
          }}    className='tecnologia-center' >
            <div className='denter_technology'>
                    <div className='session_art_1' >
                      
                    {
                      technology.map(  (item ,index) =>  <div  
                        style={{     backgroundColor:  `${item.indice === index ? "gray"  :"#212f3c69 "}`    }}
                        onClick={()=> hanldeclicktec(item,index)} className='number'> 
                            <h2 style={{  fontWeight:"100" }} >{index+1}</h2>

                      </div>)
                    }

                    </div>
                    <div className='session-art' >
                            <p>The technology</p>
                            <h1 className='session-art_2' >{tec.name}</h1>
                            <p>{tec.description}</p>
                    </div>

            </div>
            <div>
                    <img   width="400"  height="400" src={ heroimagnes(`./${imagenes}`) }  />
                  
            </div>
          </div>
        </>
  )
}

export default Tecnology