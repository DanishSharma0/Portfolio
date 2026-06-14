import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="bg-video">
      <video autoPlay loop muted playsInline>
        {/* Replace src with your own nebula loop video file */}
        <source src="/assets/nebula-loop.webm" type="video/webm" />
        {/* fallback for browsers that don't support webm */}
        <source src="/assets/nebula-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
