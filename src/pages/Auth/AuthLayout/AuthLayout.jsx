import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Login from '../Login/Login';

const AuthLayout = () => {
    return (
        <div>
           <header>

           <Navbar></Navbar>
           </header>
           <Login></Login>

        </div>
    );
};

export default AuthLayout;