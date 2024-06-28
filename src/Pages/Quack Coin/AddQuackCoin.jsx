import React from 'react'
import './QuackCoin.css'
import HOC from '../../Components/HOC/HOC'

import { useNavigate } from 'react-router-dom';




const AddQuackCoin = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Quack Coin Percentage</h6>
                        <button onClick={()=>navigate('/quackcoin')}>Add</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>Create new</h6>
                        </div>

                        <div className='quackcoin'>
                            <div className='quackcoin1'> 
                                <div className='quackcoin2'>
                                    <label htmlFor="">User Type</label>
                                    <select name="" id="">
                                        <option value="">New User</option>
                                        <option value="">Level 4</option>
                                        <option value="">Level 5</option>
                                        <option value="">Level 6</option>
                                        <option value="">Level 8</option>
                                    </select>
                                </div>
                                <div className='quackcoin2'>
                                    <label htmlFor="">Percentage</label>
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

export default HOC(AddQuackCoin)