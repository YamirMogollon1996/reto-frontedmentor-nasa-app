import React, { useEffect, useState } from 'react'
import "../../Componentes/Cartgithub.css"
import Formulario from './Formulario'
import Infousuario from './Infousuario'

const colortema = {
        oscuro : "#212F3C",
        claro : "#ECF1F5",
        actual:"#212F3C"
}

const Feching = () => {

    const [ estado , setestoad] =  useState("")
    const [tema ,settema ]   = useState(  colortema)
    const [temaeestado,settemaestate] = useState(false)
    const  [infousuairo , setinforusuario ]  =  useState("")

    const traerdata = async (id)=>{

        try {
            let first =  await fetch(`https://api.github.com/users/${estado  }`)
            let second =  await first.json()    
            setinforusuario(second)
        
        } catch (error) {
                console.log(error)
        }        
    }
    const chamguetemas =  ( color , valor )=>{
        
        settema({
            ...tema,
            actual : color
        })
        settemaestate(valor)
    }
    useEffect(()=>{
            traerdata()
    },[estado   ])  
           //todo create Cart
  return (
    <>
            <div   style={{
                backgroundColor : `${tema.actual}`,
                color: `${temaeestado  ? "black"  : "whiteSmoke"}  `
            }}  className='div_cart'>
                <div className='Center' >
                            <div className='topic-1' >
                                    <h2>Developer-Session</h2>
                                        {
                                            temaeestado  ? 
                                            <button  className='toño' onClick={()=> chamguetemas(`${tema.oscuro}` , false)} >  🌑</button> :  
                                            <button  className='toño'  onClick={()=> chamguetemas(`${tema.claro}` ,true)} > ☀️</button> 
                                        }
                            </div>
                            <div>
                                            <Formulario  
                                            
                                            temaeestado={temaeestado}
                                            setestoad={setestoad}  ></Formulario>
                            </div>
                            <div>
                            <Infousuario  
                            
                            temaeestado={temaeestado}
                            infousuairo={infousuairo} ></Infousuario>


                            </div>
                    
                </div>

                        






            </div>

    </>
  )
}

export default Feching