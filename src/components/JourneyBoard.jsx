import React, { useState } from 'react';
import backArrow from '../../assests/images/backArrow.svg';

export default function JourneyBoard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`font-poppins h-[600px] shadow-md transition-all duration-300 ease-in-out ${
                // Adjust width based on the expanded state
                isExpanded ? 'w-[382px]' : 'w-[132px]'
            }`}
        >
            <div className="bg-[#000] text-white py-2 px-3 font-semibold flex items-center justify-between">
                {/* Conditionally render the title */}
                {isExpanded && <h2>Journey Board</h2>}
                <img
                    onClick={handleToggle}
                    className="cursor-pointer transform transition-transform duration-300"
                    // Rotate the arrow based on the expanded state
                    style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    src={backArrow}
                    alt=""
                />
            </div>
            {/* Conditional rendering */}
            <div
                className={`px-8 py-4 transition-opacity duration-300 ${
                    // Hide content initially when collapsed
                    isExpanded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {/* Content to be revealed after expansion */}
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
