export const expectedMoveForKing = (allElementIDs) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let whiteKing_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "whiteKing") {
      whiteKing_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  let blackKing_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "blackKing") {
      blackKing_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  const expectedMoveKingFunction = (kingID) => {
    if (kingID[0]) {
      let id0 = +kingID[0][1][0];
      let id1 = kingID[0][1][1];

      const indexOfFirst = verticalArray.indexOf(id0);
      const indexOfSecond = horizontalArray.indexOf(id1);

      return [
        verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 1],
        verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond],
        verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 1],
        verticalArray[indexOfFirst] + horizontalArray[indexOfSecond - 1],
        verticalArray[indexOfFirst] + horizontalArray[indexOfSecond + 1],
        verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 1],
        verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond],
        verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 1],
      ];
    }
  };

  let expectedMoveWhiteKing = expectedMoveKingFunction(whiteKing_ids);
  let expectedMoveBlackKing = expectedMoveKingFunction(blackKing_ids);

  return { expectedMoveWhiteKing, expectedMoveBlackKing };
};
