import React from 'react';
import '../../App.css';
import './Parameters.css';
import TempIcon from './images/weather.png';
import HumIcon from './images/water.png'
import BrightIcon from './images/sun.png'
import WatIcon from './images/wave.png'
import NutIcon from './images/chef.png'

function Parameters() {
  return (
    <div className='parameters-content'>
        <div className='param-brief'>
            <div className='temp-brief brief-item medium-shadow'>
                <div className='brief-header'>
                    <h5 className='header-text white-text'>Temperature</h5>
                </div>
                <div className='brief-value'>
                    <h1 className='white-text'>23C</h1>
                </div>
                <div className='brief-icon'>
                    <img className="img" src={TempIcon}/>
                </div>
            </div>
            <div className='hum-brief brief-item medium-shadow'>
                <div className='brief-header'>
                    <h5 className='header-text white-text'>Humidity</h5>
                </div>
                <div className='brief-value'>
                    <h1 className='white-text'>60%</h1>
                </div>
                <div className='brief-icon'>
                    <img className="img" src={HumIcon}/>
                </div>
            </div>
            <div className='bright-brief brief-item medium-shadow'>
                <div className='brief-header'>
                    <h5 className='header-text white-text'>Brightness</h5>                    
                </div>
                <div className='brief-value'>
                    <h1 className='white-text'>140x</h1>
                </div>
                <div className='brief-icon'>
                    <img className="img" src={BrightIcon}/>
                </div>
            </div>
            <div className='wath-brief brief-item medium-shadow'>
                <div className='brief-header white-text'>
                    <h5 className='header-text white-text'>Water Temperature</h5>
                </div>
                <div className='brief-value'>
                    <h1 className='white-text'>20C</h1>
                </div>
                <div className='brief-icon'>
                    <img className="img" src={WatIcon}/>
                </div>
            </div>
            <div className='nut-brief brief-item medium-shadow'>
                <div className='brief-header'>
                    <h5 className='header-text white-text'>Nutrients</h5>
                </div>
                <div className='brief-value'>
                    <h1 className='white-text'>2KG</h1>
                </div>
                <div className='brief-icon'>
                    <img className="img" src={NutIcon}/>
                </div>
            </div>
        </div>
        <div className='patameters-diagram'>
            <div className='temp-diagram diagram white-card medium-shadow'>
                <div className='diagram-h white-text'>
                    Temperature Diagram
                </div>
                <div className='diagram-d'>
                    <img className="img" src="https://apexcharts.com/wp-content/uploads/2018/01/basic-line-chart.svg"/>
                </div>
            </div>
            <div className='hum-diagram diagram white-card medium-shadow'>
                <div className='diagram-h white-text'>
                    Humidity Diagram
                </div>
                <div className='diagram-d'>
                    <img className="img" src="https://apexcharts.com/wp-content/uploads/2018/01/basic-line-chart.svg"/>
                </div>
            </div>
            <div className='bright-diagram diagram white-card medium-shadow'>
                <div className='diagram-h white-text'>
                    Brightnes Diagram
                </div>
                <div className='diagram-d'>
                    <img className="img" src="https://apexcharts.com/wp-content/uploads/2018/01/basic-line-chart.svg"/>
                </div>
            </div>
            <div className='wath-diagram diagram white-card medium-shadow'>
                <div className='diagram-h white-text'>
                    Wather Temperature Diagram
                </div>
                <div className='diagram-d'>
                    <img className="img" src="https://apexcharts.com/wp-content/uploads/2018/01/basic-line-chart.svg"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Parameters;
