import React, { useEffect, useState } from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'

import { MdMoreHoriz } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";




import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const HostList = () => {
    const [hostdata, setHostData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/profile/by-userType?currentRole=PARTNER&userType=PARTNER`, getAuthHeaders())
            const userDataArray = Object.values(response.data.data);
            setHostData(userDataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        };
    }


    useEffect(() => {
        fetchUsers(); // Fetch user data on component mount
    }, [])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = hostdata.filter(user =>
        user?.user?.fullName && user?.user?.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const deleteusr = async (id) => {
        try {
            await axios.delete(`${BaseUrl}/admin/users/profile/delete/${id}`, getAuthHeaders());
            toast.success("User deleted Successfully!");
            fetchUsers();
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back</h6>
                    <p>Here is the information about all Host</p>
                </div>

                <div className='dashboard2'>
                    <div className='dashboard18'>
                        <div className='dashboard19'>
                            <h6>All Host List</h6>
                            <div className='dashboard20'>
                                <div className='dashboard21'>
                                    <IoSearchSharp color='#32343E' size={20} />
                                    <input type="search" placeholder='Search by ID or name' value={searchQuery}
                                        onChange={handleSearch} />
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



                        <div className='dashboard244'>
                            <div className='dashboard24'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Phone No.</th>
                                            <th>Email ID</th>
                                            <th>Total Cars</th>
                                            <th>Total Bookings</th>
                                            <th>Registration Date</th>
                                            <th>Owner KYC</th>
                                            <th>Vehicle KYC</th>
                                            <th>Location</th>
                                            <th>Rating</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading host...</td>
                                            </tr>
                                        ) :
                                            searchQuery && filteredData.length === 0 ? (
                                                <tr>
                                                    <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>host not found</td>
                                                </tr>
                                            ) : (

                                                searchQuery
                                                    ?
                                                    filteredData?.map(user => (
                                                        <tr key={user.id}>
                                                            <td style={{ fontWeight: "700" }}>#0313131</td>
                                                            <td>{user?.user?.fullName}</td>
                                                            <td>{user?.user?.mobileNumber}</td>
                                                            <td>{user?.user?.email}</td>
                                                            <td>{user?.memberSince}</td>
                                                            <td>
                                                                {user?.user?.accountVerification ? (
                                                                    <div className='dashboard27'>
                                                                        <p>Done</p>
                                                                    </div>
                                                                ) : (
                                                                    <div className='dashboard27' style={{ backgroundColor: "#ffd65a" }}>
                                                                        <p>Pending</p>
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td>{user?.user?.state}</td>
                                                            <td>4.5 <IoMdStar color='#FECE48' /></td>
                                                            <td>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="none" className="table-icon" >
                                                                        <MdMoreHoriz />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1" className='userdrop1'>
                                                                            <Link to={`/userProfile/${user?._id}`} className='linkfrop'>
                                                                                <div className='userdrop'>
                                                                                    <FaRegUser color='#000000' size={20} />
                                                                                    <p>View Profile</p>
                                                                                </div>
                                                                            </Link>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item href="#/action-1" className='userdrop1' onClick={() => deleteusr(user?._id)}>
                                                                            <div className='userdrop'>
                                                                                <RiDeleteBinLine color='#EA5455' size={20} />
                                                                                <p style={{ color: '#EA5455' }}>Delete entry</p>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    : hostdata?.map(user => (
                                                        <tr key={user.id}>
                                                            <td style={{ fontWeight: "700" }}>#0313131</td>
                                                            <td>{user?.user?.fullName}</td>
                                                            <td>{user?.user?.mobileNumber}</td>
                                                            <td>{user?.user?.email}</td>
                                                            <td>20</td>
                                                            <td>20</td>
                                                            <td>{user?.memberSince}</td>
                                                            <td>
                                                                <div className='dashboard27'
                                                                    style={{
                                                                        backgroundColor:
                                                                            user?.user?.documentVerification === 'PENDING' ? "#FECE48" :
                                                                                user?.user?.documentVerification === 'APPROVED' ? "#28C76F" :
                                                                                    user?.user?.documentVerification === 'HOLD' ? "#357ABD" :
                                                                                        "#F52D56"
                                                                    }}
                                                                >
                                                                    <p>{user?.user?.documentVerification}</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='dashboard27'
                                                                    style={{
                                                                        backgroundColor:
                                                                            user?.user?.documentVerification === 'PENDING' ? "#FECE48" :
                                                                                user?.user?.documentVerification === 'APPROVED' ? "#28C76F" :
                                                                                    user?.user?.documentVerification === 'HOLD' ? "#357ABD" :
                                                                                        "#F52D56"
                                                                    }}
                                                                >
                                                                    <p>{user?.user?.documentVerification}</p>
                                                                </div>
                                                            </td>
                                                            <td>{user?.user?.state}</td>
                                                            <td>4.5 <IoMdStar color='#FECE48' /></td>
                                                            <td>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="none" className="table-icon" >
                                                                        <MdMoreHoriz />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1" className='userdrop1'>
                                                                            <Link to={`/hostprofile/${user?._id}`} className='linkfrop'>
                                                                                <div className='userdrop'>
                                                                                    <FaRegUser color='#000000' size={20} />
                                                                                    <p>View Profile</p>
                                                                                </div>
                                                                            </Link>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item href="#/action-1" className='userdrop1' onClick={() => deleteusr(user?._id)}>
                                                                            <div className='userdrop'>
                                                                                <RiDeleteBinLine color='#EA5455' size={20} />
                                                                                <p style={{ color: '#EA5455' }}>Delete entry</p>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    ))
                                            )}

                                    </tbody>
                                </table>
                            </div>
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