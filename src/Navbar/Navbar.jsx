import React from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-center flex-col items-center py-8'>
             <img src={logo} alt="" className=''/>
             <p className='text-gray-400'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Navbar;