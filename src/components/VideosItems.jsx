import React, { useState } from "react";

const Video = ({ title, description, videoId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
      <div className="px-6 py-4">
        <div className="cursor-pointer" onClick={handleClick}>
          {isPlaying ? (
            <iframe
              className="w-full h-40 md:h-64 object-cover"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
            />
          ) : (
            <img src={thumbnail} alt={title} className="w-full h-40 md:h-64 object-cover" />
          )}
        </div>
        <div className="mt-4">
          <h5 className="text-xl font-medium text-gray-900">{title}</h5>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Videos = ({ videos }) => {
  // Check if videos is defined before rendering
  if (!videos) {
    return null; // or render a loading indicator
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Video key={video.videoId} {...video} />
      ))}
    </div>
  );
};


export default Videos;
