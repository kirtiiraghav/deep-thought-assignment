import React from 'react';

const YouTubeEmbed = () => {
    // Hard-coded video ID for the YouTube video
    const videoId = "TiMRwri1xJ8";
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const title = "YouTube Video";

    return (
        <div className="youtube-embed-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
                src={embedUrl}
                title={title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeEmbed;
