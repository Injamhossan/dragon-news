import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='mb-5 text-[20px] font-semibold'>Log in with</h2>
            <div>
                <button className='btn btn-outline btn-secondary w-full py-3 mb-5 justify-center'> <FcGoogle className='text-[20px]' />Login with Google</button>
                <button className='btn btn-outline w-full py-3 justify-center'><FaGithub className='text-[20px]'/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;