import React, { useEffect, useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import './FAQs.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'



import { IoMdAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";





const FAQs = () => {


  const [faqdata, setFaqData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const fetchFaq = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/admin/faqs`, getAuthHeaders())
      const FaqDataArray = Object.values(response.data.data);
      setFaqData(FaqDataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
    finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchFaq(); // Fetch faq data on component mount
  }, [])



  return (
    <>
      <div className='brands'>
        <div className='offer1'>
          <h6>FAQs</h6>
          <button onClick={() => navigate('/addfaqs')}><IoMdAdd color='#FFFFFF' size={20} />New FAQ</button>
        </div>

        <div className='brands1'>
          <div className='faqs'>
            {loading ? (
              <tr>
                <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading faq...</td>
              </tr>
            ) :
              faqdata?.map(faq => (
                <div className='faqs1' onClick={() => navigate(`/editfaqs/${faq._id}`)}>
                  <div className='faqs2'>
                    <h6>{faq.question}</h6>
                    <IoIosMore color='#1C1B1F' size={25} />
                  </div>
                  <div className='faqs3'>
                    <p>{faq.answer}</p>
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

export default HOC(FAQs)