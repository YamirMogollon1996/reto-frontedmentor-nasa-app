import React from 'react'
import { Link } from "react-router-dom"
import desktop  from "../Componentes/assetnasa/assets/home/background-home-desktop.jpg"

const Rutas = () => {

  return (

        <>

            <div
        
            className='header-seccion' >
                <Link  className='top'  to="/" >  00HOME  </Link>
                <Link className='top'  to="/destination" >  01DESTINATION  </Link>
                <Link className='top'  to="/crew" >  02CREW  </Link>
                <Link className='top'  to="/technoly" >  03TECHNOLOGY  </Link>


            </div>
            
        
        
        </>
   
  )
}

export default Rutas