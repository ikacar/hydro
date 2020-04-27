import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Notification from './Components/Notification/Notification'
import Parameters from './Components/Parameters/Parameters'
import Tasks from './Components/Tasks/Tasks'
import Camera from './Components/Camera/Camera'
import LogoImg from './Components/Header/Images/logo.png'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <div className='header medium-shadow'>
        <div className='h-logo h-items'>
          <img className='logo-img' src={LogoImg}/>
        </div>
        <div className='h-user h-items'>
          Username
        </div>
        <div className='h-drop h-items'>
          Settings
        </div>
      </div>
      <Router>
      <Sidebar className='sidebar medium-shadow'/>
        <div className='dashboard'>
          <Route path="/notifications" component={Notification}>
            {/* <Notification/> */}
          </Route>
          <Route path="/parameters" component={Parameters}>
            {/* <Parameters/> */}
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
