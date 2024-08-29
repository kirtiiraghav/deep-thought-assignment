import React from 'react';
import ThreadA from './ThreadA';

const JourneyCard = ({ title, description, children, icon }) => {
    return (
        <div className="font-poppins w-full md:w-[450px] rounded-xl overflow-hidden shadow-md mb-6">
            <div className="bg-[#000] text-white py-2 px-3  flex justify-between">
                <h3>{title}</h3>
                <img className="cursor-pointer" src={icon} alt={`${title} icon`} />
            </div>
            <div className="p-4">
                <p className="text-sm mb-4"><span className='font-semibold'>Description: </span>{description}</p>
            </div>
            <ThreadA />

        </div>
    );
};

export default JourneyCard;
