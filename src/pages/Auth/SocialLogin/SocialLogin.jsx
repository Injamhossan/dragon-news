import React from 'react';
import GoogleLogo from '../../../assets/google.png'
import GitLogo from '../../../assets/github-sign.png'

const SocialLogin = () => {
    return (
        <div>
            <h2 className='mb-5 text-[20px] font-semibold'>Log in with</h2>
            <div>
                <button className='flex border-1 rounded-[8px] w-full py-3 mb-5 justify-center'><img src={GoogleLogo} alt="" className='h-[20px] items-center mr-2' /> Login with Google</button>
                <button className='flex items-center border-1 rounded-[8px] w-full py-3 justify-center'><img src={GitLogo} alt="" className='h-[20px] items-center mr-2'/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;