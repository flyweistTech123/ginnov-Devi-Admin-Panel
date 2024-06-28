import React from 'react'
import './Navbar.css'

import { GoBell } from "react-icons/go";
import { BsFilterRight } from "react-icons/bs";


import img from '../../Image/img.png'

const Navbar = ({toggleSidebar}) => {
    return (
        <>
            <div className='navbar11'>
                <div className='navbar1'>
                    <div className='navbar2'>
                        <BsFilterRight  onClick={toggleSidebar} size={25} color='#000000'/>
                        <h6>Dashboard</h6>
                    </div>
                    <div className='navbar3'>
                        <div className='navbar4'>
                            <GoBell color='#000000' size={20} />
                            <div className='navbar5'>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='navbar6'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar