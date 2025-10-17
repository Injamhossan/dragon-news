import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-[16px]'>
            <p className='text-base-100 bg-secondary px-[25px] py-[9px]'>Latest</p>
            <Marquee className='gap-5 font-semibold' pauseOnHover={true} speed={60}>
            <p>Match Highlights: Germany vs Spain — as it happened   !</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !</p>

            </Marquee>
        
        </div>
    );
};

export default LatestNews;