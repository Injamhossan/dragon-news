import React from 'react';
import Swimming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import Play from '../../assets/playground.png'


const Qzone = () => {
    return (
        <div className='bg-gray-100 rounded-lg p-4'>
            <h2 className='font-bold text-lg mb-4'>Q-zone</h2>
            <div className='flex flex-col items-center space-y-3'>
                <img src={Swimming} alt="Swimming" className='w-full max-w-xs rounded-lg shadow-sm' />
                <img src={Class} alt="Class" className='w-full max-w-xs rounded-lg shadow-sm' />
                <img src={Play} alt="Playground" className='w-full max-w-xs rounded-lg shadow-sm' />
            </div>
        </div>
    );
};

export default Qzone;