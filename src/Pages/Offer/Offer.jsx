import React from 'react'
import './Offer.css'
import HOC from '../../Components/HOC/HOC'




import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";




const Offer = () => {
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Offer</h6>
                        <button>Add  New</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>List</h6>
                        </div>

                        <div className='offer3'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Content</th>
                                        <th>Quantity</th>
                                        <th>Dicound</th>
                                        <th>Start Date</th>
                                        <th>End date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#00213395626626</td>
                                        <td>New Users</td>
                                        <td>200</td>
                                        <td>40%</td>
                                        <td>01/02/2024</td>
                                        <td>24/02/2024</td>
                                        <td>
                                            <div className='offer4'>
                                                <MdEdit color='#1C1B1F' />
                                                <RiDeleteBin6Line  color='#EA5455' />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#00213395626626</td>
                                        <td>New Users</td>
                                        <td>200</td>
                                        <td>40%</td>
                                        <td>01/02/2024</td>
                                        <td>24/02/2024</td>
                                        <td>
                                            <div className='offer4'>
                                                <MdEdit color='#1C1B1F' />
                                                <RiDeleteBin6Line  color='#EA5455' />
                                            </div>
                                        </td>
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

export default HOC(Offer)