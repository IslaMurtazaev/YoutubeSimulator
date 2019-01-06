import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const { videos, activeVideo, setActiveVideo } = props;

  return (
    <ul className="col-md-4 list-group video-list">
      {videos &&
        videos.map(video => (
          <VideoListItem
            key={video.etag}
            video={video}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        ))}
    </ul>
  );
};

export default VideoList;
