import React, { useEffect, useState } from 'react'
import './Offer.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import axios from 'axios'



import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import { AddOffers } from './AddOffer'


const Offer = () => {
    const [offers, setoffers] = useState('')
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate()



    const fetchOffer = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/offers`, getAuthHeaders())
            const offersdata = Object.values(response.data.data);
            setoffers(offersdata);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        };
    }


    useEffect(() => {
        fetchOffer(); // Fetch user data on component mount
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const formattedDate = `${date.getDate().toString().padStart(2, '0')} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        return `${formattedDate} `;
    };


    return (
        <>
            <AddOffers
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='dashboard'>
                <div className='dashboard2'>
                    <div className='offer1'>
                        <h6>Offers list</h6>
                        <button onClick={() =>setModalShow(true)}>Add  New</button>
                    </div>
                    <div className='offer'>
                        <div className='dashboard244'>
                            <div className='dashboard24'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Content</th>
                                            <th>Quantity</th>
                                            <th>Dicound</th>
                                            <th>Target Users</th>
                                            <th>Description</th>
                                            <th>Start Date</th>
                                            <th>End date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading users...</td>
                                            </tr>
                                        ) : offers?.map(offer => (
                                            <tr>
                                                <td>#00213395626626</td>
                                                <td>{offer?.title}</td>
                                                <td>200</td>
                                                <td>{offer?.discountPercentage}%</td>
                                                <td>{offer?.targetUsers}</td>
                                                <td>{offer?.description}</td>
                                                <td>{formatDate(offer?.createdAt)}</td>
                                                <td>{formatDate(offer?.validUntil)}</td>
                                                <td>
                                                    <div className='offer4'>
                                                        <MdEdit color='#1C1B1F' />
                                                        <RiDeleteBin6Line color='#EA5455' />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Offer)