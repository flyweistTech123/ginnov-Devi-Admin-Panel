import React from 'react'
import './Taxreport.css'
import HOC from '../../Components/HOC/HOC'

import { useNavigate } from 'react-router-dom';




const AddTaxreport = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>TDS percentage</h6>
                        <button onClick={()=>navigate('/taxreport')}>Add</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>Create new</h6>
                        </div>

                        <div className='quackcoin'>
                            <div className='quackcoin1'> 
                                <div className='quackcoin2'>
                                    <label htmlFor="">Booking ammount</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">TDS Percentage (%)</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Status</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddTaxreport)