import './App.css';
import Page1 from './Componentes/page1';
import  { BrowserRouter , Route, Routes }   from "react-router-dom"
import Paginarais from './Componentes/Paginarais';
import Prew from './Componentes/crew';
import Tecnology from './Componentes/Tecnology';
import Rutas from './Componentes/Rutas';


function App() {
  return (
        <BrowserRouter>
  
        <div className='header' >
  
          <h1 className='top_brand'>
          </h1>
          <div  className='raya-top'  >     </div>
         
          <Rutas></Rutas>

        </div>
                

{/* 
              <Rutas></Rutas>         */}


                <Routes>
        
                    <Route  path='/'  element={ <Paginarais></Paginarais>  } ></Route>
                    <Route   path='/destination'  element={  <Page1></Page1> }  ></Route> 
                    <Route path='/crew' element= {  <Prew></Prew>  }  ></Route>
                    <Route  path='/technoly'   element={  <Tecnology></Tecnology>  } ></Route>

                </Routes>
        
        
        </BrowserRouter>
  );
}

export default App;
