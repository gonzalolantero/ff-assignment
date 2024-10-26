import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="border p-4 m-2">
      <h2 className="font-bold">{player.Player}</h2>
      <p>Team: {player.Team}</p>
      <p>Position: {player.Position}</p>
      <p>Dribble Skill: {player.DribbleSkill}s</p>
      <p>Ball Control: {player.BallControl}</p>
      <p>Age: {player.Age}</p>
    </div>
  );
}

export default PlayerCard;
