function Lofi() {
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-20">Lofi</div>
      <iframe
        className="border-4 border-gray-700"
        src="https://open.spotify.com/embed/track/6uF20V3rDiJjkDTHMpWf5J"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </>
  );
}

export default Lofi;
