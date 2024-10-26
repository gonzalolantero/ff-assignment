import playersData from "../data/players.json";

// Function to load data (in this case, directly imported from JSON)
export const loadPlayerData = () => {
  // Perform any cleaning, filtering, or transformation if needed
  const cleanedData = playersData.map((player) => ({
    ...player,
    // Handle missing data by providing defaults, e.g., Position: "Unknown" if empty
    Position: player.Position || "Unknown",
    DribbleSkill: player.DribbleSkill || 0, // Assuming 0 as default if needed
  }));

  return cleanedData;
};