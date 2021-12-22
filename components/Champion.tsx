import React, { useEffect, useState } from "react";
import PerLvlStats from "./PerLvlStats";
import { ChampionStatistics } from "../types/ChampionStatistics";

const Champion = (): JSX.Element => {
  console.log("test");
  const [championStats, setChampionStats] = useState({});
  const [level, setLevel] = useState(1);
  const [sennaData, setSennaData] = useState({});

  const sennaUrl =
    "https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion/Senna.json";
  useEffect(() => {
    fetch(sennaUrl)
      .then((res) => res.json())
      .then((resJson) => resJson.data)
      .then((data) => setSennaData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(sennaData);
  return (
    <div className=" flex items-center flex-col bg-gray-600 w-[600px] h-full border-solid border-2 border-black m-6 p-6">
      <img
        src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8a/Skin_Loading_Screen_Classic_Senna.jpg"
        alt="senna loading screen art"
      />
      <h3 className="my-4 text-white text-4xl ">Senna</h3>
      <span className="my-4 text-white text-bold text-2xl">
        Level: {level}
      </span>{" "}
      <div>
        <button
          onClick={() => (level < 18 ? setLevel(level + 1) : null)}
          className=" mx-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Increase Level
        </button>
        <button
          onClick={() => (level > 1 ? setLevel(level - 1) : null)}
          className=" mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Decrease Level
        </button>
      </div>
      <button className="mx-4 my-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
        Edit Runes
      </button>
      <PerLvlStats />
    </div>
  );
};

export default Champion;
