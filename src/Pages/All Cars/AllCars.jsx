import React, {useEffect,  useState } from 'react'
import './AllCars.css'
import HOC from '../../Components/HOC/HOC'
import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'


import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";



import img from '../../Image/img2.png'



const AllCars = () => {
    const [cardata, setCarData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);


    const fetchCars = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/car/allCars`, getAuthHeaders())
            const carDataArray = Object.values(response.data.data);
            setCarData(carDataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        };
    }

    useEffect(() => {
        fetchCars(); // Fetch user data on component mount
    }, [])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = cardata.filter(car =>
        car?.user?.fullName && car?.user?.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                                <h6>All Cars Revenue List</h6>
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
                                            <th>ID</th>
                                            <th>Car</th>
                                            <th>Brand</th>
                                            <th>Vehicle No.</th>
                                            <th>Owner Name</th>
                                            <th>Documentations</th>
                                            <th>Total Revenue </th>
                                            <th>Location</th>
                                            <th>Status</th>
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
                                                        <tr>
                                                            <td>
                                                                <img src={img} alt="" />
                                                            </td>
                                                            <td>#0313131</td>
                                                            <td>Maruti Swift</td>
                                                            <td>Maruti</td>
                                                            <td>RJ14TF1200</td>
                                                            <td>James Bond</td>
                                                            <td>Done</td>
                                                            <td>₹20,321</td>
                                                            <td>Delhi</td>
                                                            <td>Active</td>
                                                            <td><RiDeleteBin6Line /></td>
                                                        </tr>
                                                    ))
                                                    : cardata?.map(user => (
                                                        <tr>
                                                            <td>
                                                                <img src={img} alt="" />
                                                            </td>
                                                            <td>#0313131</td>
                                                            <td>Maruti Swift</td>
                                                            <td>Maruti</td>
                                                            <td>RJ14TF1200</td>
                                                            <td>James Bond</td>
                                                            <td>Done</td>
                                                            <td>₹20,321</td>
                                                            <td>Delhi</td>
                                                            <td>Active</td>
                                                            <td><RiDeleteBin6Line /></td>
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
            </div>
        </>
    )
}

export default HOC(AllCars)