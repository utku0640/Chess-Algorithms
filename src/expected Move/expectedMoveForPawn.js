export const expectedMoveForPawn = (allElementIDs, boardRef) => {
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

  let parentNodeIDArray = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
  }

  let expectedMoveBlackPawns = [];

  for (let i = 0; i < blackPawn_ids.length; i++) {
    let name_of_piece = blackPawn_ids[i][0].slice(0, 9);

    let id0 = +blackPawn_ids[i][1][0];
    let id1 = blackPawn_ids[i][1][1];

    if (name_of_piece == "blackPawn") {
      if (id0 == "7" && !parentNodeIDArray.includes(id0 - 1 + id1)) {
        expectedMoveBlackPawns.push(id0 - 1 + id1, id0 - 2 + id1);
      } else {
        expectedMoveBlackPawns.push(id0 - 1 + id1);
      }
    }
  }

  let expectedMoveWhitePawns = [];

  for (let i = 0; i < whitePawn_ids.length; i++) {
    let name_of_piece = whitePawn_ids[i][0].slice(0, 9);

    let id0 = +whitePawn_ids[i][1][0];
    let id1 = whitePawn_ids[i][1][1];

    if (name_of_piece === "whitePawn") {
      if (id0 == "2" && !parentNodeIDArray.includes(id0 + 1 + id1)) {
        expectedMoveWhitePawns.push(id0 + 1 + id1, id0 + 2 + id1);
      } else {
        expectedMoveWhitePawns.push(id0 + 1 + id1);
      }
    }
  }

  return { expectedMoveWhitePawns, expectedMoveBlackPawns };
};
