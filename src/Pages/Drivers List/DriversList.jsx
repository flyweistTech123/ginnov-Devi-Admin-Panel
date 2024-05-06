import React from 'react'
import './DriversList.css'
import HOC from '../../Components/HOC/HOC'



import { IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";



import img from '../../Image/img2.png'



const DriversList = () => {
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all your Cars</p>
                </div>
                <div className='dashboard2'>
                    <div className='driver'>
                        <div className='dashboard18'>
                            <div className='dashboard19'>
                                <h6>Driver List</h6>
                                <div className='dashboard20'>
                                    <div className='dashboard21'>
                                        <IoSearchSharp color='#32343E' size={20} />
                                        <input type="search" placeholder='Search by ID or name' />
                                    </div>
                                    <div className='dashboard22'>
                                        <VscFilter color='#32343E' size={20} />
                                        <p>Filter</p>
                                        <MdOutlineArrowDropDown color='#32343E' size={20} />
                                    </div>
                                    <div className='dashboard22'>
                                        <FaSortAmountUp color='#32343E' size={18} />
                                        <p>Sort</p>
                                        <MdOutlineArrowDropDown color='#32343E' size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className='dashboard24'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Phone No.</th>
                                            <th>Email ID</th>
                                            <th>Driving ID</th>
                                            <th>Gender</th>
                                            <th>Total Rides</th>
                                            <th>Join Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={img} alt="" />
                                            </td>
                                            <td>#0313131</td>
                                            <td>Jassi Singh</td>
                                            <td>+91 999887770</td>
                                            <td>Email@email.com</td>
                                            <td>DL1234567890</td>
                                            <td>Gender</td>
                                            <td>200</td>
                                            <td>4.5 <IoMdStar color='#FECE48' />(26+)</td>
                                            <td><RiDeleteBin6Line /></td>
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

                </div>
            </div>
        </>
    )
}

export default HOC(DriversList)