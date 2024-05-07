import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRouteProtect = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Check if the user is authenticated (token exists in localStorage)
    if (!token) {
        // Redirect to the login page if not authenticated
        navigate('/login');
        return null; // Return null to prevent rendering children
    }

    // Render the protected route (children) if authenticated
    return <>{children}</>;
};

export default AdminRouteProtect;
