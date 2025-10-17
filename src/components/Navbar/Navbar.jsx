import React from 'react';
import { Link } from 'react-router';
import userLogo from '../../assets/user.png'

const Navbar = () => {
    const links = <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/career'><li>Career</li></Link>
    </>
    return (
       <div className='justify-between flex w-9/12 mx-auto pt-[25px]'>
        <div></div>
        <div>
        <ul className='flex gap-8 text-accent'>
            {links}
        </ul>
        </div>

        <div className='flex gap-5'>
            <img src={userLogo} alt="" />
            <button className='btn btn-primary px-[30px]'>Log in</button>
        </div>
       </div>

    );
};

export default Navbar;