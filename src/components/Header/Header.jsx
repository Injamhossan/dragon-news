import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center py-8'>
             <img src={logo} alt="" className=''/>
             <p className='text-gray-400 pt-[10px]'>Journalism Without Fear or Favour</p>
             <p className='text-accent font-semibold py-[10px]'>{format(new Date(), "EEEE , MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;