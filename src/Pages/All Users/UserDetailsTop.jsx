import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import img from '../../Image/img16.png'
import { AiOutlineRise } from "react-icons/ai";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'



const UserDetailsTop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [userdata, setUserData] = useState({});
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [state, setState] = useState('')
    const [profileimg, setProfileImage] = useState('');
    const [status, setStatus] = useState(false)
    const [wallet, setWallet] = useState('')
    const [userid, setUserId] =useState('')



    useEffect(() => {
        Userdetails();
    }, [])




    const Userdetails = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/profile/${id}`, getAuthHeaders());
            setUserData(response?.data?.data.user)
            setUserId(userdata?._id)
            setName(userdata?.fullName)
            setEmail(userdata?.email)
            setNumber(userdata?.mobileNumber)
            setState(userdata?.state)
            setProfileImage(userdata?.image)
            setWallet(userdata?.wallet)
            setStatus(userdata?.accountVerification)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        setUserId(userdata?._id)
        setName(userdata?.fullName)
        setEmail(userdata?.email)
        setNumber(userdata?.mobileNumber)
        setState(userdata?.state)
        setProfileImage(userdata?.image)
        setWallet(userdata?.wallet)
        setStatus(userdata?.accountVerification)
    }, [userdata])


    return (
        <>
            <div className='dashboard'>
                <div className='hostprofile'>
                    <h5>User Profile</h5>
                    <div className='hostprofile1'>
                        <div className='hostprofile2'>
                            <div className='hostprofile3'>
                                <img src={profileimg} alt="" />
                            </div>
                            <div className='hostprofile4'>
                                <h6>{name}</h6>
                                <p>{email}</p>
                                <p>{number}</p>
                            </div>
                        </div>
                        <div className='hostprofile5'>
                            <div className='dashboard4'>
                                <p>Total Revenue</p>
                                <div className='dashboard5'>
                                    <h6>₹ {wallet}</h6>
                                    <span>+11.02% <AiOutlineRise /></span>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>Location</p>
                                <div className='dashboard5'>
                                    <h6>{state}</h6>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>Status</p>
                                <div className='dashboard5'>
                                    <h6>{status ? "Verified" : "Pending"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hostprofile6">
                        <div className="hostprofile7">
                            {/* <p className={location.pathname === "/referralhistory" ? "hostprofile8" : "hostprofile9"} onClick={() => navigate("/referralhistory")}>Referral History</p> */}
                            <p className={location.pathname === `/userbookings/${userid}` ? "hostprofile8" : "hostprofile9"} onClick={() => navigate(`/userbookings/${userid}`)}>Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailsTop