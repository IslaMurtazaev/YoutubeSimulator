import React from "react";

const VideoListItem = ({ video, activeVideo, setActiveVideo }) => {
  const active = video.etag === activeVideo.etag ? "active" : "";

  return (
    <li
      className={`list-group-item ${active}`}
      onClick={() => setActiveVideo(video)}
    >
      <div className="video-list row">
        <div className="col-lg-4 col-md-12">
          <img src={video.snippet.thumbnails.default.url} alt="video" />
        </div>
        <div className="col-lg-8 col-md-12">
          <div>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
