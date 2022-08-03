import React, { useState } from 'react'
import desktop from "../Componentes/assetnasa/assets/crew/background-crew-desktop.jpg" 
import data from "../Componentes/helpers/data.json"
import "../Componentes/crew.css"
const herocrew =  require.context( '../Componentes/assetnasa/assets/crew' )


const Prew = () => {

  const  {crew , destinations, technology} =  data
  const [ imagenes , setimages ] =  useState(crew)
  const [ paginatiom ,setaginatipn]  =  useState(imagenes[imagenes.length-1])
  const  [topiman , setoiman ] =  useState("image-douglas-hurley.png")

  const hanldeclick= ( element ,index)=>{

          setaginatipn(element)
          element.indice =  index
          const borrar = (element.images.png.split("/"))
          const ima =  borrar[borrar.length -1]
          console.log(ima)
          setoiman(ima)

  }

  
  return (

      <div  className='container-session' style={{

        backgroundImage : `url(${desktop})`
      }} >

                <div  className='product-1'>
                  
                      <h1 className='role-session' >02  MEET YOUR CREW</h1>
                      <h1 className='role' >{paginatiom.role}</h1>
                      <h1 className='name' >{paginatiom.name}</h1>
                      <p>{paginatiom.bio}</p>

                </div>
                
                <div className='prodcut-2'>
                       <img   height="500" src=  { herocrew(`./${topiman}`) } /> 
                </div>

              <div className='top-gama' >
                {
                  imagenes.map(  (item,index) => <div 
                  
                  style={{  
                    backgroundColor: `${paginatiom.indice === index  ? "gray" : "#212f3c69"}` ,
                    border:  "1px solid whiteSmoke"   }}
                  onClick={()=>hanldeclick(item , index)}  className='denter-gama'>
                  </div>)
                }
              </div>

      </div>

  )
}

export default Prew