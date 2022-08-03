import React, { useState } from 'react'
import martes  from "../Componentes/assetnasa/assets/destination/background-destination-desktop.jpg"
import data from "../Componentes/helpers/data.json"
import  "../Componentes/martes.css"
const nasaheroret =  require.context('../Componentes/assetnasa/assets/destination')

const Page1 = () => {

  const  {crew , destinations, technology} =  data
  const [estado , setestado] =  useState(destinations)
  const [encontrado , setencontrado] =  useState(destinations[1])
  const [imagenes , setimages] =  useState(`image-moon.png`)
  
  const handleclick = (  element ,index ) =>{
      setencontrado(element)
      element.indice = index
      const relative = element.images.png.split("/")
      const mont =  relative[relative.length -1]
      setimages(mont)

  }

  return (

    <>

       <div  className='render-marte' style={{  backgroundImage: `url(${martes})` }} >
  

          <div  className='session__art'>

            <h2  style={{
                textAlign:"center",
                color:"white",
                fontWeight:"200"

            }} >01 Pick YOUR DESTINATION</h2>
             <div >

                <img  className='obtener'  height="400"  src={ nasaheroret((`./${imagenes}`)) }  />

             </div>
          </div>

          <div className='top-render'>

              <div className='top_rende_app' >
                {estado.map(  (item,index) => <h3  key={index} style={{

                      borderBottom:`${encontrado.indice == index  ?  "1px solid whiteSmoke" : "1px solid #212f3c69" }    `,
                      cursor:"pointer",
                      color:"whitesmoke",
                      fontWeight:"500"


                    }}  onClick=  {  ()=>handleclick(item,index)}  >{item.name}</h3>)}
                  

              </div>

                  <div>

                     <h1 className='title' > {encontrado.name}  </h1> 
                     <p  className='dexcription'>
                        {encontrado.description}
                       
                    
                      
                     </p>
                     <hr></hr>
                     <br></br>
                     <br></br>  
                  </div>

                  <div  className='distance-travel'>

                        <div>
                            <h2>Travel</h2>
                            <h3>{  encontrado.travel }</h3>
                        </div>
                        <div>
                            <h2>Scope</h2>
                            <h3>{encontrado.distance}</h3>
                        </div>

                  </div>


              </div>
              
                  

       </div>
    </>


   
  )
}

export default Page1