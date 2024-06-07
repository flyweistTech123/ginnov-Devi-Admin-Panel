import React from 'react'
import './HostList.css'
import img from '../../Image/img16.png'
import { AiOutlineRise } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";



const TopPart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className='dashboard'>
                <div className='hostprofile'>
                    <h5>Host Profile</h5>
                    <div className='hostprofile1'>
                        <div className='hostprofile2'>
                            <div className='hostprofile3'>
                                <img src={img} alt="" />
                            </div>
                            <div className='hostprofile4'>
                                <h6>Adam Smith</h6>
                                <p>abc123@gmail.com</p>
                                <p>8686868686</p>
                            </div>
                        </div>
                        <div className='hostprofile5'>
                            <div className='dashboard4'>
                                <p>Total Revenue</p>
                                <div className='dashboard5'>
                                    <h6>₹ 2210</h6>
                                    <span>+11.02% <AiOutlineRise /></span>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>Location</p>
                                <div className='dashboard5'>
                                    <h6>Delhi</h6>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>Status</p>
                                <div className='dashboard5'>
                                    <h6>Active</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hostprofile6">
                        <div className="hostprofile7">
                            <p className={location.pathname === "/hostprofile" ? "hostprofile8" : "hostprofile9"} onClick={() => navigate("/hostprofile")}>Listed Cars</p>
                            <p className={location.pathname === "/paymentpayout" ? "hostprofile8" : "hostprofile9"} onClick={() => navigate("/paymentpayout")}>Payment and Payout</p>
                            <p className={location.pathname === "/rides" ? "hostprofile8" : "hostprofile9"} onClick={() => navigate("/rides")}>Rides</p>
                            <p className={location.pathname === "/hostOffers" ? "hostprofile8" : "hostprofile9"} onClick={() => navigate("/hostOffers")}>Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopPart