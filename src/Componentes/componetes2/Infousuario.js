import React from 'react'
import "../../Componentes/Cartgithub.css"

const Infousuario = ( {infousuairo,temaeestado} ) => {
  return (
    <>
    <div  
    style={{
            
            backgroundColor :  `${!temaeestado  ? "#34495E"  :  "whiteSmoke"}` }}
    className='presentation-op' >

    <img className='avatar' src={infousuairo.avatar_url} ></img>

    <div  style={{ 
        color:`${!temaeestado ? "whiteSmoke" : "black" }`,  


    }}  className='denter_mosh' >

            <div className='info-user' >
                <h3>{infousuairo.login}</h3>    
                <p  > {infousuairo.created_at}</p>
                

            </div>
            
            {!infousuairo.bio ?  <p>User no info bio</p>:<p>{infousuairo.bio}</p    >}

           
            <div   style={{ 
                    backgroundColor:`${!temaeestado ? "#212F3C" : "#85929E" }`,  

            }} className='follower_section'>
                <div>

                    
                </div>
                Repos
                <h3> {infousuairo.public_repos}  </h3>
                followers
                <h3> { infousuairo.followers } </h3>
                Following
               <h3>  {infousuairo.following}  </h3>

            </div>
            <div   style={{

backgroundColor:`${!temaeestado ? "#212F3C" : "#85929E" }`,  
            }} className='section2__form' >
                    <div  className='section__2__form__1'>
                        <p>  {infousuairo.type} </p>       
                         <p>{infousuairo.url}  </p>                            
                    </div>
                    
                    <div className='section__2__form__2'>
                          <p>  {!infousuairo.twitter_username && <p>not aviable</p>}</p>                             
                          <p>  {!infousuairo.location  && <p>Not info</p>} </p>


                    </div>
                    

            </div>


    </div>



    </div>
    

    </>

  )
}

export default Infousuario