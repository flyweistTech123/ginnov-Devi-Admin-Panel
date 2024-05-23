import React from 'react'
import './Admin.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import img from '../../Image/img12.png'
import img2 from '../../Image/img14.png'
import img3 from '../../Image/img15.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const AddAdminRole = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Administrator</h6>
                </div>

                <div className='report'>
                    <h6>Administrator roles available</h6>
                    <p>A role provide access to predefined menus and features so that depending on the assigned (Admin/ Sub-admin) an administrator can have access to what he needs.</p>
                </div>


                <div className='admin1'>
                    <div className='admin2'>
                        <div className='admin3'>
                            <p>1 ACCOUNT</p>

                            <div className='admin4'>
                                <img src={img} alt="" />
                            </div>
                        </div>

                        <div className='admin7'>
                            <h6>Admin</h6>
                            <p>Default Permissions</p>
                        </div>
                    </div>
                    <div className='admin2'>
                        <div className='admin3'>
                            <p>8 ACCOUNT</p>

                            <div className='admin4'>
                                <img src={img} alt="" />
                                <img src={img3} alt="" className='admin6' />
                                <img src={img2} alt="" className='admin5' />
                            </div>
                        </div>

                        <div className='admin7'>
                            <h6>Sub - Admin</h6>
                            <p>Default Permissions</p>
                        </div>
                    </div>
                    <div className='offer1'>
                        <button onClick={() => navigate('/addadminrole')}>Add new role</button>
                    </div>
                </div>



                <div className='admin8'>
                    <div className='admin12'>
                        <h6>Administrator roles available</h6>
                        <p>A role provide access to predefined menus and features so that depending on the assigned (Admin/ Sub-admin) an administrator can have access to what he needs.</p>
                    </div>
                    <div className='admin9'>
                        <div className='admin10'>
                            <p>All Admin List (9)</p>
                            <span>Sub- Admin (8)</span>
                        </div>
                        <div className='admin11'>
                            <p>View All</p>
                        </div>
                    </div>
                    <div className='dashboard24'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Mail</th>
                                    <th>Role</th>
                                    <th>Password Update</th>
                                    <th>Last Active</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={img} alt="" />
                                    </td>
                                    <td>Jassi Singh</td>
                                    <td>+91 999887770</td>
                                    <td>Email@email.com</td>
                                    <td>Admin</td>
                                    <td>5 days ago</td>
                                    <td>Today</td>
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
                    <div className='dashboard28'>
                        <p>Showing 1-5 from 100</p>

                        <div className='dashboard29'>
                            <div className='dashboard30'>
                                <IoMdArrowDropleft color='#000000' />
                            </div>
                            <div className='dashboard31'>
                                <p>1</p>
                            </div>
                            <div className='dashboard31'>
                                <p>2</p>
                            </div>
                            <div className='dashboard31'>
                                <p>3</p>
                            </div>
                            <div className='dashboard31'>
                                <p>...</p>
                            </div>
                            <div className='dashboard30'>
                                <IoMdArrowDropright />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default HOC(AddAdminRole)