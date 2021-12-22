import React from "react";

const PerLvlStats = () => {
  return (
    <div>
      <div>
        <table className="table-auto text-left w-full border-collapse">
          <thead>
            <tr>
              <th>Stat Name</th>
              <th>Current Num</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Attack Damage</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Ability Power</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Armor</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Magic Resists</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Attack Speed</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Ability Haste</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Critical Strike Chance</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Movement Speed</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Health Regen</td>
              <td>0</td>
            </tr>
            <tr>
              <td>{"Resource(mana/energy) Regen \t"}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Lethality</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Armor Penetration</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Magic Penetration</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Lifesteal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Physical Vamp</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Omni Vamp</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Attack Range</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PerLvlStats;