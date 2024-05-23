import React from 'react'
import './Taxreport.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';




import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";




const Taxreport = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Tax report</h6>
                        <button onClick={() => navigate('/addtaxreport')}>Add  New</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>All tax  report</h6>
                        </div>

                        <div className='offer3'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Booking amount</th>
                                        <th>Status</th>
                                        <th>TDS Percentage</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jassi Singh</td>
                                        <td>394003</td>
                                        <td>Enabled</td>
                                        <td>25%</td>
                                        <td>
                                            <div className='offer4'>
                                                <MdEdit color='#1C1B1F' />
                                                <RiDeleteBin6Line color='#EA5455' />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jassi Singh</td>
                                        <td>394003</td>
                                        <td>Enabled</td>
                                        <td>25%</td>
                                        <td>
                                            <div className='offer4'>
                                                <MdEdit color='#1C1B1F' />
                                                <RiDeleteBin6Line color='#EA5455' />
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

export default HOC(Taxreport)