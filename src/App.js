import React from "react";
import { useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Acoustic from "./components/Acoustic";
import Metal from "./components/Metal";
import Indie from "./components/Indie";
import HipHop from "./components/HipHop";
import Pop from "./components/Pop";
import Country from "./components/Country";
import Electronic from "./components/Electronic";
import Mood from "./components/Mood";
import Jazz from "./components/Jazz";
import Lofi from "./components/Lofi";
import Rock from "./components/Rock";

const App = () => {
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState("rgb(4, 120, 87)");
  const [bordCol, setBordCol] = useState("rgb(6, 95, 70)");

  function setAcoustic() {
    setTab(1);
    setColor("rgb(84, 83, 79)");
    setBordCol("rgb(56, 55, 52)");
  }

  function setMetal() {
    setTab(2);
    setColor("rgb(68,68,68)");
    setBordCol("rgb(60, 60, 60)");
  }

  function setIndie() {
    setTab(3);
    setColor("rgb(88, 70, 39)");
    setBordCol("rgb(66, 46, 19)");
  }

  function setHipHop() {
    setTab(4);
    setColor("rgb(255, 52, 52)");
    setBordCol("rgb(181, 39, 4)");
  }

  function setPop() {
    setTab(5);
    setColor("rgb(102, 88, 63)");
    setBordCol("rgb(117, 94, 62)");
  }

  function setCountry() {
    setTab(6);
    setColor("rgb(40, 39, 102)");
    setBordCol("rgb(30, 29, 66)");
  }

  function setElectronic() {
    setTab(7);
    setColor("rgb(82, 30, 0)");
    setBordCol("rgb(56, 31, 1)");
  }

  function setMood() {
    setTab(8);
    setColor("rgb(158, 66, 52)");
    setBordCol("rgb(97, 41, 32)");
  }

  function setJazz() {
    setTab(9);
    setColor("rgb(34, 38, 35)");
    setBordCol("rgb(27, 31, 28)");
  }

  function setLofi() {
    setTab(10);
    setColor("rgb(179, 43, 88)");
    setBordCol("rgb(115, 26, 56)");
  }

  function setRock() {
    setTab(11);
    setColor("rgb(167, 194, 182)");
    setBordCol("rgb(111, 133, 123)");
  }

  function displayTab() {
    if (tab === 1) {
      return <Acoustic />;
      console.log("Acoustic");
    } else if (tab === 2) {
      return <Metal />;
      console.log("Metal");
    } else if (tab === 3) {
      return <Indie />;
      console.log("Indie");
    } else if (tab === 4) {
      return <HipHop />;
      console.log("Hip Hop");
    } else if (tab === 5) {
      return <Pop />;
      console.log("Pop");
    } else if (tab === 6) {
      return <Country />;
      console.log("Country");
    } else if (tab === 7) {
      return <Electronic />;
      console.log("Electronic");
    } else if (tab === 8) {
      return <Mood />;
      console.log("Mood");
    } else if (tab === 9) {
      return <Jazz />;
      console.log("Jazz");
    } else if (tab === 10) {
      return <Lofi />;
      console.log("Lofi");
    } else if (tab === 11) {
      return <Rock />;
      console.log("Rock");
    }
    console.log("Welcome");
    return <Welcome />;
  }

  return (
    <>
      <div className="fixed w-full pt-8 pb-8 h-48 bg-gray-800 text-center border-gray-700 border-b-8 border-t-8 overflow-visible">
        <h1 className="m-2 text-white text-5xl font-sans font-bold">
          Good day
        </h1>
        <h2 className="m-2 text-white text-2xl font-sans font-bold">
          What Are You Looking For?
        </h2>
      </div>

      <div className="pt-52 p-8 flex-row row-2 justify-items-center items-center text-center bg-gradient-to-b from-gray-500 to-gray-800 border-t-8 border-gray-600 border-b-8">
        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setAcoustic}
        >
          Acoustic
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setMetal}
        >
          Punk
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setIndie}
        >
          Indie
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setHipHop}
        >
          Hip-Hop
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setPop}
        >
          Pop
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setCountry}
        >
          Country
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setElectronic}
        >
          Electronic
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setMood}
        >
          Mood
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setJazz}
        >
          Jazz
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setLofi}
        >
          Lofi
        </button>

        <button
          className="m-3 font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400"
          onClick={setRock}
        >
          Rock
        </button>
      </div>

      <div
        style={{ backgroundColor: color, borderColor: bordCol }}
        className="flex items-center justify-center h-auto border-t-8 border-b-8"
      >
        <div className="xl:w-1/2 w-4/5 flex flex-col items-center justify-center text-white h-screen">
          {displayTab()}
        </div>
      </div>
      <div className="bg-gradient-to-t from-gray-800 to-gray-700 text-xl font-sans text-white h-20 flex-col text-center pt-6">
        ©Kaden Rettig. Tracecamp 2021.
      </div>
    </>
  );
};

export default App;
