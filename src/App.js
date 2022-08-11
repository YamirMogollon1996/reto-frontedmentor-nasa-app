import './App.css';
import Data from './Componentes/Data';
import Ombd from './Componentes/Ombd';
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Single from './Componentes/Single';
import Headers from './Componentes/Headers';
import { useEffect, useState } from 'react';
import Spiner from './Componentes/Spiner';
import Favoritos from './Componentes/Favoritos';

function App() {


  
  const [esprar, setespear] =  useState(false)
  const [ tema ,settema ]   =  useState(true)


  const handleclick = ()=>{
   settema(!tema)
  }
  const handlesprar = ()=>{
      setTimeout(()=>{
        setespear(true)
      },1400)

  }


  useEffect(()=>{
    handlesprar()
  }, [ ])
  return (

    <>

<div  style={{ 
  
  
  className:"renderUni",
  backgroundColor :  `${ !tema  ? "whiteSmoke":"#272343"}`  }} >


<div style={{
   

}}    className='theme'>
      {
        tema ? <button  onClick={handleclick} >    🌞 </button>  :  
        <button  onClick={handleclick} >  🌑  </button>
         
      }


      
    </div>
      
      
      <Headers></Headers>
      <br></br>
      <br></br>
    {
      !esprar   ? 
      <Spiner></Spiner>
      :

    <BrowserRouter>

    <Routes>

        <Route  path='/'  element = {  <Ombd></Ombd> } >   </Route>
        <Route   path='/:userd'  element = { <Single></Single> }  ></Route>
        <Route  path='/favoritos'  element = {<Favoritos></Favoritos>}   ></Route>
    </Routes>


</BrowserRouter>


    }

  



</div>
  
  
    
    
    </>
    
  );
}

export default App;
