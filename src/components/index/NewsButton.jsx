// NewsButton.js
import React from 'react';

const NewsButton = ({ color, icon }) => (
    <button
        type="button"
        className={`grow-0 shrink-0 rounded-full w-8 h-8 justify-center mr-8 mb-4 md:flex after:content-[''] after:absolute after:inset-0 bg-[${color}] text-[${color}] shadow-[${color}] shadow-lg`}
    >
        {icon}
    </button>
);

export default NewsButton;
