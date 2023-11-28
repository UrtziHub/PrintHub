// NewsItem.js
import React from 'react';
import NewsButton from './NewsButton';

const NewsItem = ({ color, icon, title, description }) => (
    <div className={`flex xl:flex-row flex-row gap-2 items-start border-b border-gray-300 mt-4`}>
        <NewsButton color={color} icon={icon} />
        <div className="flex flex-col gap-4 hover:text-indigo-800">
            <h1 className="md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">{title}</h1>
            <p className={`lg:mb-11 text-base md:text-lg mb-5`}>{description}</p>
        </div>
    </div>
);

export default NewsItem;