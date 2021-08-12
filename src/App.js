import React from "react";
import Spotify from "./components/Spotify";

const App = () => {
  return (
    <>
      <div className="pt-5 pb-5 h-32 bg-gray-900 flex grid cols-1 items-center justify-items-center">
        <label className="text-white text-xl font-spotify" for="searchBox">
          What Are You Looking For?
        </label>
        <textarea
          className="font-mono pt-2 resize-none overflow-hidden rounded-lg h-12 w-1/3 text-center border-4 "
          id="searchBox"
          name="searchSpotify"
          placeholder="Artists, songs, or podcasts"
        ></textarea>
      </div>

      <div className="border-t-4 border-gray-700 flex items-center justify-center h-screen bg-green-900">
        <div className="xl:w-1/2 w-4/5 flex items-center justify-center text-white border-4 border-white">
          <Spotify />
        </div>
      </div>
    </>
  );
};

export default App;
