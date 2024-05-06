import React from 'react'
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import ReactApexChart from 'react-apexcharts';


import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


import img from '../../Image/img2.png'


const Dashboard = () => {
  const seriesData = [
    { name: 'Registered', data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 91, 114, 94] },
    { name: 'Rental', data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 91, 114, 94] },
    { name: 'Shares', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 52, 53, 41] }
  ];

  const progressData = [
    { id: 1, progress: 50, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
    { id: 2, progress: 50, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
    { id: 3, progress: 70, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
    { id: 4, progress: 70, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
    { id: 4, progress: 70, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
    { id: 4, progress: 70, imageUrl: img, name: "Mahindra Thar", rating: "4.5" },
  ]

  const options = {
    chart: {
      type: 'bar',
      width: 500
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    fill: {
      opacity: 1,
      colors: ['#245196', '#28C76F', '#FFCE2B'] // Custom colors for each series
    }
  };
  return (
    <>
      <div className='dashboard'>
        <div className='dashboard1'>
          <h6>Welcome Back Jay</h6>
          <p>Here is the information about all your Cars</p>
        </div>

        <div className='dashboard2'>
          <div className='dashboard3'>
            <div className='dashboard4'>
              <p>Revenue</p>
              <div className='dashboard5'>
                <h6>₹12,23,110</h6>
                <span>+11.02% <AiOutlineRise /></span>
              </div>
            </div>
            <div className='dashboard4'>
              <p>Total User</p>
              <div className='dashboard5'>
                <h6>2231</h6>
                <span>+11.02% <AiOutlineRise /></span>
              </div>
            </div>
            <div className='dashboard4'>
              <p>Total booking</p>
              <div className='dashboard5'>
                <h6>7821</h6>
                <span>+11.02% <AiOutlineRise /></span>
              </div>
            </div>
            <div className='dashboard4'>
              <p>Total Host</p>
              <div className='dashboard5'>
                <h6>2210</h6>
                <span>+11.02% <AiOutlineRise /></span>
              </div>
            </div>
          </div>

          <div className='dashboard6'>
            <div className='dashboard7'>
              <div className='dashboard25'>
                <h5>Total Cars</h5>
                <p>Monthly</p>
              </div>
              <ReactApexChart
                options={options}
                series={seriesData}
                type='bar'
                height={350}
              />
              <div className='dashboard26'>
                <div className='dashboard4'>
                  <p>Total Registered Cars</p>
                  <div className='dashboard5'>
                    <h6>5631</h6>
                    <span>+11.02% <AiOutlineRise /></span>
                  </div>
                </div>
                <div className='dashboard4'>
                  <p>Total Rental Cars</p>
                  <div className='dashboard5'>
                    <h6 style={{ color: '#28C76F' }}>7713</h6>
                    <span>+11.02% <AiOutlineRise /></span>
                  </div>
                </div>
                <div className='dashboard4'>
                  <p>Total Shares Cars</p>
                  <div className='dashboard5'>
                    <h6 style={{ color: '#FFCE2B' }}>4451</h6>
                    <span>+11.02% <AiOutlineRise /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashboard8'>
              <div className='dashboard9'>
                <div className='dashboard10'>
                  <FaHandHoldingUsd color='#245196' />
                  <p>Referal points</p>
                  <MdMoreHoriz />
                </div>
                <h6>2210</h6>
              </div>
              <div className='dashboard11'>
                <div className='dashboard12'>
                  <h6>Top highly rental cars</h6>
                  <h6>View All</h6>
                </div>
                {progressData.map(item => (
                  <div className='dashboard13' key={item.id}>
                    <div className='dashboard14'>
                      <img src={item.imageUrl} alt={item.name} /> {/* Assuming item has properties like imageUrl and name */}
                      <p>{item.name}</p>
                    </div>
                    <div className="dashboard15">
                      <div className="dashboard16" style={{ width: `${item.progress}%`, backgroundImage: item.gradientColor }}></div>
                    </div>
                    <div className='dashboard17'>
                      <p>{item.rating}</p>
                      <IoMdStar color='#FECE48' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='dashboard18'>
            <div className='dashboard19'>
              <h6>All User List</h6>
              <div className='dashboard20'>
                <div className='dashboard21'>
                  <IoSearchSharp color='#32343E' size={20} />
                  <input type="search" placeholder='Search by ID or name' />
                </div>
                <div className='dashboard22'>
                  <VscFilter color='#32343E' size={20} />
                  <p>Filter</p>
                  <MdOutlineArrowDropDown color='#32343E' size={20} />
                </div>
                <div className='dashboard22'>
                  <FaSortAmountUp color='#32343E' size={18} />
                  <p>Sort</p>
                  <MdOutlineArrowDropDown color='#32343E' size={20} />
                </div>
                <div className='dashboard23'>
                  <p>View All</p>
                </div>
              </div>
            </div>

            <div className='dashboard24'>
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Phone No.</th>
                    <th>Email ID</th>
                    <th>User & host</th>
                    <th>Registration Date</th>
                    <th>KYC</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "700" }}>#0313131</td>
                    <td>Jassi Singh</td>
                    <td>+91 999887770</td>
                    <td>email@email.com</td>
                    <td>User</td>
                    <td>04/03/24</td>
                    <td>
                      <div className='dashboard27'>
                        <IoMdCheckmark color='#FFFFFF' size={20} />
                        <p>Done</p>
                      </div>
                    </td>
                    <td>Delhi</td>
                    <td>4.5 <IoMdStar color='#FECE48' /></td>
                    <td><MdMoreHoriz /></td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "700" }}>#0313131</td>
                    <td>Jassi Singh</td>
                    <td>+91 999887770</td>
                    <td>email@email.com</td>
                    <td>User</td>
                    <td>04/03/24</td>
                    <td>
                      <div className='dashboard27'>
                        <IoMdCheckmark color='#FFFFFF' size={20} />
                        <p>Done</p>
                      </div>
                    </td>                    <td>Delhi</td>
                    <td>4.5 <IoMdStar color='#FECE48' /></td>
                    <td><MdMoreHoriz /></td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "700" }}>#0313131</td>
                    <td>Jassi Singh</td>
                    <td>+91 999887770</td>
                    <td>email@email.com</td>
                    <td>User</td>
                    <td>04/03/24</td>
                    <td>
                      <div className='dashboard27'>
                        <IoMdCheckmark color='#FFFFFF' size={20} />
                        <p>Done</p>
                      </div>
                    </td>                    <td>Delhi</td>
                    <td>4.5 <IoMdStar color='#FECE48' /></td>
                    <td><MdMoreHoriz /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='dashboard28'>
              <p>Showing 1-5 from 100</p>

              <div className='dashboard29'>
                <div className='dashboard30'>
                  <IoMdArrowDropleft color='#000000' />
                </div>
                <div className='dashboard31'>
                  <p>1</p>
                </div>
                <div className='dashboard31'>
                  <p>2</p>
                </div>
                <div className='dashboard31'>
                  <p>3</p>
                </div>
                <div className='dashboard31'>
                  <p>...</p>
                </div>
                <div className='dashboard30'>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HOC(Dashboard)