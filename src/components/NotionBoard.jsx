import React, { useState } from 'react';

export default function NoticeBoard() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNoticeBoard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <div className=" bg-black text-white w-12 py-2 flex flex-col items-center justify-between rounded-l-2xl shadow-lg">

                    <button
                        className="text-lg font-bold mb-4"
                        onClick={toggleNoticeBoard}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col items-center space-y-1">
                        {'Notice   Board'.split('').map((char, index) => (
                            <span key={index} className="text-sm tracking-wide">
                                {char}
                            </span>
                        ))}
                    </div>

                </div>
            )}
            {!isOpen && (
                <button
                    onClick={toggleNoticeBoard}
                    className="absolute right-0 bg-black text-white px-3 py-2 flex items-center justify-center rounded-l-lg shadow-lg hover:scale-110"
                >
                    <span className="text-sm font-bold">Open</span>
                </button>
            )}
        </>
    );
}
