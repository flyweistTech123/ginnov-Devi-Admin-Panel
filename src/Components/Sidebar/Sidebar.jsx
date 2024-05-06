import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { TbIndentDecrease } from "react-icons/tb";




const Sidebar = ({toggleSidebar}) => {

    const sidebarItems = [
        { text: 'Dashboard', link: '/' },
        { text: 'Host List', link: '/hostlist' },
        { text: 'Brands', link: '/drivers' },
        { text: 'Drivers List', link: '/driverslist' },
        { text: 'Booking History', link: '/bookinghistory' },
        { text: 'Offer', link: '/Offer' },
        { text: 'All Cars', link: '/allcars' },
        { text: 'Passengers List', link: '/allcarbookinglist' },
        { text: 'FAQs', link: '/drivers' },
        { text: 'Reports', link: '/drivers' },
        { text: 'Tax Reports', link: '/taxreport' },
        { text: 'QC', link: '/drivers' },
        { text: 'Admin', link: '/drivers' },
        { text: 'all car details', link: '/allcardetails' },
    ];

    const [activeLink, setActiveLink] = useState(null);

    const handleItemClick = (index) => {
        setActiveLink(index);
    };



    return (
        <>
            <div className='sidebar'>
                <div className='sidebar1'>
                    <div className='sidebar2'>
                        <h6>Logo</h6>
                    </div>
                    <div className='sidebar3'>
                        <TbIndentDecrease color='#FFFFFF' size={25}  onClick={toggleSidebar}/>
                    </div>
                    <div className='sidebar4'>
                        <p>Main</p>
                    </div>

                    <div className='sidebar5'>
                        {sidebarItems.map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                                className={`sidebar-link ${activeLink === index ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className='sidebar6'>
                                    <p>{item.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar