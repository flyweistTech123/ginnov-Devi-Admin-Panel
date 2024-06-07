import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from './TopPart';

import img from '../../Image/img23.png'




const HostOffers = () => {





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
                    <div className='hostprofile31'>
                        <h6>Offers by Car Owner</h6>
                    </div>

                    <div className='hostprofile32'>
                        <div className='hostprofile33'>
                            <div className='hostprofile34'>
                                <div className='hostprofile35'>
                                    <h6>Flat 20 % off</h6>
                                    <p>For all new users</p>
                                </div>
                                <div className='hostprofile36'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='hostprofile37'>
                                <p>See more</p>
                            </div>
                        </div>
                        <div className='hostprofile33'>
                            <div className='hostprofile34'>
                                <div className='hostprofile35'>
                                    <h6>Flat 20 % off</h6>
                                    <p>For all new users</p>
                                </div>
                                <div className='hostprofile36'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='hostprofile37'>
                                <p>See more</p>
                            </div>
                        </div>
                        <div className='hostprofile33'>
                            <div className='hostprofile34'>
                                <div className='hostprofile35'>
                                    <h6>Flat 20 % off</h6>
                                    <p>For all new users</p>
                                </div>
                                <div className='hostprofile36'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='hostprofile37'>
                                <p>See more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(HostOffers)