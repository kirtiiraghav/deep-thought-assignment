import React from 'react';
import { projectData } from '../../projectData';

const YouTubeEmbed = () => {
    const data = projectData
    // console.log(data.tasks[0].assets[0].asset_content);
    const title = "YouTube Video";

    return (
        <div className="youtube-embed-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
                src={data.tasks[0].assets[0].asset_content}
                title={title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeEmbed;
