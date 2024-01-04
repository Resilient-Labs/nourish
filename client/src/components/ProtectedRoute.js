import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
    console.log(isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/signup" />;
  };

export default ProtectedRoute;