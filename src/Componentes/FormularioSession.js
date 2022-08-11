import React, { useState } from 'react'

const FormularioSession = ({setbucador}) => {
    
 const [text , settext] =  useState("")
 
 const handlechangue = ( e )=>{
            settext(e.target.value)
 }

 const handlesubmit = (e)=>{
        e.preventDefault()
        setbucador(text)
    
 }
  return (


   <>
    <form  className='view' onSubmit={ handlesubmit  } >
            <input  placeholder='Buscar peliculas'  onChange={ handlechangue }  className='compilado' ></input>
            <input  className='buton' type= "submit" ></input>
    </form>
   
   </>
  )
}

export default FormularioSession