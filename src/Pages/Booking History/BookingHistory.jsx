import React, { useEffect, useState } from 'react'
import './BookingHistory.css'
import HOC from '../../Components/HOC/HOC'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import { useParams } from 'react-router-dom';
import axios from 'axios';



import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";



import img from '../../Image/img2.png'





const BookingHistory = () => {
    const [bookingsdata, setBookingsData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AllBookings();
    }, [])



    const AllBookings = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/bookings`, getAuthHeaders());
            setBookingsData(response?.data?.data)

        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        };
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getUTCFullYear();

        return `${day}-${month}-${year}`;
    }

    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all bookings</p>
                </div>
                <div className='dashboard2'>
                    <div className='driver'>
                        <div className='dashboard18'>
                            <div className='dashboard19'>
                                <h6>Recent car bookings</h6>
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
                            <div className='dashboard244'>
                                <div className='dashboard24'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Car</th>
                                                <th>Vehicle No.</th>
                                                <th>Pickup and drop time</th>
                                                <th>Amount</th>
                                                <th>Type</th>
                                                <th>Pickup Location</th>
                                                <th>Drop Location</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="12" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading Bookings...</td>
                                                </tr>
                                            ) :
                                                bookingsdata.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="12" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Bookings not found</td>
                                                    </tr>
                                                ) :
                                                    bookingsdata.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <img src={item?.car?.owner?.image} alt="" />
                                                            </td>
                                                            <td>#{item?.uniqueBookinId}</td>
                                                            <td>{item?.car?.owner?.fullName}</td>
                                                            <td>{item?.car?.variant}</td>
                                                            <td>{item?.car?.licenseNumber}</td>
                                                            <td>
                                                                {formatDate(item.pickupDate)}{item.pickupTime}-<br />
                                                                {formatDate(item.dropOffDate)}{item.dropOffTime}
                                                            </td>
                                                            <td>{item.totalPrice}</td>
                                                            <td>{item.isRental ? "Rent" : item.isSharingBooking ? "Sharing" : "subscription"}</td>
                                                            <td>{item?.pickupLocation?.name}</td>
                                                            <td>{item?.dropOffLocation?.name}</td>
                                                            <td>{item?.status}</td>
                                                        </tr>
                                                    ))
                                            }
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
            </div>
        </>
    )
}

export default HOC(BookingHistory)