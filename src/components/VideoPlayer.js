import React from "react";
import Spinner from "./Spinner";

const VideoPlayer = props => {
  const { snippet, id } = props;

  return snippet && id ? (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={snippet.title}
          src={`https://www.youtube.com/embed/${id.videoId}`}
          className="embed-responsive-item"
        />
      </div>
      <div className="details">
        <div>{snippet.title}</div>
        <div>{snippet.description}</div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default VideoPlayer;
