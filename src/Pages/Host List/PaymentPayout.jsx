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




const PaymentPayout = () => {
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
                    <div className='hostprofile23'>
                        <div className='hostprofile24'>
                            <div className='hostprofile25'>
                                <label htmlFor="">Total Income</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                            <div className='hostprofile25'>
                                <label htmlFor="">Current Balance</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PaymentPayout)