import React, { useEffect, useState } from 'react'
import FormularioSession from './FormularioSession'
import SinglePeliculas from './SinglePeliculas'
import {  BrowserRouter , Route, Routes, useNavigate }  from "react-router-dom"


const Ombd = () => {
    const navegar=   useNavigate()

    const [favoritos , setfavoritos ]  =  useState(  JSON.parse( localStorage.getItem("pelas") ) ||  []  )
    const [data , setdata] =  useState()
    const [ buscador , setbucador  ] =  useState("avengers")

  //todo mandamos a raiz de favoritos con el path
    const handleredirect = ()=>{
        navegar("/favoritos")

    }
    const savetolocalstorage =  ()=>{
      localStorage.setItem("pelas" , JSON.stringify(favoritos))
    }
    useEffect(()=>{
            console.log(favoritos)
            savetolocalstorage()

    } , [favoritos])


    const fechibgdatos =  async ()=>{
      try {
    
          const guradionaes =  `http://www.omdbapi.com/?i=tt3896198&apikey=a9b6576e&s=${ buscador }`
          const primero = await fetch(guradionaes)
          const secundo =  await primero.json()
          setdata(secundo)
              } catch (error) {
          console.log(error)
      } 
           
    }
    useEffect(()=>{
      fechibgdatos()
     
    }, [  buscador ])
  return (
        <>

        <button  onClick={  handleredirect } className='buton-se' >Go to Favority</button>
        <FormularioSession  setbucador={setbucador} >          
          </FormularioSession>    
          {

            data ?   <SinglePeliculas
            
            favoritos={favoritos}
            setfavoritos={ setfavoritos}
            data={data}
        >

        </SinglePeliculas> : <h1>Cargando ..........</h1>
          }
        
        
        </>
  )
}

export default Ombd