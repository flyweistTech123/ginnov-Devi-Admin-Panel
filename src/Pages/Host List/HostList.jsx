import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'



import { MdMoreHoriz } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";




const HostList = () => {
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all your Cars</p>
                </div>
                <div className='dashboard2'>
                    <div className='dashboard18'>
                        <div className='dashboard19'>
                            <h6>Host list</h6>
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
                                        <th>User ID</th>
                                        <th>Name</th>
                                        <th>Phone No.</th>
                                        <th>Total Cars</th>
                                        <th>Total Bookings</th>
                                        <th>Registration Date</th>
                                        <th>Owner KYC</th>
                                        <th>Vehicle KYC</th>
                                        <th>Location</th>
                                        <th>Rating</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ fontWeight: "700" }}>#0313131</td>
                                        <td>Jassi Singh</td>
                                        <td>+91 999887770</td>
                                        <td>30</td>
                                        <td>20</td>
                                        <td>04/03/24</td>
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>Delhi</td>
                                        <td>4.5 <IoMdStar color='#FECE48' /></td>
                                        <td>Active</td>
                                        <td><MdMoreHoriz /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "700" }}>#0313131</td>
                                        <td>Jassi Singh</td>
                                        <td>+91 999887770</td>
                                        <td>30</td>
                                        <td>20</td>
                                        <td>04/03/24</td>
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>
                                        <td>Delhi</td>
                                        <td>4.5 <IoMdStar color='#FECE48' /></td>
                                        <td>Active</td>
                                        <td><MdMoreHoriz /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "700" }}>#0313131</td>
                                        <td>Jassi Singh</td>
                                        <td>+91 999887770</td>
                                        <td>30</td>
                                        <td>20</td>
                                        <td>04/03/24</td>
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>  
                                        <td>
                                            <div className='dashboard27'>
                                                <IoMdCheckmark color='#FFFFFF' size={20} />
                                                <p>Done</p>
                                            </div>
                                        </td>                    
                                        <td>Delhi</td>
                                        <td>4.5 <IoMdStar color='#FECE48' /></td>
                                        <td>Active</td>
                                        <td><MdMoreHoriz /></td>
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
        </>
    )
}

export default HOC(HostList)