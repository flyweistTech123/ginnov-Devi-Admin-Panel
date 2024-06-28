import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TbIndentDecrease } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Sidebar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
        { text: 'Dashboard', link: '/dashboard' },
        { text: 'Users', link: '/allusers' },
        { text: 'Host List', link: '/hostlist' },
        { text: 'Brands', link: '/brands' },
        { text: 'Drivers List', link: '/driverslist' },
        { text: 'Booking History', link: '/bookinghistory' },
        { text: 'Offer', link: '/Offer' },
        { text: 'All Cars', link: '/allcars' },
        { text: 'Passengers List', link: '/allcarbookinglist' },
        { text: 'FAQs', link: '/faqs' },
        { text: 'Reports', link: '/report' },
        { text: 'Tax Reports', link: '/taxreport' },
        { text: 'QC', link: '/quackcoin' },
        { text: 'Admin', link: '/admin' },
        { text: 'All Car Details', link: '/allcardetails' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logout successfully');
        navigate('/');
    };

    return (
        <div className="sidebar">
            <div className="sidebar1">
                <div className="sidebar2">
                    <h6>Logo</h6>
                </div>
                <div className="sidebar3">
                    <TbIndentDecrease color="#FFFFFF" size={25} onClick={toggleSidebar} />
                </div>
                <div className="sidebar4">
                    <p>Main</p>
                </div>

                <div className="sidebar5">
                    {sidebarItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className="sidebar-link"
                            activeClassName="active"
                        >
                            <div className="sidebar6">
                                <p>{item.text}</p>
                            </div>
                        </NavLink>
                    ))}

                    <div className="sidebar7">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
