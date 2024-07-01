import React, { useEffect, useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import './Brands.css'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'

import { useNavigate, useParams } from 'react-router-dom';


import { FiUploadCloud } from "react-icons/fi";
import axios from 'axios';
import { toast } from 'react-toastify';


const triggerFileInput = () => {
    document.getElementById('fileInput').click();
};


const EditBrands = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [brandname, setBrandName] = useState('');
    const [brandimage, setBrandImage] = useState('');


    useEffect(() => {
        const fetchBrandDetails = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/admin/brand/${id}`, getAuthHeaders());
                const { name, image } = response.data.data;
                setBrandName(name);
                setBrandImage(image);
            } catch (error) {
                console.error('Error fetching brand details:', error);
            }
        };
        fetchBrandDetails();
    }, [id]);

    const handlePutRequest = async () => {
        const formData = new FormData();
        formData.append('name', brandname);
        formData.append('image', brandimage);

        try {
            const response = await axios.put(`${BaseUrl}/admin/brand/${id}`, formData, getAuthHeaders())
            const message = response.data.message;
            toast.success(message);
            navigate('/brands')
            setBrandName('');
            setBrandImage('');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(`Error: ${error.response.data.message}`);
            } else {
                console.log('Error adding Brand:', error);
                toast.error("Error adding Brand");
            }
        }
    }


    const deletebrand = async () => {
        try {
            await axios.delete(`${BaseUrl}/admin/brand/${id}`, getAuthHeaders());
            toast.success("Brand deleted Successfully!");
            navigate('/brands')
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className='brands'>
                <div className='offer1'>
                    <h6>Edit Brand</h6>
                    <div className='editbrand'>
                        <button onClick={()=>navigate('/brands')}>back</button>
                        <button onClick={deletebrand}>Delete</button>
                        <button onClick={handlePutRequest}>Update</button>
                    </div>
                </div>

                <div className='brands1'>
                    <div className='addbrand'>
                        <div className='addbrand1'>
                            <div className='addbrand2'>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Type here' value={brandname} onChange={(e) => setBrandName(e.target.value)} />
                            </div>
                            <div className='addbrand2'>
                                <label htmlFor="">Upload Image</label>
                                <div className='addbrand3' onClick={triggerFileInput} >
                                    <div className='addbrand4'>
                                        {brandimage ? (
                                            <img src={brandimage instanceof File ? URL.createObjectURL(brandimage) : brandimage} alt="" />
                                        ) : (
                                            <FiUploadCloud color='#E0E2E7' size={80} />
                                        )}

                                    </div>
                                </div>
                                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setBrandImage(e.target.files[0])} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(EditBrands)