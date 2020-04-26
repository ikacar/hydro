import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Notification from './Components/Notification/Notification'
import Parameters from './Components/Parameters/Parameters'
import Tasks from './Components/Tasks/Tasks'
import Camera from './Components/Camera/Camera'
import LogoImg from './Components/Header/Images/logo.png'
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
      <Sidebar className='sidebar medium-shadow'/>

      <div className='dashboard'>
        <Notification/>
        {/* <div className='notification'>Notification Content</div>
        <div className='parameters'>Parameters Content</div>
        <div className='tasks'>Tasks Content</div>
        <div className='camera'>Camera Content</div> */}
      </div>
      {/* <Header className='header'/>
      <Sidebar className='sidebar'/> */}  
      {/* <Notification className="notification"/>
      <Parameters className="parameters"/>
      <Tasks className="tasks"/>
      <Camera className="camera"/> */}
    </div>
  );
}

export default App;
