function Mood() {
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-20">Mood</div>
      <iframe
        className="border-4 border-gray-700"
        src="https://open.spotify.com/embed/track/7kQkmyoHCEqwe7QwDbkSXM"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </>
  );
}

export default Mood;
