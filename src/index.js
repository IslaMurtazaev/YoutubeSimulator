import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import "bootstrap/dist/css/bootstrap.css";
import { useDebounce } from 'use-debounce';

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [activeVideo, setActiveVideo] = useState({});
  const debouncedSearchString = useDebounce(searchString, 300);

  useEffect(
    () => {
      youtubeApiSearch({ key: YOUTUBE_API_KEY, term: searchString }, data => {
        setVideos(data);
      });
    },
    [debouncedSearchString]
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <VideoPlayer {...activeVideo} />
        <VideoList videos={videos} activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
