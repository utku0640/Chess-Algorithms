export const expectedAttackForBishop = (expectedMoveWhiteBishop, expectedMoveBlackBishop, allElementIDs, boardRef) => {
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

  const expectedAttackBishopFunction = (expecteMoveBishop, killTheKingID) => {
    let expectedAttackBishopMultipleArray = [];
    for (let k = 0; k < expecteMoveBishop.length; k++) {
      let bishop_first = expecteMoveBishop[k].firstMoveForBishop;
      let bishop_second = expecteMoveBishop[k].secondMoveForBishop;
      let bishop_third = expecteMoveBishop[k].thirdMoveForBishop;
      let bishop_fourth = expecteMoveBishop[k].fourthMoveForBishop;

      let bishopID = expecteMoveBishop[k].bishopID;

      const firstElementThatWillBeDeath1_by_bishop = bishop_first?.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath1_by_bishop !== killTheKingID) {
        for (let i = 0; i < bishop_first?.length; i++) {
          if (bishop_first[i] === firstElementThatWillBeDeath1_by_bishop) {
            bishop_first = bishop_first.slice(0, bishop_first.indexOf(bishop_first[i]) + 1);
          }
        }
      } else {
        bishop_first = bishop_first;
      }

      const firstElementThatWillBeDeath2_by_bishop = bishop_second?.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath2_by_bishop !== killTheKingID) {
        for (let i = 0; i < bishop_second?.length; i++) {
          if (bishop_second[i] === firstElementThatWillBeDeath2_by_bishop) {
            bishop_second = bishop_second.slice(0, bishop_second.indexOf(bishop_second[i]) + 1);
          }
        }
      } else {
        bishop_second = bishop_second;
      }

      const firstElementThatWillBeDeath3_by_bishop = bishop_third?.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath3_by_bishop !== killTheKingID) {
        for (let i = 0; i < bishop_third?.length; i++) {
          if (bishop_third[i] === firstElementThatWillBeDeath3_by_bishop) {
            bishop_third = bishop_third.slice(0, bishop_third.indexOf(bishop_third[i]) + 1);
          }
        }
      } else {
        bishop_third = bishop_third;
      }

      const firstElementThatWillBeDeath4_by_bishop = bishop_fourth?.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath4_by_bishop !== killTheKingID) {
        for (let i = 0; i < bishop_fourth?.length; i++) {
          if (bishop_fourth[i] === firstElementThatWillBeDeath4_by_bishop) {
            bishop_fourth = bishop_fourth.slice(0, bishop_fourth.indexOf(bishop_fourth[i]) + 1);
          }
        }
      } else {
        bishop_fourth = bishop_fourth;
      }
      expectedAttackBishopMultipleArray.push([bishop_first, bishop_second, bishop_third, bishop_fourth, bishopID]);
    }
    return expectedAttackBishopMultipleArray;
  };

  let expectedAttackWhiteBishops = expectedAttackBishopFunction(expectedMoveWhiteBishop, blackKing_id);

  let expectedAttackBlackBishops = expectedAttackBishopFunction(expectedMoveBlackBishop, whiteKing_id);

  return { expectedAttackWhiteBishops, expectedAttackBlackBishops };
};
