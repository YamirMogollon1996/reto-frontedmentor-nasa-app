import React from 'react'

const Filtrodata = (  {data,filtrar ,inital,elisis }) => {

      const funciontiosn  =  ()=>{


           return data.map(item => item.title) 
      }

      
  return (
      <>

            {
                filtrar.actual.lista.map((item,index) => <div  className='denter_children'>
                                    <div>
                                    <img className='session_img' height="30" width="30" src={inital[index]}/>  
                                    </div>
                                    <div className='ojos_dv'>
                                          <div className='session_art'>
                                          {/* <p>{item.title}</p> */}
                                          {<p> {funciontiosn()[index]} </p>}                 
                                          <img  src={elisis} / >
                                    </div>
                              <h1>{item.current}Hrs</h1>
                              <p>last week {item.previous} - hrs</p>
                                    </div>
                                    
                        {/* <p>  {item.current} </p>
                        <p>{item.previous }</p> */}
                </div>)
            }
      </>
      
  )
}

export default Filtrodata