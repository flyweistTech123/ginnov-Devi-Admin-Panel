import React from 'react'
import './NewsReport.css'
import HOC from '../../Components/HOC/HOC'

import { useNavigate } from 'react-router-dom';
import { LuUploadCloud } from "react-icons/lu";




const AddNewsReport = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Notice/ News report</h6>
                        <button onClick={() => navigate('/newsreport')}>Add</button>
                    </div>
                    <div className='newsReport'>
                        <div className='newsReport3'>
                            <h6>Create new</h6>
                        </div>
                        <div className='newsReport4'>
                            <div className='quackcoin2'>
                                <label htmlFor="">Image</label>
                                <div className='newsReport1'>
                                    <div className='newsReport2'>
                                        <LuUploadCloud color='#898A8D' />
                                        <p>Add Image</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='quackcoin'>
                            <div className='quackcoin1'>
                                <div className='quackcoin2'>
                                    <label htmlFor="">News or Notice (Messege)</label>
                                    <input type="text" name="" id="" placeholder='Type here' />
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Viewer</label>
                                    <input type="number" name="" id="" placeholder='Type here' />
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Start date</label>
                                    <input type="text" name="" id="" placeholder='Type here' />
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">End date</label>
                                    <input type="text" name="" id="" placeholder='Type here' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddNewsReport)