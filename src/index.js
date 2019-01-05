import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(
    () => {
      youtubeApiSearch({ key: YOUTUBE_API_KEY, term: searchString }, data => {
        setVideos(data);
      });
    },
    [searchString]
  );

  console.log(videos);

  return (
    <SearchBar searchString={searchString} setSearchString={setSearchString} />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
