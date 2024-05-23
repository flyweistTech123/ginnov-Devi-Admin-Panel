import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from './TopPart';
import img from '../../Image/img17.png'
import img1 from '../../Image/img18.png'
import img2 from '../../Image/img19.png'
import img3 from '../../Image/img20.png'
import img4 from '../../Image/img21.png'


import { MdOutlineMoreVert } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { BiSolidNavigation } from "react-icons/bi";
import { BsFillClockFill } from "react-icons/bs";




const HostProfile = () => {
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

                <div className='hostprofile10'>
                    <div className='hostprofile11'>
                        <div className='hostprofile12'>
                            <div className='hostprofile13'>
                                <img src={img} alt="" />
                            </div>
                            <div className='hostprofile14'>
                                <h6>Nexon MT DL05PQ1234 <span>(5 Seater)</span></h6>
                                <MdOutlineMoreVert color='#1C1B1F' size={20} />
                            </div>

                            <div className='hostprofile15'>
                                <h6>Total</h6>
                                <h5>₹ 300<span>/Day</span> </h5>
                            </div>

                            <div className='hostprofile16'>
                                <div className='hostprofile17'>
                                    <p>4.96  <IoStarSharp color='#FFCE2B' size={20} /></p>
                                    <span>(255 Ratings)</span>
                                </div>

                                <div className='hostprofile18'>
                                    <BiSolidNavigation color='#000000' />
                                    <h6>View GPS Track</h6>
                                </div>
                            </div>
                        </div>

                        <div className='hostprofile199'>
                            <div className='hostprofile19'>
                                <BsFillClockFill color='#16A583' size={45} />
                                <div className='hostprofile20'>
                                    <p>Whiteboard Tenure</p>
                                    <h6>6th jul ‘23 to 7th jul ‘26</h6>
                                </div>
                                <div className='hostprofile21'>
                                    <p>36 months</p>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img1} alt="" />
                                <div className='hostprofile20'>
                                    <p>Fuel Type</p>
                                    <h6>Diesel</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img2} alt="" />
                                <div className='hostprofile20'>
                                    <p>Transmission</p>
                                    <h6>Manual</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img3} alt="" />
                                <div className='hostprofile20'>
                                    <p>GST</p>
                                    <h6>Not Registered</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img4} alt="" />
                                <div className='hostprofile20'>
                                    <p>Total Kms Driven</p>
                                    <h6>260km</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img4} alt="" />
                                <div className='hostprofile20'>
                                    <p>RC</p>
                                    <h6>Verified</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hostprofile11'>
                        <div className='hostprofile12'>
                            <div className='hostprofile13'>
                                <img src={img} alt="" />
                            </div>
                            <div className='hostprofile14'>
                                <h6>Nexon MT DL05PQ1234 <span>(5 Seater)</span></h6>
                                <MdOutlineMoreVert color='#1C1B1F' size={20} />
                            </div>

                            <div className='hostprofile15'>
                                <h6>Total</h6>
                                <h5>₹ 300<span>/Day</span> </h5>
                            </div>

                            <div className='hostprofile16'>
                                <div className='hostprofile17'>
                                    <p>4.96  <IoStarSharp color='#FFCE2B' size={20} /></p>
                                    <span>(255 Ratings)</span>
                                </div>

                                <div className='hostprofile18'>
                                    <BiSolidNavigation color='#000000' />
                                    <h6>View GPS Track</h6>
                                </div>
                            </div>
                        </div>
                        <div className='hostprofile199'>
                            <div className='hostprofile19'>
                                <BsFillClockFill color='#16A583' size={45} />
                                <div className='hostprofile20'>
                                    <p>Whiteboard Tenure</p>
                                    <h6>6th jul ‘23 to 7th jul ‘26</h6>
                                </div>
                                <div className='hostprofile21'>
                                    <p>36 months</p>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img1} alt="" />
                                <div className='hostprofile20'>
                                    <p>Fuel Type</p>
                                    <h6>Diesel</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img2} alt="" />
                                <div className='hostprofile20'>
                                    <p>Transmission</p>
                                    <h6>Manual</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img3} alt="" />
                                <div className='hostprofile20'>
                                    <p>GST</p>
                                    <h6>Not Registered</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img4} alt="" />
                                <div className='hostprofile20'>
                                    <p>Total Kms Driven</p>
                                    <h6>260km</h6>
                                </div>
                            </div>
                            <div className='hostprofile19'>
                                <img src={img4} alt="" />
                                <div className='hostprofile20'>
                                    <p>RC</p>
                                    <h6>Verified</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(HostProfile)