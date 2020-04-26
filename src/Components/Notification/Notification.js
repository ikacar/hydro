import React from 'react';
import '../../App.css';
import './Notification.css';
import IrigIcon from './images/agriculture.png';
import DateIcon from './images/clock.png'
import BriIcon from './images/idea.png'
import EndIcon from './images/event.png'
import Table from './Table/Table'
function Notification() {
  return (
    <div className='notification-content'>
        <div className='not-upcoming'>
            <div className='upcoming-header'>
                <h4 className=''>Upcoming tasks</h4>
            </div>
            <div className='upcoming-card-1 medium-shadow'>
                <div className='card-logo card-1-color'>
                    <img className='not-img-irig' src={IrigIcon}/>
                </div>
                <div className='card-content'>
                    <div className='white-text'>Irigation</div>
                    <div className='white-text'>Navodnavanje prvog bloka</div>
                    <div className='white-text'>Zakazano navodnavanje prvog bloka u 11:00h</div>
                </div>
            </div>
            <div className='upcoming-card-2 medium-shadow'>
                <div className='card-logo card-2-color'>
                    <img className='not-img-bri' src={BriIcon}/>
                </div>
                <div className='card-content'>
                    <div className='white-text'>Irigation</div>
                    <div className='white-text'>Navodnavanje prvog bloka</div>
                    <div className='white-text'>Zakazano navodnavanje prvog bloka u 11:00h</div>
                </div>
            </div>
            <div className='upcoming-more'>

            </div>
        </div>
        <div className='not-dates'>
            <div className='dates-header'>
                <h4 className=''>Important Dates</h4>
            </div>
            <div className='start-date white-card medium-shadow'>
                <div className='card-logo card-3-color'>
                    <img className='not-img-date' src={DateIcon}/>
                </div>
                <div className='card-content'>
                    <div className=''>Start Date</div>
                    <div className=''>Seed placing date</div>
                    <div className=''>Time when seeds were placed is 11:00h</div>
                </div>
            </div>
            <div className='end-date white-card medium-shadow'>
                <div className='card-logo card-4-color'>
                    <img className='not-img-end' src={EndIcon}/>
                </div>
                <div className='card-content'>
                    <div className=''>1st Stage Date</div>
                    <div className=''>First harvening</div>
                    <div className=''>Time when harvening is planed </div>
                </div>
            </div>
        </div>
        <div className='not-latest'>
            <div className='latest-header'>
                <h4 className=''>Latest Informations</h4>
            </div>
            <div className='latest-table white-card medium-shadow'>
                <Table/>
            </div>
        </div>
    </div>
  );
}

export default Notification;
