import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link } from 'react-router-dom';
import Contact from './Contact/Contact';



function App() {
  return (
   
    <div className="App">
      
     {/* <h1>Hello DTH</h1>
      */}
   
     <Routes>
      <Route path='/contact' element = {<Contact/>}></Route>
     </Routes>
     
     
    </div>
  );
}

export default App;
