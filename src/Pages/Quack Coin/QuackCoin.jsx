import React from 'react'
import './QuackCoin.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';





const QuackCoin = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Quack Coin</h6>
                        <button onClick={()=>navigate('/addquackcoin')}>Add  New</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>List</h6>
                        </div>

                        <div className='offer3'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User Type</th>
                                        <th>Dicound</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>New Users</td>
                                        <td>40%</td>
                                    </tr>
                                    <tr>
                                        <td>New Users</td>
                                        <td>25%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(QuackCoin)