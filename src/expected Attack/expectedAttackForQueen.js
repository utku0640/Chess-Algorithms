export const expectedAttackForQueen = (expectedMoveWhiteQueens, expectedMoveBlackQueens, allElementIDs, boardRef) => {
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

  const expectedAttackQueenFunction = (expectedMoveQueens, killTheKingID) => {
    let expectedAttackQueensMultipleArray = [];
    for (let k = 0; k < expectedMoveQueens.length; k++) {
      let firstMoveForQueen = expectedMoveQueens[k].firstMoveForQueen;
      let secondMoveForQueen = expectedMoveQueens[k].secondMoveForQueen;
      let thirdMoveForQueen = expectedMoveQueens[k].thirdMoveForQueen;
      let fourthMoveForQueen = expectedMoveQueens[k].fourthMoveForQueen;
      let fifthMoveForQueen = expectedMoveQueens[k].fifthMoveForQueen;
      let sixthMoveForQueen = expectedMoveQueens[k].sixthMoveForQueen;
      let seventhMoveForQueen = expectedMoveQueens[k].seventhMoveForQueen;
      let eighthMoveForQueen = expectedMoveQueens[k].eighthMoveForQueen;

      let queenID = expectedMoveQueens[k].queenID;

      const firstElementThatWillBeDeath1_by_queen = firstMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath1_by_queen !== killTheKingID) {
        for (let i = 0; i < firstMoveForQueen.length; i++) {
          if (firstMoveForQueen[i] === firstElementThatWillBeDeath1_by_queen) {
            firstMoveForQueen = firstMoveForQueen.slice(0, firstMoveForQueen.indexOf(firstMoveForQueen[i]) + 1);
          }
        }
      } else {
        firstMoveForQueen = firstMoveForQueen;
      }
      const firstElementThatWillBeDeath2_by_queen = secondMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath2_by_queen !== killTheKingID) {
        for (let i = 0; i < secondMoveForQueen.length; i++) {
          if (secondMoveForQueen[i] === firstElementThatWillBeDeath2_by_queen) {
            secondMoveForQueen = secondMoveForQueen.slice(0, secondMoveForQueen.indexOf(secondMoveForQueen[i]) + 1);
          }
        }
      } else {
        secondMoveForQueen = secondMoveForQueen;
      }
      const firstElementThatWillBeDeath3_by_queen = thirdMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath3_by_queen !== killTheKingID) {
        for (let i = 0; i < thirdMoveForQueen.length; i++) {
          if (thirdMoveForQueen[i] === firstElementThatWillBeDeath3_by_queen) {
            thirdMoveForQueen = thirdMoveForQueen.slice(0, thirdMoveForQueen.indexOf(thirdMoveForQueen[i]) + 1);
          }
        }
      } else {
        thirdMoveForQueen = thirdMoveForQueen;
      }
      const firstElementThatWillBeDeath4_by_queen = fourthMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath4_by_queen !== killTheKingID) {
        for (let i = 0; i < fourthMoveForQueen.length; i++) {
          if (fourthMoveForQueen[i] === firstElementThatWillBeDeath4_by_queen) {
            fourthMoveForQueen = fourthMoveForQueen.slice(0, fourthMoveForQueen.indexOf(fourthMoveForQueen[i]) + 1);
          }
        }
      } else {
        fourthMoveForQueen = fourthMoveForQueen;
      }
      const firstElementThatWillBeDeath5_by_queen = fifthMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath5_by_queen !== killTheKingID) {
        for (let i = 0; i < fifthMoveForQueen.length; i++) {
          if (fifthMoveForQueen[i] === firstElementThatWillBeDeath5_by_queen) {
            fifthMoveForQueen = fifthMoveForQueen.slice(0, fifthMoveForQueen.indexOf(fifthMoveForQueen[i]) + 1);
          }
        }
      } else {
        fifthMoveForQueen = fifthMoveForQueen;
      }
      const firstElementThatWillBeDeath6_by_queen = sixthMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath6_by_queen !== killTheKingID) {
        for (let i = 0; i < sixthMoveForQueen.length; i++) {
          if (sixthMoveForQueen[i] === firstElementThatWillBeDeath6_by_queen) {
            sixthMoveForQueen = sixthMoveForQueen.slice(0, sixthMoveForQueen.indexOf(sixthMoveForQueen[i]) + 1);
          }
        }
      } else {
        sixthMoveForQueen = sixthMoveForQueen;
      }
      const firstElementThatWillBeDeath7_by_queen = seventhMoveForQueen.find((item) =>
        parentNodeIDArray.includes(item)
      );

      if (firstElementThatWillBeDeath7_by_queen !== killTheKingID) {
        for (let i = 0; i < seventhMoveForQueen.length; i++) {
          if (seventhMoveForQueen[i] === firstElementThatWillBeDeath7_by_queen) {
            seventhMoveForQueen = seventhMoveForQueen.slice(0, seventhMoveForQueen.indexOf(seventhMoveForQueen[i]) + 1);
          }
        }
      } else {
        seventhMoveForQueen = seventhMoveForQueen;
      }
      const firstElementThatWillBeDeath8_by_queen = eighthMoveForQueen.find((item) => parentNodeIDArray.includes(item));

      if (firstElementThatWillBeDeath8_by_queen !== killTheKingID) {
        for (let i = 0; i < eighthMoveForQueen.length; i++) {
          if (eighthMoveForQueen[i] === firstElementThatWillBeDeath8_by_queen) {
            eighthMoveForQueen = eighthMoveForQueen.slice(0, eighthMoveForQueen.indexOf(eighthMoveForQueen[i]) + 1);
          }
        }
      } else {
        eighthMoveForQueen = eighthMoveForQueen;
      }
      expectedAttackQueensMultipleArray.push([
        firstMoveForQueen,
        secondMoveForQueen,
        thirdMoveForQueen,
        fourthMoveForQueen,
        fifthMoveForQueen,
        sixthMoveForQueen,
        seventhMoveForQueen,
        eighthMoveForQueen,
        queenID,
      ]);
    }
    return expectedAttackQueensMultipleArray;
  };

  let expectedAttackWhiteQueens = expectedAttackQueenFunction(expectedMoveWhiteQueens, blackKing_id);
  let expectedAttackBlackQueens = expectedAttackQueenFunction(expectedMoveBlackQueens, whiteKing_id);

  return { expectedAttackWhiteQueens, expectedAttackBlackQueens };
};
