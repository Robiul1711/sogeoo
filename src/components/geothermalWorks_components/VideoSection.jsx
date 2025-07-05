import React from 'react';

const VideoSection = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden ">
      {/* YouTube Video Embed */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VideoSection;

