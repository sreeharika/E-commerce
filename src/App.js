import React from 'react';
//nimport logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';


//import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
  <div className='App'>
    <Navbar></Navbar>
  {/* <Products></Products> */}
    <Login></Login>
    
  </div>
  )
}


export default App;
