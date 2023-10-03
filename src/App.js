
import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Top from './Components/Top';
import Trending from './Components/Trending';
import Science from './Components/Science';
import Entertainment from './Components/Entertainment';
import Sport from './Components/Sport';
import Header from './Components/Header';

function App() {

    return (
    <>
     
    <BrowserRouter>
      
    <Header/>
      <Routes>
    <Route exact path="/" element={<Top/>}>
            
          </Route>
          <Route exact path="/Trending" element={<Trending/>}>
            
          </Route>
          
          <Route exact path="/Science" element={<Science/>}> 
            
          </Route>
          <Route exact path="/Entertainment" element={<Entertainment/>}>
            
          </Route>
          <Route exact path="/Sport" element={ <Sport/>}>
           
          
          </Route>

          </Routes>
  
    </BrowserRouter>
    
    
    </>  
  );
}

export default App;
