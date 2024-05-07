import React from 'react'
import './Offer.css'
import HOC from '../../Components/HOC/HOC'

import { useNavigate } from 'react-router-dom';




const AddOffer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Offer Card</h6>
                        <button onClick={()=>navigate('/offer')}>Add</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>Create new</h6>
                        </div>

                        <div className='quackcoin'>
                            <div className='quackcoin1'> 
                                <div className='quackcoin2'>
                                    <label htmlFor="">Content</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Code</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Discount</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Quantity</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Start date</label>
                                    <input type="number" name="" id=""  placeholder='Type here'/>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">End date</label>
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

export default HOC(AddOffer)