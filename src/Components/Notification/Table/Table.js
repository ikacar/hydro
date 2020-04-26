import React from 'react';
import '../../../App.css';
import './Table.css';
function Table() {
  return (
    <div className="table">
        <div className="table-head">
            <div className='t-col-1 white-text'>
                No.
            </div>
            <div className='t-col-2 white-text'>
                Issue
            </div>
            <div className='t-col-3 white-text'>
                Time
            </div>
            <div className='t-col-4 white-text'>
                Link
            </div>            
            <div className='t-col-5 white-text'>
                Severity
            </div>
        </div>
        <div className="table-body">
            <div className='row'>
                <div className='t-col-1'>
                    1
                </div>
                <div className='t-col-2'>
                    Irigation
                </div>
                <div className='t-col-3'>
                    11:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    High
                </div>
            </div>
            <div className='row grey-row'>
                <div className='t-col-1'>
                    2
                </div>
                <div className='t-col-2'>
                    Light Up
                </div>
                <div className='t-col-3'>
                    13:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>
            <div className='row'>
                <div className='t-col-1'>
                    3
                </div>
                <div className='t-col-2'>
                    Nutrient
                </div>
                <div className='t-col-3'>
                    14:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Medium
                </div>
            </div>
            <div className='row grey-row'>
                <div className='t-col-1'>
                    4
                </div>
                <div className='t-col-2'>
                    Watering
                </div>
                <div className='t-col-3'>
                    17:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>
            <div className='row'>
                <div className='t-col-1'>
                    5
                </div>
                <div className='t-col-2'>
                    Irigation
                </div>
                <div className='t-col-3'>
                    18:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>
            <div className='row grey-row'>
                <div className='t-col-1'>
                    6
                </div>
                <div className='t-col-2'>
                    Harwesting
                </div>
                <div className='t-col-3'>
                    09:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    High
                </div>
            </div>
            <div className='row'>
                <div className='t-col-1'>
                    7
                </div>
                <div className='t-col-2'>
                    Placing
                </div>
                <div className='t-col-3'>
                    12:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    High
                </div>
            </div>
            <div className='row grey-row'>
                <div className='t-col-1'>
                    8
                </div>
                <div className='t-col-2'>
                    Watering
                </div>
                <div className='t-col-3'>
                    17:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>
            <div className='row'>
                <div className='t-col-1'>
                    9
                </div>
                <div className='t-col-2'>
                    Irigation
                </div>
                <div className='t-col-3'>
                    18:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>
            <div className='row grey-row'>
                <div className='t-col-1'>
                    10
                </div>
                <div className='t-col-2'>
                    Watering
                </div>
                <div className='t-col-3'>
                    17:00h
                </div>
                <div className='t-col-4'>
                    Link
                </div>
                <div className='t-col-5'>
                    Low
                </div>
            </div>

        </div>

    </div>
  );
}

export default Table;
