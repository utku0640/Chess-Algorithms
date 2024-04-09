export const expectedAttackForRook = (expectedMoveWhiteRooks, expectedMoveBlackRooks, allElementIDs, boardRef) => {
  let whiteKing_id;
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "whiteKing") {
      whiteKing_id = allElementID.split(" ")[5];
    }
  });

  let blackKing_id;
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "blackKing") {
      blackKing_id = allElementID.split(" ")[5];
    }
  });

  let parentNodeIDArray = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
  }

  const expectedAttackRookFunction = (expectedMoveRooks, killTheKingID) => {
    let expectedAttackRookMultipleArray = [];
    for (let k = 0; k < expectedMoveRooks.length; k++) {
      let rook_up = expectedMoveRooks[k].rookMoveArrayVerticalUp;
      let rook_down = expectedMoveRooks[k].rookMoveArrayVerticalDown;
      let rook_left = expectedMoveRooks[k].rookMoveArrayHorizontalLeft;
      let rook_right = expectedMoveRooks[k].rookMoveArrayHorizontalRight;

      let rookID = expectedMoveRooks[k].rookID;

      let firstElementThatWillBeDeath1_by_rook = rook_up?.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath1_by_rook !== killTheKingID) {
        for (let i = 0; i < rook_up?.length; i++) {
          if (rook_up[i] === firstElementThatWillBeDeath1_by_rook) {
            rook_up = rook_up.slice(0, rook_up.indexOf(rook_up[i]) + 1);
          }
        }
      } else {
        rook_up = rook_up;
      }

      let firstElementThatWillBeDeath2_by_rook = rook_down.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath2_by_rook !== killTheKingID) {
        for (let i = 0; i < rook_down.length; i++) {
          if (rook_down[i] === firstElementThatWillBeDeath2_by_rook) {
            rook_down = rook_down.slice(0, rook_down.indexOf(rook_down[i]) + 1);
          }
        }
      } else {
        rook_down = rook_down;
      }
      let firstElementThatWillBeDeath3_by_rook = rook_left.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath3_by_rook !== killTheKingID) {
        for (let i = 0; i < rook_left.length; i++) {
          if (rook_left[i] === firstElementThatWillBeDeath3_by_rook) {
            rook_left = rook_left.slice(0, rook_left.indexOf(rook_left[i]) + 1);
          }
        }
      } else {
        rook_left = rook_left;
      }

      let firstElementThatWillBeDeath4_by_rook = rook_right.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath4_by_rook !== killTheKingID) {
        for (let i = 0; i < rook_right.length; i++) {
          if (rook_right[i] === firstElementThatWillBeDeath4_by_rook) {
            rook_right = rook_right.slice(0, rook_right.indexOf(rook_right[i]) + 1);
          }
        }
      } else {
        rook_right = rook_right;
      }
      expectedAttackRookMultipleArray.push([rook_up, rook_down, rook_left, rook_right, rookID]);
    }

    return expectedAttackRookMultipleArray;
  };
  let expectedAttackBlackRooks = expectedAttackRookFunction(expectedMoveBlackRooks, whiteKing_id);
  let expectedAttackWhiteRooks = expectedAttackRookFunction(expectedMoveWhiteRooks, blackKing_id);

  return { expectedAttackBlackRooks, expectedAttackWhiteRooks };
};
