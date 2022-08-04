import React, { useState } from 'react'
import "../../Componentes/Cartgithub.css"


const Formulario = ( {setestoad,temaeestado} ) => {
    
    const [ text , setext] =  useState()
    const hanaldechanuge = (e)=>{
            setext(e.target.value)
    }


    const handlesubtmit = (e)=>{
            e.preventDefault()
            if(!text){
                console.log("nada denter")
            }else{  
                setestoad(text)
            }
    }
    return (

    <>
        <form  onClick={ handlesubtmit } >
                        <div className='cente_btuon'>
                     
                <input  style={{  
                    color :  `${!temaeestado ? "whiteSmoke" : "black" }`, 
                    backgroundColor : `${!temaeestado ? "#34495E" : "whiteSmoke" }` }} placeholder='          🔎 Serach github username' onChange={ hanaldechanuge }  className='input'>

                </input>
                <input  className='submit_top' type="submit"  ></input>
                </div>
        </form>
                
    </>
  )
}

export default Formulario