import React, { useEffect, useState } from 'react'
import data from "../assets/data.json"
import "../Componentes/cart.css"
import elisis from  "../assets/images/icon-ellipsis.svg" 
import work from "../assets/images/icon-work.svg"
import ejercicio from "../assets/images/icon-exercise.svg"
import play  from "../assets/images/icon-play.svg"
import self from "../assets/images/icon-self-care.svg"
import social from "../assets/images/icon-social.svg"
import study from "../assets/images/icon-study.svg"
import jeremy from "../assets/images/image-jeremy.png"
import Renderuniqlo from './Renderuniqlo'
import Filtrodata from './Filtrodata'


const inital = [ work,  ejercicio , play , self , social ,study]
const   virtual = ["daily", "monthly" , "weekly"] 


const Data = () => {

      const [ datactual, setdatacual ] =  useState(data)
      const [imagnes, setimages] =  useState("")
      const [estadoejercico ,  setestadoejericio] =  useState(virtual)
      const [filtrar, setfiltar]   = useState([])
      const handle_click = ( variable )=>{
            const datos =  data.map(item => item.timeframes)
            const obtener =  datos.map(item => (item[`${ variable }`]))
            setfiltar({

                  actual:{variable , lista:obtener}
            })
      }
      useEffect(()=>{
      })

  return (
        <>

            <div  className='container-fluid'>
                  <div  className='render'>
                        <div className='render_modal_1' >
                              <img className='img_jeremy' src={jeremy}  />
                              report 
                              <h1>
                                    Jeremy Robson
                              </h1>
                        </div>
                        <div className='render_modal_2'>
                              {
                                    estadoejercico.map(item =><p  onClick={()=>handle_click(item)} >{item}</p>)
                              }
                        </div>
                        <div>

            </div>
                  </div>

            <div  className='container'>

                              {
                                    filtrar.length === 0  ? 
                                   <Renderuniqlo 
                                          elisis={elisis} 
                                          inital={inital}
                                                datactual={datactual} >
                                   </Renderuniqlo>
                                    :  <Filtrodata
                                                      data={data}
                                                       filtrar={filtrar}
                                                       inital={inital}
                                                       elisis={elisis} 
                                    ></Filtrodata>
                              }
                      
              </div> 
   </div>
            
        </>
  )


}

export default Data