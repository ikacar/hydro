import React from 'react';
import '../Parameters.css';

function PDiagram() {
  return (
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
  );
}

export default PDiagram;
