export const expectedAttackForPawn = (allElementIDs) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let whitePawn_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "whitePawn") {
      whitePawn_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  let blackPawn_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "blackPawn") {
      blackPawn_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });
  let expectedAttackForWhitePawns = [];
  for (let i = 0; i < whitePawn_ids.length; i++) {
    let name_of_piece = whitePawn_ids[i][0];
    let id0 = +whitePawn_ids[i][1][0];
    let id1 = whitePawn_ids[i][1][1];
    let pawnID = id0 + id1;
    const indexOfFirst = verticalArray.indexOf(id0);
    const indexOfSecond = horizontalArray.indexOf(id1);

    expectedAttackForWhitePawns.push([
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 1],
      name_of_piece,
      [pawnID],
    ]);
  }

  let expectedAttackForBlackPawns = [];

  for (let i = 0; i < blackPawn_ids.length; i++) {
    let name_of_piece = blackPawn_ids[i][0];
    let id0 = +blackPawn_ids[i][1][0];
    let id1 = blackPawn_ids[i][1][1];
    let pawnID = id0 + id1;
    const indexOfFirst = verticalArray.indexOf(id0);
    const indexOfSecond = horizontalArray.indexOf(id1);

    expectedAttackForBlackPawns.push([
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 1],
      name_of_piece,
      [pawnID],
    ]);
  }
  return { expectedAttackForWhitePawns, expectedAttackForBlackPawns };
};
