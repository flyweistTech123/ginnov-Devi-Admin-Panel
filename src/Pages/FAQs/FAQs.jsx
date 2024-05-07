import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './FAQs.css'
import { useNavigate } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";





const FAQs = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='brands'>
        <div className='offer1'>
          <h6>FAQs</h6>
          <button onClick={() => navigate('/addfaqs')}><IoMdAdd color='#FFFFFF' size={20} />New FAQ</button>
        </div>

        <div className='brands1'>
          <div className='faqs'>
            <div className='faqs1' onClick={() => navigate('/editfaqs')}>
              <div className='faqs2'>
                <h6>Lorem ipsum dolor sit amet?</h6>
                <IoIosMore  color='#1C1B1F' size={25}/>
              </div>
              <div className='faqs3'>
                <p>Lorem ipsum dolor sit amet, consectetur adips cing elit. Bibendum in vel, mattis et amet dui mauris turpis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className='faqs1'>
              <div className='faqs2'>
                <h6>Lorem ipsum dolor sit amet?</h6>
                <IoIosMore  color='#1C1B1F' size={25}/>
              </div>
              <div className='faqs3'>
                <p>Lorem ipsum dolor sit amet, consectetur adips cing elit. Bibendum in vel, mattis et amet dui mauris turpis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HOC(FAQs)