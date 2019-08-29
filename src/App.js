import React, { Component } from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render(){
    
  return (
    <div className="container">
     <Navbar title = "Navbar Componenti Title"/>
     <hr/>
     <User
     name="Mali Çelik"
     
     department="Software"
     />
      <User
     name="Muhammed Çelik"
     salary="7000"
     department="Software"
     />
    </div>
  );
}
}
export default App;
