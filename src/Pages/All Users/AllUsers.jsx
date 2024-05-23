import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import HOC from '../../Components/HOC/HOC'
import ReactApexChart from 'react-apexcharts';
import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'


import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { Dropdown } from 'react-bootstrap';




import img from '../../Image/us 1.png'




const AllUsers = () => {
  const [userdata, setUserData] = useState([]); 
  const [totaluser, setTotalUses] = useState('')
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);


  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/admin/profile`, getAuthHeaders())
      const userDataArray = Object.values(response.data.data); 
      setTotalUses(userDataArray.length)
      setUserData(userDataArray); 
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

  const filteredData = userdata.filter(user =>
    user?.user?.fullName && user?.user?.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <h6>All User List</h6>
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
                <div className='dashboard23'>
                  <p>View All</p>
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
                    <th>Email ID</th>
                    <th>User & host</th>
                    <th>Registration Date</th>
                    <th>KYC</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading users...</td>
                    </tr>
                  ) :
                    searchQuery && filteredData.length === 0 ? (
                      <tr>
                        <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>user not found</td>
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
                            <td>{user?.user?.userType}</td>
                            <td>{user?.memberSince}</td>
                            <td>
                              {user?.user?.isVerified ? (
                                <div className='dashboard27'>
                                  <IoMdCheckmark color='#FFFFFF' size={20} />
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
                            <td><MdMoreHoriz /></td>
                          </tr>
                        ))
                        : userdata?.map(user => (
                          <tr key={user.id}>
                            <td style={{ fontWeight: "700" }}>#0313131</td>
                            <td>{user?.user?.fullName}</td>
                            <td>{user?.user?.mobileNumber}</td>
                            <td>{user?.user?.email}</td>
                            <td>{user?.user?.userType}</td>
                            <td>{user?.memberSince}</td>
                            <td>
                              {user?.user?.isVerified ? (
                                <div className='dashboard27'>
                                  <IoMdCheckmark color='#FFFFFF' size={20} />
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
                            <td><MdMoreHoriz /></td>
                          </tr>
                        ))
                    )}

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

export default HOC(AllUsers)