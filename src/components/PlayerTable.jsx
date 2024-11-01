// components/PlayerTable.jsx
import React, { useState } from "react";
import { usePlayers } from "../context/PlayerContext";

function PlayerTable({ filters, searchTerm }) {
  const players = usePlayers();
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  function handleHeaderClick(column) {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  }

  const sortedPlayers = [...players].sort((a, b) => {
    if (!sortColumn) return 0;
    let valueA = a[sortColumn];
    let valueB = b[sortColumn];
    if (sortColumn === "Player") {
      valueA = parseInt(valueA.replace("Player ", ""), 10);
      valueB = parseInt(valueB.replace("Player ", ""), 10);
    }
    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Filter by both player name (search term) and other attribute filters
  const filteredPlayers = sortedPlayers.filter(player => {
    const {
      minDribbleSkills, maxDribbleSkills, minAge, maxAge,
      minBallControl, maxBallControl, minLength, maxLength,
      minWeight, maxWeight, minPassingUnderPressure, maxPassingUnderPressure,
      team, position
    } = filters;

    return (
      (minDribbleSkills === undefined || player.DribbleSkills >= minDribbleSkills) &&
      (maxDribbleSkills === undefined || player.DribbleSkills <= maxDribbleSkills) &&
      (minAge === undefined || player.Age >= minAge) &&
      (maxAge === undefined || player.Age <= maxAge) &&
      (minBallControl === undefined || player.BallControl >= minBallControl) &&
      (maxBallControl === undefined || player.BallControl <= maxBallControl) &&
      (minLength === undefined || player.Length >= minLength) &&
      (maxLength === undefined || player.Length <= maxLength) &&
      (minWeight === undefined || player.Weight >= minWeight) &&
      (maxWeight === undefined || player.Weight <= maxWeight) &&
      (minPassingUnderPressure === undefined || player.PassingUnderPressure >= minPassingUnderPressure) &&
      (maxPassingUnderPressure === undefined || player.PassingUnderPressure <= maxPassingUnderPressure) &&
      (!team || player.Team === team) &&
      (!position || player.Position === position) &&
      (!searchTerm || player.Player.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <table className="min-w-full bg-neutral-800 text-neutral-100 border-collapse border border-neutral-700 shadow-md">
      <thead>
        <tr>
          {["Player", "DribbleSkills", "Length", "Weight", "Age", "BallControl", "PassingUnderPressure", "Team", "Position"].map(column => (
            <th
              key={column}
              onClick={() => handleHeaderClick(column)}
              className="px-4 py-2 text-sm font-semibold text-neutral-200 border-b border-neutral-700 bg-neutral-900 cursor-pointer hover:bg-neutral-700 transition-colors"
            >
              {column} {sortColumn === column ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlayers.map((player, index) => (
          <tr
            key={player.Player}
            className={`text-center transition-colors ${
              index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-700"
            } hover:bg-neutral-600`}
          >
            <td className="px-4 py-2 border-b border-neutral-700">{player.Player}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.DribbleSkills}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.Length}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.Weight}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.Age}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.BallControl}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.PassingUnderPressure}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.Team}</td>
            <td className="px-4 py-2 border-b border-neutral-700">{player.Position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlayerTable;
