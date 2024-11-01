const useFilter = (players, filters, searchTerm) => {
    return players.filter(player => {
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
        (!team || player.Team === team) &&
        (!position || player.Position === position) &&
        (!searchTerm || player.Player.toLowerCase().includes(searchTerm.toLowerCase())) // Search by name
      );
    });
  };
  
  export default useFilter;
  