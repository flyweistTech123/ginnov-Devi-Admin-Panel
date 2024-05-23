import React from 'react'
import './Admin.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';


import { BsCircleFill } from "react-icons/bs";






const Admin = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Administrator</h6>
                </div>

                <div className='report'>
                    <h6>Administrator roles available</h6>
                    <p>A role provide access to predefined menus and features so that depending on the assigned (Admin/ Sub-admin) an administrator can have access to what he needs.</p>
                </div>


                <div className='admin1'>
                    <div className='admin2'>
                        <div className='admin3'>
                            <p>0 ACCOUNT</p>

                            <div className='admin4'>
                                <BsCircleFill color='#C4C4C4' size={25} />
                                <BsCircleFill color='#E0E2E7CC' size={25} className='admin6' />
                                <BsCircleFill color='#b4b4b440' size={25} className='admin5' />
                            </div>
                        </div>

                        <div className='admin7'>
                            <h6>Admin</h6>
                            <p>Default Permissions</p>
                        </div>
                    </div>
                    <div className='admin2'>
                        <div className='admin3'>
                            <p>0 ACCOUNT</p>

                            <div className='admin4'>
                                <BsCircleFill color='#C4C4C4' size={25} />
                                <BsCircleFill color='#E0E2E7CC' size={25} className='admin6' />
                                <BsCircleFill color='#b4b4b440' size={25} className='admin5' />
                            </div>
                        </div>

                        <div className='admin7'>
                            <h6>Sub - Admin</h6>
                            <p>Default Permissions</p>
                        </div>
                    </div>
                    <div className='offer1'>
                        <button onClick={()=>navigate('/addadminrole')}>Add new role</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(Admin)