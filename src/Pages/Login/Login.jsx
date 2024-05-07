import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { BaseUrl } from '../../Components/BaseUrl/BaseUrl'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BaseUrl}/admin/login`, {
                email: email,
                password: password,
            });

            const { accessToken } = response.data;
            localStorage.setItem('token', accessToken);
            console.log('Token stored in localStorage:', accessToken);
            toast.success("Login successfully");
            navigate('/dashboard');
        } catch (error) {
            console.error('Error:', error.message);
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <div className='register'>
                <div className='register1'>
                    <div className='register2'>
                        <div className='register3'>
                            <p>Logo</p>
                        </div>
                    </div>
                </div>
                <div className='register4'>
                    <div className='register5'>
                        <div className='register55'>
                            <h6>Sign In</h6>
                            <p>Enter your email and password to login</p>
                        </div>

                        <div className='register6'>
                            <div className='register7'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='register7'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className='register8'>
                                <button onClick={handleLogin}>SIGN IN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login