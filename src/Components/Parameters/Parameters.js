import React from 'react';
import '../../App.css';
import './Parameters.css';
import PBrief from './Brief/PBrief'
import PDiagram from './Diagram/PDiagram'
import PSensors from './Sensors/PSensors'

function Parameters() {
  return (
    <div className='parameters-content'>
        <PBrief/>
        <PDiagram/>
        <PSensors/>
    </div>
  );
}

export default Parameters;
