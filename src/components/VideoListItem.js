import React from "react";

const VideoListItem = props => {
  const { title, description, thumbnails } = props;

  return (
    <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={thumbnails.default.url} alt="video"/>
            </div>
            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>
        </div>
    </li>
  );
};

export default VideoListItem;
