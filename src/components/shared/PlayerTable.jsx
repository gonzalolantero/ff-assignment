import React, { useState } from "react";
import { usePlayers } from "../../context/PlayerContext";
import useSort from "../../hooks/useSort";
import useFilter from "../../hooks/useFilter";

function PlayerTable({ filters, searchTerm }) {
  const players = usePlayers();
  const { sortColumn, sortOrder, handleHeaderClick, sortedData } = useSort();

  const sortedPlayers = sortedData(players);

  const filteredPlayers = useFilter(sortedPlayers, filters, searchTerm);

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
