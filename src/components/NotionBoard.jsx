import React, { useState } from 'react';

export default function NoticeBoard() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNoticeBoard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Render the "Open" button when the notice board is not open */}
            {!isOpen && (
                <button
                    onClick={toggleNoticeBoard} // Toggles the state to open the notice board
                    className="absolute right-0 bg-black text-white px-3 py-2 flex items-center justify-center rounded-l-lg shadow-lg"
                >
                    <span className="sm:text-sm font-bold ">Open</span>
                </button>
            )}
            
            {/* Render the notice board when it is open */}
            {isOpen && (
                <div className="bg-black text-white w-12 py-2 flex flex-col items-center justify-between rounded-l-2xl shadow-lg">
                    <button
                        className="text-lg font-bold mb-4"
                        onClick={toggleNoticeBoard}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col items-center space-y-1">
                        {/* Displaying the "Notice Board" text vertically */}
                        {'Notice   Board'.split('').map((char, index) => (
                            <span key={index} className="text-sm tracking-wide">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
