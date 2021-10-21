import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const description = video.snippet.description;

  return (
    <div
      className='video-item item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={description}
      />
      <div className='content'>
        <div className='header'>{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
