import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CatagoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const [catagoryNews, setCategoryNews] = useState([]);
    
    useEffect(()=>{
        const filteredNews = data.filter(news=> news.category_id == id);
        console.log(filteredNews);
        setCategoryNews(filteredNews);
    }, [data, id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit' 
        });
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-orange-500">★</span>);
        }
        
        if (hasHalfStar) {
            stars.push(<span key="half" className="text-orange-500">☆</span>);
        }
        
        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
        }
        
        return stars;
    };

    return (
        <div>
            <h2 className='font-bold text-[24px] mb-6 text-gray-800'>Category News - {id}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {catagoryNews.map((news, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden news-card h-fit'>
                        {/* Author Section */}
                        <div className='flex items-center justify-between p-3 pb-2'>
                            <div className='flex items-center space-x-3'>
                                <div className='w-10 h-10 rounded-full overflow-hidden'>
                                    <img 
                                        src={news.author?.img || 'https://randomuser.me/api/portraits/men/1.jpg'} 
                                        alt={news.author?.name || 'Author'} 
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div>
                                    <h4 className='font-medium text-gray-700'>{news.author?.name || 'Unknown Author'}</h4>
                                    <p className='text-sm text-gray-500'>{formatDate(news.author?.published_date || new Date())}</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                                    <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' />
                                    </svg>
                                </button>
                                <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                                    <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z' />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Title */}
                        <div className='px-4 pb-2'>
                            <h3 className='text-lg font-bold text-gray-800 leading-tight hover:text-blue-600 transition-colors cursor-pointer line-clamp-2'>
                                {news.title}
                            </h3>
                        </div>

                        {/* Featured Image */}
                        <div className='px-3 pb-3'>
                            <div className='w-full h-40 rounded-lg overflow-hidden'>
                                <img 
                                    src={news.thumbnail_url || news.image_url || 'https://via.placeholder.com/400x200'} 
                                    alt={news.title} 
                                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='px-3 pb-2'>
                            <p className='text-gray-600 leading-relaxed line-clamp-2 text-sm'>
                                {news.details}
                            </p>
                            <button className='text-orange-500 font-medium hover:text-orange-600 transition-colors mt-1 text-sm'>
                                Read More
                            </button>
                        </div>

                        {/* Footer with Rating and Views */}
                        <div className='px-3 py-2 bg-gray-50 border-t border-gray-100'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-1 star-rating'>
                                    {renderStars(news.rating?.number || 4.9)}
                                    <span className='text-sm text-gray-600 ml-1'>{news.rating?.number || 4.9}</span>
                                </div>
                                <div className='flex items-center space-x-1 text-gray-600'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    </svg>
                                    <span className='text-sm'>{news.total_view || 499}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatagoryNews;