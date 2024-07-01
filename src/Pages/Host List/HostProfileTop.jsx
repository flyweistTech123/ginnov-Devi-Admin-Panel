import React, { useEffect, useState } from 'react'
import './HostList.css'
import img from '../../Image/img16.png'
import { AiOutlineRise } from "react-icons/ai";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'



const HostProfileTop = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='dashboard'>
                <div className='hostprofile'>
                    <div className='hostprofile1'>
                        <div className='hostprofile2'>
                            <div className='hostprofile3'>
                                <img src={data?.image} alt="" />
                            </div>
                            <div className='hostprofile4'>
                                <h6>{data?.fullName}</h6>
                                <p>{data?.email}</p>
                                <p>{data?.mobileNumber}</p>
                            </div>
                        </div>
                        <div className='hostprofile5'>
                            <div className='dashboard4'>
                                <p>Total Revenue</p>
                                <div className='dashboard5'>
                                    <h6>₹ {data?.wallet}</h6>
                                    <span>+11.02% <AiOutlineRise /></span>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>Location</p>
                                <div className='dashboard5'>
                                    <h6>{data?.state}</h6>
                                </div>
                            </div>
                            <div className='dashboard4'>
                                <p>KYC Status</p>
                                <div className='dashboard5'>
                                    <h6>{data?.documentVerification}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HostProfileTop