import React, { useState } from 'react'
import './Offer.css'
import HOC from '../../Components/HOC/HOC'

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import axios from 'axios';
import Modal from "react-bootstrap/Modal";




export function AddOffers(props) {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [targetusers, setTargetUsers] = useState('');
    const [validUntil, setValidUntil] = useState('')


    const updateuser = async () => {

        const userdertails = {
            // fullName: name,
            // mobileNumber: number,
            // email: email,
            // documentVerification: kycstatus,
            // documentRemarks: remark,
        };
        try {
            await axios.put(`${BaseUrl}/admin/update/user/${id}`, userdertails, getAuthHeaders());
            // setModalShow1(false)
        } catch (error) {
            console.error('Error updating User details:', error);
            toast.error("Failed to update User details. Please try again later.");
        }
    };


    const handleclick = (e) => {
        e.preventDefault();
        updateuser()
        toast.success("User Details Updated successfully");
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='adminprofileupdate'>
                <Modal.Title id="contained-modal-title-vcenter">Add Offer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className='userprofile7'>
                        <div className='userprofile8'>
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder='Enter offer title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">Code</label>
                            <input type="text" placeholder='Enter offer code' value={code} onChange={(e) => setCode(e.target.value)} />
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">Discount</label>
                            <input type="number" placeholder='Enter discount percentage' value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} />
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">Quantity</label>
                            <input type="number" placeholder='Enter discount quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">Start date</label>
                            <input type="date" placeholder='Enter discount quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">End date</label>
                            <input type="date" placeholder='Enter discount quantity' value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
                        </div>
                    </div>
                    <div className='offer5'>
                        <div className='userprofile8'>
                            <label htmlFor="">Target Users</label>
                            <div className='offer6'>
                                <div className='offer7'>
                                    <input type="radio" name="status" checked={targetusers === "NewUsers"} onChange={() => setTargetUsers("NewUsers")} />
                                    <label htmlFor="">New Users</label>
                                </div>
                                <div className='offer7'>
                                    <input type="radio" name="status" checked={targetusers === "AllUsers"} onChange={() => setTargetUsers("AllUsers")} />
                                    <label htmlFor="">All Users</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='offer5'>
                        <div className='userprofile8'>
                            <label htmlFor="">Description</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>


                    <div className='userprofile10'>
                        <div className='userprofile2'>
                            <button onClick={handleclick}>Add</button>
                        </div>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    );
}
