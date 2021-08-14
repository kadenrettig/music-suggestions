function Indie() {
  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-20">Indie</div>
      <iframe
        className="border-4 border-gray-700"
        src="https://open.spotify.com/embed/track/7B3z0ySL9Rr0XvZEAjWZzM"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </>
  );
}

export default Indie;
