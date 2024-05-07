import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './Brands.css'
import { useNavigate } from 'react-router-dom';



import { FiUploadCloud } from "react-icons/fi";


const triggerFileInput = () => {
    document.getElementById('fileInput').click();
};


const AddBrands = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='brands'>
                <div className='offer1'>
                    <h6>Add Brand</h6>
                    <button onClick={()=>navigate('/brands')}>Add</button>
                </div>

                <div className='brands1'>
                    <div className='addbrand'>
                        <div className='addbrand1'>
                            <div className='addbrand2'>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Type here'/>
                            </div>
                            <div className='addbrand2'>
                                <label htmlFor="">Upload Image</label>
                                <div className='addbrand3'>
                                    <FiUploadCloud  onClick={triggerFileInput} color='#E0E2E7' size={80}/>
                                </div>
                                <input type="file" id="fileInput" style={{ display: 'none' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddBrands)