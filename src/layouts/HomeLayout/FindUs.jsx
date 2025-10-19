import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

const FindUs = () => {
    return (
        <div className='bg-gray-100 rounded-lg p-4'>
            <h2 className='font-bold text-lg text-gray-800 mb-4'>Find Us On</h2>
            <div className='space-y-0'>
                {/* Facebook */}
                <div className='flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3'>
                        <FaFacebookF className='text-blue-600 text-lg' />
                    </div>
                    <span className='text-gray-700 font-medium'>Facebook</span>
                </div>
                
                {/* Divider */}
                <div className='border-t border-gray-300'></div>
                
                {/* Twitter */}
                <div className='flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3'>
                        <FaTwitter className='text-blue-400 text-lg' />
                    </div>
                    <span className='text-gray-700 font-medium'>Twitter</span>
                </div>
                
                {/* Divider */}
                <div className='border-t border-gray-300'></div>
                
                {/* Instagram */}
                <div className='flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3'>
                        <IoLogoInstagram className='text-pink-500 text-lg' />
                    </div>
                    <span className='text-gray-700 font-medium'>Instagram</span>
                </div>
            </div>
        </div>
    );
};

export default FindUs;