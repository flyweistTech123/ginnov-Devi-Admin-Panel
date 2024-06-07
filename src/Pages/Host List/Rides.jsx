import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from './TopPart';


import { RiDeleteBin6Line } from "react-icons/ri";

import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import img from '../../Image/img22.png'



const Rides = () => {
    const dummyData = [
        {
            "image": img,
            "id": "#0313131",
            "name": "Ford EcoSport",
            "passengerName": "Jassi Singh",
            "pickupDropLocation": "Delhi - Delhi",
            "type": "Rent",
            "mode": "With Driver",
            "pickDropTime": "03 Nov 8:00 PM - 04 Nov 10:00 AM",
            "price": "₹12,300",
            "status": "Completed",
            "action": "delete"
        },
        {
            "image": img,
            "id": "#0313132",
            "name": "Honda Civic",
            "passengerName": "Aman Sharma",
            "pickupDropLocation": "Mumbai - Pune",
            "type": "Rent",
            "mode": "Without Driver",
            "pickDropTime": "01 Dec 6:00 AM - 01 Dec 6:00 PM",
            "price": "₹10,000",
            "status": "In Progress",
            "action": "delete"
        },
        {
            "image": img,
            "id": "#0313133",
            "name": "Toyota Innova",
            "passengerName": "Rohit Verma",
            "pickupDropLocation": "Chennai - Bangalore",
            "type": "Rent",
            "mode": "With Driver",
            "pickDropTime": "12 Oct 9:00 AM - 13 Oct 9:00 PM",
            "price": "₹15,500",
            "status": "Cancelled",
            "action": "delete"
        }
    ];




    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all your Cars</p>
                </div>
                <div>
                    <TopPart />
                </div>

                <div className='hostprofile22'>
                    <div className='hostprofile27'>
                        <div className='hostprofile30'>
                            <div className='dashboard19'>
                                <h6>Past Bookings</h6>
                                <div className='dashboard20'>
                                    <div className='dashboard21'>
                                        <IoSearchSharp color='#32343E' size={20} />
                                        <input type="search" placeholder='Search by ID or name'
                                        />
                                    </div>
                                    <div className='dashboard22'>
                                        <VscFilter color='#32343E' size={20} />
                                        <p>Filter</p>
                                        <MdOutlineArrowDropDown color='#32343E' size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className='dashboard24'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Passenger Name</th>
                                            <th>Pickup and drop location</th>
                                            <th>Type</th>
                                            <th>Mode</th>
                                            <th>Pick and drop time</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.image} alt="Vehicle" />
                                                </td>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.passengerName}</td>
                                                <td>{item.pickupDropLocation}</td>
                                                <td>{item.type}</td>
                                                <td>{item.mode}</td>
                                                <td>{item.pickDropTime}</td>
                                                <td>{item.price}</td>
                                                <td>{item.status}</td>
                                                <td><RiDeleteBin6Line color='#1C1B1F' size={20} /></td>
                                            </tr>
                                        ))}
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

export default HOC(Rides)