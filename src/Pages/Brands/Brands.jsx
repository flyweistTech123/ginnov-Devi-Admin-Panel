import React, { useEffect, useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import './Brands.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'

import { IoMdAdd } from "react-icons/io";






const Brands = () => {
  const [branddata, setBrandData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBrand = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/admin/brand`, getAuthHeaders())
      setBrandData(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchBrand();
  }, [])




  const navigate = useNavigate()
  return (
    <>
      <div className='brands'>
        <div className='offer1'>
          <h6>Brands</h6>
          <button onClick={() => navigate('/addbrands')}><IoMdAdd color='#FFFFFF' size={20} /> Add  New</button>
        </div>

        <div className='brands1'>
          <div className='brands2'>
            {loading ? (
              <tr>
                <td colSpan="10" style={{ color: "#245196", fontWeight: "600", fontSize: "18px" }}>Loading brands...</td>
              </tr>
            ) 
              : (
                branddata?.map(brand => (
                  <div className='brands3' onClick={() => navigate('/editbrands')}>
                    <img src={brand.image} alt="" />
                    <div className='brands4'>
                      <h6>{brand.name}</h6>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HOC(Brands)