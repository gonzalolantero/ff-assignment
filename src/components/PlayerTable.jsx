// components/PlayerTable.jsx
import React, { useState } from "react";
import { usePlayers } from "../context/PlayerContext";

function PlayerTable({ filters }) {
  const players = usePlayers();

  // State to track current sorting column and order
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to handle sorting logic when a header is clicked
  function handleHeaderClick(column) {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  }

  // Function to sort players array based on sortColumn and sortOrder
  const sortedPlayers = [...players].sort((a, b) => {
    if (!sortColumn) return 0;

    let valueA = a[sortColumn];
    let valueB = b[sortColumn];

    // Special case for sorting "Player" column numerically
    if (sortColumn === "Player") {
      valueA = parseInt(valueA.replace("Player ", ""), 10);
      valueB = parseInt(valueB.replace("Player ", ""), 10);
    }

    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Filtering based on the provided filters
  const filteredPlayers = sortedPlayers.filter(player => {
    const {
      minDribbleSkills,
      maxDribbleSkills,
      minAge,
      maxAge,
      minBallControl,
      maxBallControl,
      minLength,
      maxLength,
      minWeight,
      maxWeight,
      minPassingUnderPressure,
      maxPassingUnderPressure,
      team,
      position,
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
      (!team || player.Team === team) && // Team filter
      (!position || player.Position === position) // Position filter
    );
  });

  return (
    <table className="min-w-full border border-separate">
      <thead>
        <tr>
          {[
            "Player",
            "DribbleSkills",
            "Length",
            "Weight",
            "Age",
            "BallControl",
            "PassingUnderPressure",
            "Team",
            "Position",
          ].map((column) => (
            <th
              key={column}
              onClick={() => handleHeaderClick(column)}
              className="px-4 py-2 cursor-pointer text-left"
            >
              {column} {sortColumn === column ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlayers.map((player) => (
          <tr key={player.Player}>
            <td>{player.Player}</td>
            <td>{player.DribbleSkills}</td>
            <td>{player.Length}</td>
            <td>{player.Weight}</td>
            <td>{player.Age}</td>
            <td>{player.BallControl}</td>
            <td>{player.PassingUnderPressure}</td>
            <td>{player.Team}</td>
            <td>{player.Position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlayerTable;
