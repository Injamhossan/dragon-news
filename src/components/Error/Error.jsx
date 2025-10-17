import React from 'react';
import errorPic from '../../assets/error-404.png';

const Error = () => {
    return (
        <div className='flex justify-center pt-40'>
            <img src={errorPic} alt="" />
        </div>
    );
};

export default Error;