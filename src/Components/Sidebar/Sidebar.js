import React from 'react';
import './Sidebar.css'
import NotImg from './Images/notification.png'
import TaskImg from './Images/list.png'
import CamImg from './Images/photo.png'
import ParImg from './Images/speed.png'
import DotImg from './Images/dot.png'

function Sidebar() {
  return (
      <div className='sidebar'>
        <div className='s-header s-items white-text'>
            Navigation
          </div>
        <div className='s-notification s-items  white-text'>
          <div className='s-logo'>
            <img className='s-img' src={NotImg}/>
          </div>
          <div className='s-content'>
            Notification
          </div>
          <div className='s-dot'>
            <img className='dot-img' src={DotImg}/>
          </div>
        </div>
        <div className='s-parameters s-items  white-text'>
          <div className='s-logo'>
            <img className='s-img' src={ParImg}/>
          </div>
          <div className='s-content'>
            Parameters
          </div>
          <div className='s-dot'>
            <img className='dot-img' src={DotImg}/>        
          </div>
        </div>
        <div className='s-tasks s-items white-text'>
          <div className='s-logo'>
            <img className='s-img' src={TaskImg}/>
          </div>
          <div className='s-content'>
            Tasks
          </div>
          <div className='s-dot'>
            <img className='dot-img' src={DotImg}/>        
          </div>
        </div>
        <div className='s-camera s-items white-text'>
          <div className='s-logo'>
            <img className='s-img' src={CamImg}/>
          </div>
          <div className='s-content'>
            Camera
          </div>
          <div className='s-dot'>
            <img className='dot-img' src={DotImg}/>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
