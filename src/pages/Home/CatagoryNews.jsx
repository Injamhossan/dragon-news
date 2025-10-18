import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            Catagorys - {id}
        </div>
    );
};

export default CatagoryNews;