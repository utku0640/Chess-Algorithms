export const expectedMoveForRook = (allElementIDs) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let whiteRook_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "whiteRook") {
      whiteRook_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  let blackRook_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "blackRook") {
      blackRook_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  const expectedMoveRookFunction = (rookIDs) => {
    let expectedMoveRookMultipleFunction = [];
    for (let k = 0; k < rookIDs.length; k++) {
      let id0 = +rookIDs[k][1][0];
      let id1 = rookIDs[k][1][1];

      const indexOfFirst = verticalArray.indexOf(id0);
      const indexOfSecond = horizontalArray.indexOf(id1);

      let rookMoveArrayVerticalUp = [];
      let rookMoveArrayVerticalDown = [];
      let rookMoveArrayHorizontalRight = [];
      let rookMoveArrayHorizontalLeft = [];

      for (let i = indexOfFirst + 1; i < verticalArray.length; i++) {
        rookMoveArrayVerticalUp.push(verticalArray[i] + id1);
      }

      for (let i = indexOfFirst - 1; i >= 0; i--) {
        rookMoveArrayVerticalDown.push(verticalArray[i] + id1);
      }

      for (let i = indexOfSecond + 1; i < horizontalArray.length; i++) {
        rookMoveArrayHorizontalRight.push(id0 + horizontalArray[i]);
      }

      for (let i = indexOfSecond - 1; i >= 0; i--) {
        rookMoveArrayHorizontalLeft.push(id0 + horizontalArray[i]);
      }
      expectedMoveRookMultipleFunction.push({
        rookMoveArrayVerticalUp,
        rookMoveArrayVerticalDown,
        rookMoveArrayHorizontalRight,
        rookMoveArrayHorizontalLeft,
        rookID: id0 + id1,
      });
    }

    return expectedMoveRookMultipleFunction;
  };

  let expectedMoveWhiteRooks = expectedMoveRookFunction(whiteRook_ids);
  let expectedMoveBlackRooks = expectedMoveRookFunction(blackRook_ids);

  return { expectedMoveWhiteRooks, expectedMoveBlackRooks };
};
