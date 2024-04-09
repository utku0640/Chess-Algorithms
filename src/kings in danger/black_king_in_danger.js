export const black_king_in_danger = (
  expectedAttackPawn,
  expectedAttackRook,
  expectedAttackBishop,
  expectedAttackKnight,
  expectedAttackQueen,
  expectedAttackKing,
  allElementIDs,
  expectedMoveBlackPawns,
  expectedMoveBlackKing,
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
  let blackKingCannotGoThisTile = [];

  blackKingCannotGoThisTile.push(expectedAttackForWhiteKing);

  for (let i = 0; i < expectedAttackWhiteQueens.length; i++) {
    for (let k = 0; k < expectedAttackWhiteQueens[i].length; k++) {
      if (expectedAttackWhiteQueens[i][k].includes(blackKing_id)) {
        pieceIDThatMustGetKill = expectedAttackWhiteQueens[i][8];
        let indexOfBlackKing = expectedAttackWhiteQueens[i][k].indexOf(blackKing_id);
        intervalThatMustBeShutDown = expectedAttackWhiteQueens[i][k].slice(0, indexOfBlackKing);
      }
      blackKingCannotGoThisTile.push(expectedAttackWhiteQueens[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackWhiteBishops.length; i++) {
    for (let k = 0; k < expectedAttackWhiteBishops[i].length; k++) {
      if (expectedAttackWhiteBishops[i][k].includes(blackKing_id)) {
        pieceIDThatMustGetKill = expectedAttackWhiteBishops[i][4];
        let indexOfBlackKing = expectedAttackWhiteBishops[i][k].indexOf(blackKing_id);
        intervalThatMustBeShutDown = expectedAttackWhiteBishops[i][k].slice(0, indexOfBlackKing);
      }
      blackKingCannotGoThisTile.push(expectedAttackWhiteBishops[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackWhiteRooks.length; i++) {
    for (let k = 0; k < expectedAttackWhiteRooks[i].length; k++) {
      if (expectedAttackWhiteRooks[i][k].includes(blackKing_id)) {
        pieceIDThatMustGetKill = expectedAttackWhiteRooks[i][4];
        let indexOfBlackKing = expectedAttackWhiteRooks[i][k].indexOf(blackKing_id);
        intervalThatMustBeShutDown = expectedAttackWhiteRooks[i][k].slice(0, indexOfBlackKing);
      }
      blackKingCannotGoThisTile.push(expectedAttackWhiteRooks[i][k]);
    }
  }

  for (let i = 0; i < expectedAttackForWhiteKnight.length; i++) {
    for (let k = 0; k < expectedAttackForWhiteKnight[i].length; k++) {
      if (expectedAttackForWhiteKnight[i][k] === blackKing_id) {
        pieceIDThatMustGetKill = expectedAttackForWhiteKnight[i][8].knightID;
        intervalThatMustBeShutDown = "";
      }
      blackKingCannotGoThisTile.push([expectedAttackForWhiteKnight[i][k]]);
    }
  }

  for (let i = 0; i < expectedAttackForWhitePawns.length; i++) {
    if (expectedAttackForWhitePawns[i][0] == blackKing_id || expectedAttackForWhitePawns[i][1] == blackKing_id) {
      pieceIDThatMustGetKill = expectedAttackForWhitePawns[i][3][0];
      intervalThatMustBeShutDown = "";
    }
    blackKingCannotGoThisTile.push([expectedAttackForWhitePawns[i][0], expectedAttackForWhitePawns[i][1]]);
  }

  let blackKingCannotGoThisTileArray = [];
  for (let i = 0; i < blackKingCannotGoThisTile.length; i++) {
    for (let k = 0; k < blackKingCannotGoThisTile[i]?.length; k++) {
      blackKingCannotGoThisTileArray.push(blackKingCannotGoThisTile[i][k]);
    }
  }
  blackKingCannotGoThisTileArray = blackKingCannotGoThisTileArray.filter((item) => item.length == 2);

  //-----------------------------------------------------------------

  let removeDangerOnBlackKing = [
    expectedAttackBlackQueens,
    expectedAttackBlackBishops,
    expectedAttackBlackRooks,
    [expectedAttackForBlackKnight],
  ];

  let removeDangerOnBlackKingArray = [];
  for (let i = 0; i < removeDangerOnBlackKing.length; i++) {
    for (let k = 0; k < removeDangerOnBlackKing[i].length; k++) {
      for (let j = 0; j < removeDangerOnBlackKing[i][k].length; j++) {
        for (let f = 0; f < removeDangerOnBlackKing[i][k][j].length; f++) {
          removeDangerOnBlackKingArray.push(removeDangerOnBlackKing[i][k][j][f]);
        }
      }
    }
  }
  removeDangerOnBlackKingArray = removeDangerOnBlackKingArray.filter((item) => item.length == 2);

  let dangerArrayByWhitePieces = [];
  for (let i = 0; i < intervalThatMustBeShutDown?.length; i++) {
    dangerArrayByWhitePieces.push(intervalThatMustBeShutDown[i]);
  }
  dangerArrayByWhitePieces.push(pieceIDThatMustGetKill);

  removeDangerOnBlackKingArray = pieceIDThatMustGetKill
    ? removeDangerOnBlackKingArray.filter((item) => dangerArrayByWhitePieces.includes(item))
    : null;
  //___________________________________________

  let expectedMoveBlackPawnsArray = intervalThatMustBeShutDown
    ? expectedMoveBlackPawns?.filter((item) => intervalThatMustBeShutDown.includes(item))
    : null;
  let expectedAttackBlackPawnsID = [];

  for (let i = 0; i < expectedAttackForBlackPawns.length; i++) {
    expectedAttackBlackPawnsID.push(expectedAttackForBlackPawns[i][0], expectedAttackForBlackPawns[i][1]);
  }

  let expectedAttackBlackPawnsArray = pieceIDThatMustGetKill
    ? expectedAttackBlackPawnsID?.find((item) => item == pieceIDThatMustGetKill)
    : null;
  //________________________________________________________________

  let defenseMovementForBlackKing =
    removeDangerOnBlackKingArray && expectedMoveBlackPawnsArray
      ? [...removeDangerOnBlackKingArray, ...expectedMoveBlackPawnsArray, expectedAttackBlackPawnsArray]
      : null;
  defenseMovementForBlackKing = defenseMovementForBlackKing?.filter((item) => item?.length == 2);

  //_______________________________________________________

  let run_off_move_for_blackKing;

  run_off_move_for_blackKing = expectedMoveBlackKing?.filter((item) => !blackKingCannotGoThisTileArray.includes(item));

  let parentNodeIDArray_blackPieces = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    if (boardRef.current.children[i].children[0].children[0]?.name?.slice(0, 5) === "black") {
      parentNodeIDArray_blackPieces.push(boardRef.current.children[i].children[0].children[0].parentNode.id);
    }
  }

  run_off_move_for_blackKing = run_off_move_for_blackKing?.filter(
    (item) => !parentNodeIDArray_blackPieces.includes(item)
  );
  run_off_move_for_blackKing = run_off_move_for_blackKing?.filter((item) => item.length == 2);

  //checkmate
  //checkmate

  let blackSideLoose = false;
  if (pieceIDThatMustGetKill && run_off_move_for_blackKing.length == 0 && defenseMovementForBlackKing.length == 0) {
    blackSideLoose = true;
    game_end_audio();
  }

  return {
    blackKingDanger_pieceIDThatMustGetKill: pieceIDThatMustGetKill,
    blackKingDanger_intervalThatMustBeShutDown: intervalThatMustBeShutDown,
    blackKingCannotGoThisTileArray,
    run_off_move_for_blackKing,
    blackSideLoose,
  };
};
