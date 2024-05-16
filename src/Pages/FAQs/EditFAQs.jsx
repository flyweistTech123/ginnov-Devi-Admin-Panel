import React, { useEffect, useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import './FAQs.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const EditFAQs = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const fetchFAQDetails = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/admin/faqs/${id}`, getAuthHeaders());
                const { question, answer } = response.data.data;
                setQuestion(question);
                setAnswer(answer);
            } catch (error) {
                console.error('Error fetching FAQ details:', error);
            }
        };
        fetchFAQDetails();
    }, [id]);

    const handlePutRequest = async () => {
        const data = {
            question: question,
            answer: answer,
        }


        try {
            const response = await axios.put(`${BaseUrl}/admin/faqs/${id}`, data, getAuthHeaders());
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
                    <h6>Edit FAQ</h6>
                    <button onClick={handlePutRequest}>Update</button>
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

export default HOC(EditFAQs)