import { useState } from "react";

function HipHop() {
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-20">Hip-Hop</div>
      <iframe
        className="border-4 border-gray-700"
        src="https://open.spotify.com/embed/track/1YDebgap5OFwXEBG18NJvy"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </>
  );
}

export default HipHop;
