import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const { videos } = props;

  return (
    <ul className="col-md-4 list-group">
      {videos &&
        videos.map(video => (
          <VideoListItem
            key={video.etag}
            {...video.snippet}
          />
        ))}
    </ul>
  );
};

export default VideoList;
