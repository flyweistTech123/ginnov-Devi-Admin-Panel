import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './FAQs.css'
import { useNavigate } from 'react-router-dom';






const AddFAQs = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='brands'>
                <div className='offer1'>
                    <h6>New FAQ</h6>
                    <button onClick={() => navigate('/faqs')}>Post FAQ</button>
                </div>

                <div className='brands1'>
                    <div className='addbrand'>
                        <div className='addbrand1'>
                            <div className='addbrand2'>
                                <label htmlFor="">Topic</label>
                                <input type="text" placeholder='Type here' />
                            </div>

                            <div className='addbrand2'>
                                <label htmlFor="">Body Text</label>
                                <textarea name="" id=""  rows="8"  placeholder='Type here'></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddFAQs)