import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import TopPart1 from './TopPart1';


import { FaSortAmountUp } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";




const ReferralHistory = () => {
    const dummyData = [
        {
            "id": "#0313131",
            "Name": "Jassi Singh",
            "Car": "Maruti Swift",
            "Referrallevel": "19002",
            "Referralamount": "2000",
            "Referrealdate": "03 November 2024",
            "Time": "8:00 PM",
        },
        {
            "id": "#0313131",
            "Name": "Jassi Singh",
            "Car": "Maruti Swift",
            "Referrallevel": "19002",
            "Referralamount": "2000",
            "Referrealdate": "03 November 2024",
            "Time": "8:00 PM",
        },
        {
            "id": "#0313131",
            "Name": "Jassi Singh",
            "Car": "Maruti Swift",
            "Referrallevel": "19002",
            "Referralamount": "2000",
            "Referrealdate": "03 November 2024",
            "Time": "8:00 PM",
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
                    <TopPart1 />
                </div>

                <div className='hostprofile22'>
                    <div className='hostprofile27'>
                        <div className='hostprofile30'>
                            <div className='dashboard19'>
                                <h6>Referral History</h6>
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
                                            <th>Car</th>
                                            <th>Referral level</th>
                                            <th>Referral amount (INR)</th>
                                            <th>Referreal date</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Car}</td>
                                                <td>{item.Referrallevel}</td>
                                                <td>{item.Referralamount}</td>
                                                <td>{item.Referrealdate}</td>
                                                <td>{item.Time}</td>
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

export default HOC(ReferralHistory)