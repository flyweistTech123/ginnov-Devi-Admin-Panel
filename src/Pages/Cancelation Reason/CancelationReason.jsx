import React from 'react'
import './CancelationReason.css'
import HOC from '../../Components/HOC/HOC'


import { RiDeleteBin6Line } from "react-icons/ri";





const CancelationReason = () => {
    const dummyData = [
        {
            "text": "Lorem ipsum dolor sit amet consectetur. Vel nibh aliquam et vestibulum in. Gravida cursus lectus fames et integer. Ipsum convallis convallis vel mi in. Fames molestie aenean eu rutrum ipsum morbi integer nunc eu. Nullam duis ultrices felis vel. Massa amet ac sagittis mauris nunc erat."
        },
        {
            "text": "Magna ipsum habitant scelerisque sem. Id tellus quis est ultricies. At neque a porttitor in nulla purus viverra orci elementum. Morbi ultricies aliquet lacus sit fringilla tortor."
        },
        {
            "text": "Lorem ipsum dolor sit amet consectetur. Vel nibh aliquam et vestibulum in. Gravida cursus lectus fames et integer. Ipsum convallis convallis vel mi in. Fames molestie aenean eu rutrum ipsum morbi integer nunc eu. Nullam duis ultrices felis vel. Massa amet ac sagittis mauris nunc erat."
        },
        {
            "text": "Magna ipsum habitant scelerisque sem. Id tellus quis est ultricies. At neque a porttitor in nulla purus viverra orci elementum. Morbi ultricies aliquet lacus sit fringilla tortor."
        }
    ];




    return (
        <>
            <div className='dashboard'>
                <div className='dashboard1'>
                    <h6>Welcome Back Jay</h6>
                    <p>Here is the information about all your Cars</p>
                </div>
                <div className='hostprofile22'>
                    <div className='hostprofile27'>
                        <div className='offer1'>
                            <h6>Cancelation Reason</h6>
                            <button>New Reason</button>
                        </div>

                        <div className='cancelreason1'>
                            {dummyData.map((item, index) => (
                                <div className='cancelreason2'>
                                    <div className='cancelreason3'>
                                        <p>{item.text}</p>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className='cancelreason4'>
                                        <RiDeleteBin6Line color='#1C1B1F' size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CancelationReason)