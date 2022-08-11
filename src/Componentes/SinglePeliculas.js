import React from 'react'
import { Link } from 'react-router-dom'
import "../Componentes/cart.css"


const SinglePeliculas = (  { data , setfavoritos, favoritos }   ) => {

  const handleaddmovie = ( item )=>{
      setfavoritos([...favoritos , item])
  }


  return (
        <>
            <div className='Dasboradsingle'>
            {
                    data.Search.map(item =>  <div  className='session_Asrt' >
                
                    <p style={{
                                color:"whitesmoke"
                    }} >{item.Title}</p>
                    <div
                      style={{  backgroundImage:`url(${item.Poster})`  }}
                    className='imagen-session'>
                    </div>
                    <br></br>
                    <hr style={{
                        marginBottom:"20px"
                    }} ></hr>
                    <div className='descriptiom-year' >
                    
                    <p >{item.Year}</p>
                     <Link  to={`${item.Title}`} >   <button    className='buton-se' > Go Info</button>  </Link> 
                     <button  onClick={()=>handleaddmovie(item) }  className='buton-se' >AddFavority</button>
                    </div>
                    </div>  )
                }
        

                

            </div>
                
        
        
        </>

  )
}

export default SinglePeliculas