import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Single = () => {


    
    const navegar =  useNavigate()
    const { userd }     = useParams()
    const [bioinfo , setbionfio ] =  useState("")
    const secondapi = async ()=>{
            let primero =  await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a9b6576e&t=${ userd }`)
            let secondo = await primero.json()
            setbionfio(secondo)
    }

    const handleChanug = ()=>{
        navegar("/")        
    }


    useEffect(()=>{

        secondapi()
    },[])

  return (
        <>
                    <h1 style={{
                            textAlign:"center",
                            marginBottom:"1em",
                            color:"whitesmoke"

                    }} >Descrition Movie</h1>
                            <div className='single' >

                                <div>
                                    <img  className='server-render' src={bioinfo.Poster} ></img>
                                </div>
                                <div className='DescriptionObs' >       

                                
                                        <p>Title :  {bioinfo.Title}</p>
                                        <p style={{ backgroundColor: "#F4D03F" }} >Title :  {bioinfo.Year}</p>
                                        <p>Lanzamiento  :   {bioinfo.Released}</p>
                                        <p  >Genero  :  {bioinfo.Genre}</p>
                                        <p>Director  :{bioinfo.Director}</p>
                                        <p>Actores Destcados  :  {bioinfo.Actors}</p>
                                        <p>Biografia  :  {bioinfo.Plot}</p>
                                        <p>Lengueja  :  {bioinfo.Language}</p>
                                        <p>Country  : {bioinfo.Country} </p>  
                                        <p>Premiso  : {bioinfo.Awards} </p>


                                    <div className='zonebuton'>



                                        <button className='buton1' onClick={handleChanug}  > to back</button>
                                        <button  className='buton2' >add</button>
                                        <button    className='buton3' >relase</button>

                                    </div>
                                                                        </div>


                            </div>
                            <br>
                            </br>
                        <div className='center'>

                        </div>
                    
        </>
  )
}

export default Single