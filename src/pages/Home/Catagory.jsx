import React, { use } from 'react';
import { Link, useLocation } from 'react-router';
const catagoryPromise = fetch("/data/categories.json")
.then(res=>res.json());

const Catagory = () => {
    const catagories = use(catagoryPromise);
    const location = useLocation();

    return (
        <div>
            <h2 className='font-bold text-[20px]'>All Categories ({catagories.length}) </h2>
            <div className='grid grid-cols-1 mt-5'>
                {
                    catagories.map(catagory => {
                        const isActive = location.pathname === `/category/${catagory.id}`;
                        return (
                            <Link 
                                key={catagory.id} 
                                className={`btn border-0 hover:bg-base-200 justify-start pl-10 ${
                                    isActive 
                                        ? 'bg-base-300 active' 
                                        : 'bg-base-100'
                                }`} 
                                to={`/category/${catagory.id}`}
                            >
                                {catagory.name}
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Catagory;