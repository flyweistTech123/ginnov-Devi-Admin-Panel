import React from 'react'
import './NewsReport.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';




import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import img from '../../Image/img2.png'


const NewsReport = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Notice/ News Report</h6>
                        <button onClick={() => navigate('/addnewsreport')}>Add  New</button>
                    </div>
                    <div className='offer'>
                        <div className='offer2'>
                            <h6>List</h6>
                        </div>

                        <div className='offer3'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Notice or News</th>
                                        <th>Viewer</th>
                                        <th>Start Date</th>
                                        <th>End date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={img} alt="" />
                                        </td>
                                        <td>
                                            <div className='newsReport'>
                                                Lorem ipsum dolor sit amet
                                            </div>
                                        </td>
                                        <td>New Users</td>
                                        <td>01/02/2024</td>
                                        <td>24/02/2024</td>
                                        <td>
                                            <div className='offer4'>
                                                <MdEdit color='#1C1B1F' />
                                                <RiDeleteBin6Line color='#EA5455' />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={img} alt="" />
                                        </td>
                                        <td>
                                            <div className='newsReport'>
                                                Lorem ipsum dolor sit
                                            </div>
                                        </td>
                                        <td>New Users</td>
                                        <td>01/02/2024</td>
                                        <td>24/02/2024</td>
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

export default HOC(NewsReport)