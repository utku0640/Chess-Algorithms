export const white_king_in_danger = (
  expectedAttackPawn,
  expectedAttackRook,
  expectedAttackBishop,
  expectedAttackKnight,
  expectedAttackQueen,
  expectedAttackKing,
  allElementIDs,
  expectedMoveWhitePawns,
  expectedMoveWhiteKing,
  boardRef,
  game_end_audio
) => {
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

  let { expectedAttackForWhitePawns, expectedAttackForBlackPawns } = expectedAttackPawn;
  let { expectedAttackWhiteRooks, expectedAttackBlackRooks } = expectedAttackRook;
  let { expectedAttackWhiteBishops, expectedAttackBlackBishops } = expectedAttackBishop;
  let { expectedAttackForWhiteKnight, expectedAttackForBlackKnight } = expectedAttackKnight;
  let { expectedAttackWhiteQueens, expectedAttackBlackQueens } = expectedAttackQueen;
  let { expectedAttackForWhiteKing, expectedAttackForBlackKing } = expectedAttackKing;

  let pieceIDThatMustGetKill;
  let intervalThatMustBeShutDown;
  let whiteKingCannotGoThisTile = [];

  whiteKingCannotGoThisTile.push(expectedAttackForBlackKing);

  for (let i = 0; i < expectedAttackBlackQueens.length; i++) {
    for (let k = 0; k < expectedAttackBlackQueens[i].length; k++) {
      if (expectedAttackBlackQueens[i][k].includes(whiteKing_id)) {
        pieceIDThatMustGetKill = expectedAttackBlackQueens[i][8];
        let indexOfWhiteKing = expectedAttackBlackQueens[i][k].indexOf(whiteKing_id);
        intervalThatMustBeShutDown = expectedAttackBlackQueens[i][k].slice(0, indexOfWhiteKing);
      }
      whiteKingCannotGoThisTile.push(expectedAttackBlackQueens[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackBlackBishops.length; i++) {
    for (let k = 0; k < expectedAttackBlackBishops[i].length; k++) {
      if (expectedAttackBlackBishops[i][k].includes(whiteKing_id)) {
        pieceIDThatMustGetKill = expectedAttackBlackBishops[i][4];
        let indexOfWhiteKing = expectedAttackBlackBishops[i][k].indexOf(whiteKing_id);
        intervalThatMustBeShutDown = expectedAttackBlackBishops[i][k].slice(0, indexOfWhiteKing);
      }
      whiteKingCannotGoThisTile.push(expectedAttackBlackBishops[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackBlackRooks.length; i++) {
    for (let k = 0; k < expectedAttackBlackRooks[i].length; k++) {
      if (expectedAttackBlackRooks[i][k].includes(whiteKing_id)) {
        pieceIDThatMustGetKill = expectedAttackBlackRooks[i][4];
        let indexOfWhiteKing = expectedAttackBlackRooks[i][k].indexOf(whiteKing_id);
        intervalThatMustBeShutDown = expectedAttackBlackRooks[i][k].slice(0, indexOfWhiteKing);
      }
      whiteKingCannotGoThisTile.push(expectedAttackBlackRooks[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackForBlackKnight.length; i++) {
    for (let k = 0; k < expectedAttackForBlackKnight[i].length; k++) {
      if (expectedAttackForBlackKnight[i][k] === whiteKing_id) {
        pieceIDThatMustGetKill = expectedAttackForBlackKnight[i][8].knightID;
        intervalThatMustBeShutDown = "";
      }
      whiteKingCannotGoThisTile.push([expectedAttackForBlackKnight[i][k]]);
    }
  }

  for (let i = 0; i < expectedAttackForBlackPawns.length; i++) {
    if (expectedAttackForBlackPawns[i][0] == whiteKing_id || expectedAttackForBlackPawns[i][1] == whiteKing_id) {
      pieceIDThatMustGetKill = expectedAttackForBlackPawns[i][3][0];
      intervalThatMustBeShutDown = "";
    }
    whiteKingCannotGoThisTile.push([expectedAttackForBlackPawns[i][0], expectedAttackForBlackPawns[i][1]]);
  }

  let whiteKingCannotGoThisTileArray = [];
  for (let i = 0; i < whiteKingCannotGoThisTile.length; i++) {
    for (let k = 0; k < whiteKingCannotGoThisTile[i]?.length; k++) {
      whiteKingCannotGoThisTileArray.push(whiteKingCannotGoThisTile[i][k]);
    }
  }
  whiteKingCannotGoThisTileArray = whiteKingCannotGoThisTileArray.filter((item) => item.length == 2);

  // console.log(pieceIDThatMustGetKill);
  // console.log(intervalThatMustBeShutDown);

  //-----------------------------------------------------------------

  let removeDangerOnWhiteKing = [
    expectedAttackWhiteQueens,
    expectedAttackWhiteBishops,
    expectedAttackWhiteRooks,
    [expectedAttackForWhiteKnight],
  ];

  let removeDangerOnWhiteKingArray = [];
  for (let i = 0; i < removeDangerOnWhiteKing.length; i++) {
    for (let k = 0; k < removeDangerOnWhiteKing[i].length; k++) {
      for (let j = 0; j < removeDangerOnWhiteKing[i][k].length; j++) {
        for (let f = 0; f < removeDangerOnWhiteKing[i][k][j].length; f++) {
          removeDangerOnWhiteKingArray.push(removeDangerOnWhiteKing[i][k][j][f]);
        }
      }
    }
  }
  removeDangerOnWhiteKingArray = removeDangerOnWhiteKingArray.filter((item) => item.length == 2);

  let dangerArrayByBlackPieces = [];
  for (let i = 0; i < intervalThatMustBeShutDown?.length; i++) {
    dangerArrayByBlackPieces.push(intervalThatMustBeShutDown[i]);
  }
  dangerArrayByBlackPieces.push(pieceIDThatMustGetKill);

  removeDangerOnWhiteKingArray = pieceIDThatMustGetKill
    ? removeDangerOnWhiteKingArray.filter((item) => dangerArrayByBlackPieces.includes(item))
    : null;
  //___________________________________________

  let expectedMoveWhitePawnsArray = intervalThatMustBeShutDown
    ? expectedMoveWhitePawns?.filter((item) => intervalThatMustBeShutDown.includes(item))
    : null;
  let expectedAttackWhitePawnsID = [];

  for (let i = 0; i < expectedAttackForWhitePawns.length; i++) {
    expectedAttackWhitePawnsID.push(expectedAttackForWhitePawns[i][0], expectedAttackForWhitePawns[i][1]);
  }

  let expectedAttackWhitePawnsArray = pieceIDThatMustGetKill
    ? expectedAttackWhitePawnsID?.find((item) => item == pieceIDThatMustGetKill)
    : null;
  //________________________________________________________________

  let defenseMovementForWhiteKing =
    removeDangerOnWhiteKingArray && expectedMoveWhitePawnsArray
      ? [...removeDangerOnWhiteKingArray, ...expectedMoveWhitePawnsArray, expectedAttackWhitePawnsArray]
      : null;
  defenseMovementForWhiteKing = defenseMovementForWhiteKing?.filter((item) => item?.length == 2);

  //_______________________________________________________

  let run_off_move_for_whiteKing;

  run_off_move_for_whiteKing = expectedMoveWhiteKing?.filter((item) => !whiteKingCannotGoThisTileArray.includes(item));

  let parentNodeIDArray_whitePieces = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    if (boardRef.current.children[i].children[0].children[0]?.name?.slice(0, 5) === "white") {
      parentNodeIDArray_whitePieces.push(boardRef.current.children[i].children[0].children[0].parentNode.id);
    }
  }

  run_off_move_for_whiteKing = run_off_move_for_whiteKing?.filter(
    (item) => !parentNodeIDArray_whitePieces.includes(item)
  );
  run_off_move_for_whiteKing = run_off_move_for_whiteKing?.filter((item) => item.length == 2);

  //checkmate
  //checkmate

  let whiteSideLoose = false;
  if (pieceIDThatMustGetKill && run_off_move_for_whiteKing.length == 0 && defenseMovementForWhiteKing.length == 0) {
    whiteSideLoose = true;
    game_end_audio();
  }

  return {
    whiteKingDanger_pieceIDThatMustGetKill: pieceIDThatMustGetKill,
    whiteKingDanger_intervalThatMustBeShutDown: intervalThatMustBeShutDown,
    whiteKingCannotGoThisTileArray,
    run_off_move_for_whiteKing,
    whiteSideLoose,
  };
};
