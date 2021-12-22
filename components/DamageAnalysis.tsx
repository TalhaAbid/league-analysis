import React from "react";
import Champion from "./Champion";
import { ChampionStatistics } from "../types/ChampionStatistics";

const DamageAnalysis = (): JSX.Element => {
  console.log("test");
  return (
    <div className="flex justify-center items-center">
      <Champion />
      <Champion />
    </div>
  );
};

export default DamageAnalysis;
