import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import Modal from "react-bootstrap/Modal";
import img from '../../Image/imgno.jpg'
import { AiOutlineRise } from "react-icons/ai";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import HOC from '../../Components/HOC/HOC'
import UserProfileTop from './UserProfileTop';
import UserBookings from './UserBookings';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import axios from 'axios';
import { BaseUrl, getAuthHeaders } from '../../Components/BaseUrl/BaseUrl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isuserbooking, setIsUserBookings] = useState(false)
    const [userdata, setUserData] = useState({});
    const [adharcardfront, setAdharCardFront] = useState('');
    const [adharcardBack, setAdharCardBack] = useState('');
    const [panimage, setPanImage] = useState('');
    const [bankcheque, setBankCheque] = useState('');
    const [adharcardNumber, setAdharcardNumber] = useState('');
    const [pancardNumber, setPanCardNumber] = useState('');
    const [accountholdername, setAccountholderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [ifscCode, setIFSCCode] = useState('');
    const [profileimg1, setProfileImage1] = useState('');
    const [name1, setName] = useState('')
    const [email1, setEmail] = useState('');
    const [number1, setNumber] = useState('')
    const [kycstatus1, setKYCStatus1] = useState('')
    const [remark1, setRemark1] = useState('')
    const [currentImageUrl, setCurrentImageUrl] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);







    useEffect(() => {
        Userdetails();
    }, []);


    const Userdetails = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/admin/profile/${id}`, getAuthHeaders());
            setUserData(response?.data?.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setAdharCardFront(userdata?.uploadId?.frontImage)
        setAdharCardBack(userdata?.uploadId?.backImage)
        setPanImage(userdata?.uploadId?.panImage)
        setBankCheque(userdata?.bankDetails?.cheque)
        setAdharcardNumber(userdata?.uploadId?.aadharCardNo)
        setPanCardNumber(userdata?.uploadId?.panName)
        setAccountholderName(userdata?.bankDetails?.accountHolderName)
        setAccountNumber(userdata?.bankDetails?.accountNumber)
        setBankName(userdata?.bankDetails?.bankName)
        setIFSCCode(userdata?.bankDetails?.ifscCode)
        setName(userdata?.fullName)
        setEmail(userdata?.email)
        setNumber(userdata?.mobileNumber)
        setKYCStatus1(userdata?.documentVerification)
        setRemark1(userdata?.documentRemarks)
        setProfileImage1(userdata?.image)
    }, [userdata]);





    const handleImageClick = (imageUrl) => {
        setCurrentImageUrl(imageUrl);
        setModalShow(true);
    };




    const triggerFileInput1 = (e) => {
        e.stopPropagation();
        document.getElementById('fileInput1').click();
    };

    const triggerFileInput2 = (e) => {
        e.stopPropagation();
        document.getElementById('fileInput2').click();
    };
    const triggerFileInput3 = (e) => {
        e.stopPropagation();
        document.getElementById('fileInput3').click();
    };

    const triggerFileInput4 = (e) => {
        e.stopPropagation();
        document.getElementById('fileInput4').click();
    };







    const handleImageChange1 = (e) => {
        setAdharCardFront(e.target.files[0]);
    };


    const handleImageChange2 = (e) => {
        setAdharCardBack(e.target.files[0]);
    };

    const handleImageChange3 = (e) => {
        setPanImage(e.target.files[0]);
    };

    const handleImageChange4 = (e) => {
        setBankCheque(e.target.files[0]);
    };




    const appendIfPresent = (formData, key, value) => {
        if (value) {
            formData.append(key, value);
        }
    };




    const updateDocument = async (e) => {
        e.preventDefault();
        const imageFormData = new FormData();
        appendIfPresent(imageFormData, 'frontImage', adharcardfront);
        appendIfPresent(imageFormData, 'backImage', adharcardBack);
        appendIfPresent(imageFormData, 'panImage', panimage);
        appendIfPresent(imageFormData, 'cheque', bankcheque);
        try {
            await axios.post(`${BaseUrl}api/v1/driver/image/${id}`, imageFormData, getAuthHeaders());
            toast.success("Driver Document Updated successfully");
        } catch (error) {
            console.error('Error updating image Document:', error);
            toast.error("Failed to update driver Document. Please try again later.");
        }
    };









    const isPDF = (file) => {
        if (file instanceof File) {
            return file.type === 'application/pdf';
        } else if (typeof file === 'string') {
            return file.toLowerCase().endsWith('.pdf');
        }
        return false;
    };


    // Image  modal 

    function ImageViewer(props) {
        const [imageUrl, setImageUrl] = useState("");

        useEffect(() => {
            if (props.show === true) {
                setImageUrl(props?.imageUrl);
            }
        }, [props])

        const isPDF = (url) => {
            if (url instanceof File) {
                return url.type === 'application/pdf';
            } else if (typeof url === 'string') {
                return url.toLowerCase().endsWith('.pdf');
            }
            return false;
        };



        // Function to handle image download
        const downloadFile = async (url, fileName) => {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
            } catch (error) {
                toast.error("Error downloading the file");
                console.error('Error downloading the file:', error);
            }
        };

        const handleDownloadClick = () => {
            const fileName = imageUrl.split('/').pop();
            downloadFile(imageUrl, fileName);
        };



        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='adminprofileupdate'>
                    <Modal.Title id="contained-modal-title-vcenter">View Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-overlay">
                        <div className='userprofile2'>
                            <button onClick={handleDownloadClick} style={{ marginBottom: '10px' }}>Download Image</button>
                        </div>
                        <div className="modal-content">
                            {isPDF(imageUrl) ? (
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                    <Viewer fileUrl={imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl || img} style={{ width: '100%' }} />;
                                </Worker>

                            ) : (
                                <img src={imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl || img} alt="Full Image" style={{ width: '100%' }} />
                            )}

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    //updateprofile modal

    function UpdateProfile(props) {
        const [profileimg, setProfileImage] = useState(profileimg1);
        const [name, setName] = useState(name1)
        const [email, setEmail] = useState(email1);
        const [number, setNumber] = useState(number1)
        const [kycstatus, setKYCStatus] = useState(kycstatus1)
        const [remark, setRemark] = useState(remark1)


        const triggerFileInput = (e) => {
            e.stopPropagation();
            document.getElementById('fileInput').click();
        };

        const handleImageChange = (e) => {
            setProfileImage(e.target.files[0]);
        };


        const updateprofileimg = async () => {
            const profileimageData = new FormData();
            profileimageData.append('image', profileimg);
            try {
                await axios.put(`${BaseUrl}/admin/upload-profile-picture/${id}`, profileimageData, getAuthHeaders());
            } catch (error) {
                console.error('Error updating image:', error);
                toast.error("Failed to update user image. Please try again later.");
            }
        }


        const updateuser = async () => {

            const userdertails = {
                fullName: name,
                mobileNumber: number,
                email: email,
                documentVerification: kycstatus,
                documentRemarks: remark,
            };
            try {
                await axios.put(`${BaseUrl}/admin/update/user/${id}`, userdertails, getAuthHeaders());
                setModalShow1(false)
            } catch (error) {
                console.error('Error updating User details:', error);
                toast.error("Failed to update User details. Please try again later.");
            }
        };


        const handleclick = (e) => {
            e.preventDefault();
            updateuser()
            updateprofileimg()
            toast.success("User Details Updated successfully");
            Userdetails();

        }


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='adminprofileupdate'>
                    <Modal.Title id="contained-modal-title-vcenter">Update User Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='hostprofile3' onClick={triggerFileInput}>
                            <img
                                src={profileimg instanceof File ? URL.createObjectURL(profileimg) : profileimg || img}
                                alt={profileimg !== img ? "profile Image" : "No Image"}
                            />
                            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
                        </div>
                        <div className='userprofile7'>
                            <div className='userprofile8'>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='userprofile8'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='userprofile8'>
                                <label htmlFor="">Mobile Number</label>
                                <input type="text" placeholder='Enter mobile number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>
                        </div>
                        <div className='userprofile8'>
                            <label htmlFor="">KYC Status</label>
                            <div className='userprofile11'>
                                <div className='userprofile12'>
                                    <input type="radio" name="status" checked={kycstatus === "APPROVED"} onChange={() => setKYCStatus("APPROVED")} />
                                    <label htmlFor="">APPROVED</label>
                                </div>
                                <div className='userprofile12'>
                                    <input type="radio" name="status" checked={kycstatus === "PENDING"} onChange={() => setKYCStatus("PENDING")} />
                                    <label htmlFor="">PENDING</label>
                                </div>
                                <div className='userprofile12'>
                                    <input type="radio" name="status" checked={kycstatus === "CANCELLED"} onChange={() => setKYCStatus("CANCELLED")} />
                                    <label htmlFor="">CANCELLED</label>
                                </div>
                                <div className='userprofile12'>
                                    <input type="radio" name="status" checked={kycstatus === "HOLD"} onChange={() => setKYCStatus("HOLD")} />
                                    <label htmlFor="">HOLD</label>
                                </div>
                            </div>
                        </div>
                        <div className='userprofile7'>
                            <div className='userprofile8'>
                                <label htmlFor="">Remark</label>
                                <input type="text" placeholder='Enter ramark' value={remark} onChange={(e) => setRemark(e.target.value)} />
                            </div>
                        </div>
                        <div className='userprofile10'>
                            <div className='userprofile2'>
                                <button onClick={handleclick}>Update</button>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <ImageViewer
                show={modalShow}
                onHide={() => setModalShow(false)}
                imageUrl={currentImageUrl}
            />
            <UpdateProfile
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div className='dashboard'>
                <div className='userprofile'>
                    <div className='userprofile2'>
                        <button onClick={() => navigate('/allusers')}>Back</button>
                    </div>
                    <div>
                        <div className='userprofile9'>
                            <h5>User Profile</h5>
                            <div className='userprofile2'>
                                <button onClick={() => setModalShow1(true)}>Update</button>
                            </div>
                        </div>
                        <UserProfileTop data={userdata} />
                    </div>
                    <div>
                        <div className="hostprofile6">
                            <div className="hostprofile7">
                                <p className={!isuserbooking ? "hostprofile8" : "hostprofile9"} onClick={() => setIsUserBookings(false)}>Document</p>
                                <p className={isuserbooking ? "hostprofile8" : "hostprofile9"} onClick={() => setIsUserBookings(true)}>Bookings</p>
                            </div>
                        </div>

                        <div>
                            {isuserbooking &&
                                <UserBookings />
                            }
                            {!isuserbooking &&
                                <>

                                    <div className='userprofile'>
                                        <div className='userprofile1'>
                                            <h6>User's All Documents</h6>
                                            <div className='userprofile2'>
                                                <button onClick={updateDocument}>Update</button>
                                            </div>
                                        </div>

                                        <div className='userprofile7'>
                                            <div className='userprofile8'>
                                                <label htmlFor="">Aadhar Card Number</label>
                                                <input type="text" placeholder='Enter Aadhar Card Number' value={adharcardNumber} onChange={(e) => setAdharcardNumber(e.target.value)} />
                                            </div>
                                            <div className='userprofile8'>
                                                <label htmlFor="">Pan Card Number</label>
                                                <input type="text" placeholder='Enter Pan Card Number' value={pancardNumber} onChange={(e) => setPanCardNumber(e.target.value)} />
                                            </div>
                                            <div className='userprofile8'>
                                                <label htmlFor="">Account Holder Name</label>
                                                <input type="text" placeholder='Enter Account Holder Name' value={accountholdername} onChange={(e) => setAccountholderName(e.target.value)} />
                                            </div>
                                            <div className='userprofile8'>
                                                <label htmlFor="">Account Number</label>
                                                <input type="text" placeholder='Enter Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                                            </div>
                                            <div className='userprofile8'>
                                                <label htmlFor="">Bank Name</label>
                                                <input type="text" placeholder='Enter Bank Name' value={bankName} onChange={(e) => setBankName(e.target.value)} />
                                            </div>
                                            <div className='userprofile8'>
                                                <label>IFSC Code</label>
                                                <input type="text" value={ifscCode} onChange={(e) => setIFSCCode(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className='userprofile3'>
                                            <div className='userprofile4'>
                                                <div className='userprofile5'  >
                                                    <input type="file" id="fileInput1" style={{ display: 'none' }} onChange={handleImageChange1} />
                                                    <div onClick={() => handleImageClick(adharcardfront)} className='userprofile6'>
                                                        {isPDF(adharcardfront) ? (
                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                                                <Viewer fileUrl={adharcardfront instanceof File ? URL.createObjectURL(adharcardfront) : adharcardfront || img}
                                                                />
                                                            </Worker>
                                                        ) : (
                                                            <img
                                                                src={adharcardfront instanceof File ? URL.createObjectURL(adharcardfront) : adharcardfront || img}
                                                                alt={adharcardfront !== img ? "Driver Interior Image" : "No Image"}
                                                            />
                                                        )}
                                                        <h6>Adhar card front</h6>
                                                    </div>
                                                </div>
                                                <div className='userprofile2'>
                                                    <button onClick={triggerFileInput1}>Update</button>
                                                </div>
                                            </div>
                                            <div className='userprofile4'>
                                                <div className='userprofile5' >
                                                    <input type="file" id="fileInput2" style={{ display: 'none' }} onChange={handleImageChange2} />
                                                    <div onClick={() => handleImageClick(adharcardBack)} className='userprofile6'>
                                                        {isPDF(adharcardBack) ? (
                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                                                <Viewer fileUrl={adharcardBack instanceof File ? URL.createObjectURL(adharcardBack) : adharcardBack} />
                                                            </Worker>
                                                        ) : (
                                                            <img
                                                                src={adharcardBack instanceof File ? URL.createObjectURL(adharcardBack) : adharcardBack || img}
                                                                alt={adharcardBack !== img ? "Driver Exterior Image" : "No Image"}
                                                            />
                                                        )}
                                                        <h6>Adhar card Back</h6>
                                                    </div>
                                                </div>
                                                <div className='userprofile2'>
                                                    <button onClick={triggerFileInput2}>Update</button>
                                                </div>
                                            </div>
                                            <div className='userprofile4'>
                                                <div className='userprofile5'>
                                                    <input type="file" id="fileInput3" style={{ display: 'none' }} onChange={handleImageChange3} />
                                                    <div onClick={() => handleImageClick(panimage)} className='userprofile6'>
                                                        {isPDF(panimage) ? (
                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                                                <Viewer fileUrl={panimage instanceof File ? URL.createObjectURL(panimage) : panimage} />
                                                            </Worker>
                                                        ) : (
                                                            <img
                                                                src={panimage instanceof File ? URL.createObjectURL(panimage) : panimage || img}
                                                                alt={panimage !== img ? "Driver RC Image" : "No Image"}
                                                            />
                                                        )}
                                                        <h6>Pan Card</h6>
                                                    </div>
                                                </div>
                                                <div className='userprofile2'>
                                                    <button onClick={triggerFileInput3}>Update</button>
                                                </div>
                                            </div>
                                            <div className='userprofile4'>
                                                <div className='userprofile5'>
                                                    <input type="file" id="fileInput4" style={{ display: 'none' }} onChange={handleImageChange4} />
                                                    <div onClick={() => handleImageClick(bankcheque)} className='userprofile6'>
                                                        {isPDF(bankcheque) ? (
                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                                                <Viewer fileUrl={bankcheque instanceof File ? URL.createObjectURL(bankcheque) : bankcheque} />
                                                            </Worker>
                                                        ) : (
                                                            <img
                                                                src={bankcheque instanceof File ? URL.createObjectURL(bankcheque) : bankcheque || img}
                                                                alt={bankcheque !== img ? "Driver Fitness Image" : "No Image"}
                                                            />
                                                        )}
                                                        <h6>Bank Cheque</h6>
                                                    </div>
                                                </div>
                                                <div className='userprofile2'>
                                                    <button onClick={triggerFileInput4}>Update</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(UserProfile)