import React, { useState } from 'react';
import backArrow from '../../assests/images/backArrow.svg';

export default function JourneyBoard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`font-poppins shadow-md transition-all duration-300 ease-in-out
                ${isExpanded ? 'media1200:w-[382px] w-full' : 'media1200:w-[132px] w-full'} 
                ${isExpanded ? 'h-[600px]' : 'h-auto media1200:h-[600px]'} 
            `}
        >
            <div className="bg-[#000] text-white py-2 px-3 font-semibold flex items-center justify-between">
                {/* Conditionally render the title on larger screens */}
                {isExpanded && <h2 className="hidden media1200:block">Journey Board</h2>}
                <img
                    onClick={handleToggle}
                    className="cursor-pointer transform transition-transform duration-300"
                    style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    src={backArrow}
                    alt=""
                />
            </div>

            {/* Conditional rendering: Show content only when expanded */}
            <div
                className={`px-8 py-4 transition-all duration-300 ease-in-out
                    ${isExpanded ? 'opacity-100' : 'opacity-0 media1200:block hidden'}
                `}
            >
                {/* Content visible when expanded */}
                <ul>
                    <li className="list-disc font-semibold">
                        Explore the world of management
                    </li>
                    <ul className="list-disc mt-4">
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure your pointers</li>
                        <li>4SA Method</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
