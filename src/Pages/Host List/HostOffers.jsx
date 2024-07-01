import React, { useEffect, useState } from 'react'
import './HostList.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'

import img from '../../Image/img23.png'




const HostOffers = () => {
    const id = useParams()
    const [hostoffers, setHostOffers] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        HostOffers();
    }, [])

    const HostOffers = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/host/partner/${id?.id}/offers`, getAuthHeaders());
            setHostOffers(response?.data?.data)

        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        };
    }


    return (
        <>
            <div className='dashboard'>
                <div className='hostprofile22'>
                    <div className='hostprofile31'>
                        <h6>Offers by Car Owner</h6>
                    </div>

                    <div className='hostprofile32'>
                        {loading ? (
                            <tr>
                                <td colSpan="12" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading offers...</td>
                            </tr>
                        ) :
                            hostoffers.length === 0 ? (
                                <tr>
                                    <td colSpan="12" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Offers not found</td>
                                </tr>
                            ) :
                                hostoffers.map((item, index) => (
                                    <div className='hostprofile33'>
                                        <div className='hostprofile34'>
                                            <div className='hostprofile35'>
                                                <h6>Flat {item.discount} % off</h6>
                                                <p>{item.type}</p>
                                            </div>
                                            <div className='hostprofile36'>
                                                <img src={img} alt="" />
                                            </div>
                                        </div>
                                        <div className='hostprofile37'>
                                            <p>See more</p>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HostOffers