import React, { useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import './FAQs.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddFAQs = () => {
    const navigate = useNavigate()



    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handlePostRequest = async () => {
        const data = {
            question: question,
            answer: answer,
        }


        try {
            const response = await axios.post(`${BaseUrl}/admin/faqs/create`, data, getAuthHeaders());
            const message = response.data.message;
            toast.success(message);
            setQuestion('');
            setAnswer('');
            navigate('/faqs')
        } catch (error) {
            console.error('Error to add FAQ:', error);
            toast.error('Error to add FAQ');
        }
    }
    return (
        <>
            <div className='brands'>
                <div className='offer1'>
                    <h6>New FAQ</h6>
                    <button onClick={handlePostRequest}>Post FAQ</button>
                </div>

                <div className='brands1'>
                    <div className='addbrand'>
                        <div className='addbrand1'>
                            <div className='addbrand2'>
                                <label htmlFor="">Topic</label>
                                <input type="text" placeholder='Type here' value={question} onChange={(e) => setQuestion(e.target.value)} />
                            </div>

                            <div className='addbrand2'>
                                <label htmlFor="">Body Text</label>
                                <textarea name="" id="" rows="8" placeholder='Type here' value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddFAQs)