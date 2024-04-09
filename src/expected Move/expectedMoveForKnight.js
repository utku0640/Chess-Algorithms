export const expectedMoveForKnight = (allElementIDs) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let whiteKnight_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 11) === "whiteKnight") {
      whiteKnight_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  let blackKnight_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 11) === "blackKnight") {
      blackKnight_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  const expectedMoveKnightFunction = (knightIDs) => {
    let expectedMoveKnightMultipleArray = [];
    for (let k = 0; k < knightIDs.length; k++) {
      let id0 = +knightIDs[k][1][0];
      let id1 = knightIDs[k][1][1];
      let indexOfFirst = verticalArray.indexOf(id0);
      let indexOfSecond = horizontalArray.indexOf(id1);

      expectedMoveKnightMultipleArray.push([
        verticalArray[indexOfFirst + 2] + horizontalArray[indexOfSecond - 1],
        verticalArray[indexOfFirst + 2] + horizontalArray[indexOfSecond + 1],
        verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 2],
        verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 2],
        verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 2],
        verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 2],
        verticalArray[indexOfFirst - 2] + horizontalArray[indexOfSecond - 1],
        verticalArray[indexOfFirst - 2] + horizontalArray[indexOfSecond + 1],
        { knightID: id0 + id1 },
      ]);
    }

    return expectedMoveKnightMultipleArray;
  };
  let expectedMoveBlackKnights = expectedMoveKnightFunction(blackKnight_ids);
  let expectedMoveWhiteKnights = expectedMoveKnightFunction(whiteKnight_ids);

  return { expectedMoveWhiteKnights, expectedMoveBlackKnights };
};
