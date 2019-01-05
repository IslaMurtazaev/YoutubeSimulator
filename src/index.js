import React from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

youtubeApiSearch({ key: YOUTUBE_API_KEY, term: "game of thrones"}, (data) => {
    console.log(data);
})

const App = () => {
  return <SearchBar />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
