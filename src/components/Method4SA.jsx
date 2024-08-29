import React, { useState } from 'react';
import upArrow from '../../assests/images/upArrow.svg'

const CollapsibleSection = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleSection = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="collapsible-section px-4 py-4">
            <div className="section-title flex items-center gap-4 bg-[#F2F2F2] py-2 px-2 text-sm font-semibold" onClick={toggleSection}>
                <img className='cursor-pointer' src={upArrow} alt="Up Arrow"
                    // Rotate the arrow based on the expanded state
                    style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
                />
                {title}
            </div>
            {expanded && <div className="text-sm pt-2 pb-2">{content}
                <div className='pt-4 text-[#606161] font-semibold text-right'>See More</div></div>}
        </div>
    );
};

const Method4SA = () => {
    return (
        <div className="my-component">
            <CollapsibleSection
                title="Introduction"
                content="How to bring an idea into progress using the 4SA Method?"
            />
            <CollapsibleSection
                title="Thread A"
                content="How are you going to develop your strategy? Which method will you use? What if the project is lengthy?"
            />

        </div>
    );
};

export default Method4SA;
