import React from 'react'
import './HostList.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from './TopPart';
import img from '../../Image/img17.png'
import img1 from '../../Image/img18.png'
import img2 from '../../Image/img19.png'
import img3 from '../../Image/img20.png'
import img4 from '../../Image/img21.png'


import { RiDeleteBin6Line } from "react-icons/ri";





const PaymentPayout = () => {
    const payment = [
        {
            "id": "#0313131",
            "details": "Payment Request",
            "joinDate": "04/03/24",
            "time": "8:00 PM",
            "crdr": "CR",
            "action": "delete"
        },
        {
            "id": "#0313132",
            "details": "Payment Request",
            "joinDate": "04/04/24",
            "time": "9:00 AM",
            "crdr": "DR",
            "action": "delete"
        },
        {
            "id": "#0313133",
            "details": "Payment Request",
            "joinDate": "04/05/24",
            "time": "10:00 AM",
            "crdr": "CR",
            "action": "delete"
        },
        {
            "id": "#0313134",
            "details": "Payment Request",
            "joinDate": "04/06/24",
            "time": "11:00 AM",
            "crdr": "DR",
            "action": "delete"
        },
        {
            "id": "#0313135",
            "details": "Payment Request",
            "joinDate": "04/07/24",
            "time": "12:00 PM",
            "crdr": "CR",
            "action": "delete"
        }
    ]




    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all your Cars</p>
                </div>
                <div>
                    <TopPart />
                </div>

                <div className='hostprofile22'>
                    <div className='hostprofile23'>
                        <div className='hostprofile24'>
                            <div className='hostprofile25'>
                                <label htmlFor="">Total Income</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                            <div className='hostprofile25'>
                                <label htmlFor="">Current Balance</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                        </div>
                        <div className='hostprofile24'>
                            <div className='hostprofile25'>
                                <label htmlFor="">Total QC Point</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                            <div className='hostprofile25'>
                                <label htmlFor="">Current QC Point</label>
                                <div className='hostprofile26'>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hostprofile27'>
                        <div className='hostprofile28'>
                            <h6>History</h6>
                        </div>
                        <div className='hostprofile29'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Details</th>
                                        <th>Join Date</th>
                                        <th>Time</th>
                                        <th>CR/DR</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payment.map((payment, index)  =>
                                        <tr key={index}>
                                            <td>{payment.id}</td>
                                            <td>{payment.details}</td>
                                            <td>{payment.joinDate}</td>
                                            <td>{payment.time}</td>
                                            <td>{payment.crdr}</td>
                                            <td><RiDeleteBin6Line color='#1C1B1F' size={20} /> </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PaymentPayout)