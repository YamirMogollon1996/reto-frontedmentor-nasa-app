import React from 'react'
import work from "../assets/images/icon-work.svg"
import ejercicio from "../assets/images/icon-exercise.svg"
import play  from "../assets/images/icon-play.svg"
import self from "../assets/images/icon-self-care.svg"
import social from "../assets/images/icon-social.svg"
import study from "../assets/images/icon-study.svg"
import jeremy from "../assets/images/image-jeremy.png"


const Renderuniqlo = ( {datactual,inital,elisis} ) => {
    return(

        <>
        {datactual.map( (item,index) => <div  key={index}  className='denter_children' > 
                                    <div>
                                    <img className='session_img' height="30" width="30" src={inital[index]}/>  
                                    </div>
                                    <div className='ojos_dv'>
                                          <div className='session_art'>
                                          <p>{item.title}</p>
                                          <img  src={elisis} / >
                                    </div>
                              <h1>{item.timeframes.weekly.current}Hrs</h1>
                              <p>last week {item.timeframes.weekly.previous} - hrs</p>
                                    </div>
                        </div>)

                }        </>
    )


}


export default Renderuniqlo