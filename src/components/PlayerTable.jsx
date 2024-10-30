import React from "react";
import { usePlayers } from "../context/PlayerContext";

function PlayerTable() {
  const players = usePlayers();

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Dribble Skills</th>
          <th>Length</th>
          <th>Weight</th>
          <th>Age</th>
          <th>Ball Control</th>
          <th>Passing Under Pressure</th>
          <th>Team</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
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
