import React from "react";
import { usePlayers } from "../context/PlayerContext";

function PlayerTable() {
  const players = usePlayers();

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Position</th>
          <th>Dribble Skill (s)</th>
          <th>Ball Control</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.Player}>
            <td>{player.Player}</td>
            <td>{player.Team}</td>
            <td>{player.Position}</td>
            <td>{player.DribbleSkill}</td>
            <td>{player.BallControl}</td>
            <td>{player.Age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlayerTable;
