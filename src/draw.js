export const draw = (
  run_off_move_for_blackKing,
  run_off_move_for_whiteKing,
  whiteKingDanger_pieceIDThatMustGetKill,
  blackKingDanger_pieceIDThatMustGetKill,
  allElementIDs,
  moveIndex,
  expectedAttackPawn,
  expectedAttackRook,
  expectedAttackBishop,
  expectedAttackKnight,
  expectedAttackQueen,
  expectedMoveWhitePawns,
  expectedMoveBlackPawns,
  game_end_audio
) => {
  let { expectedAttackForWhitePawns, expectedAttackForBlackPawns } = expectedAttackPawn;
  let { expectedAttackWhiteRooks, expectedAttackBlackRooks } = expectedAttackRook;
  let { expectedAttackWhiteBishops, expectedAttackBlackBishops } = expectedAttackBishop;
  let { expectedAttackForWhiteKnight, expectedAttackForBlackKnight } = expectedAttackKnight;
  let { expectedAttackWhiteQueens, expectedAttackBlackQueens } = expectedAttackQueen;

  let whiteElementsIDArray = [];

  for (let i = 0; i < allElementIDs.length; i++) {
    if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
      whiteElementsIDArray.push(allElementIDs[i].split(" ")[5]);
    }
  }

  let blackElementsIDArray = [];

  for (let i = 0; i < allElementIDs.length; i++) {
    if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
      blackElementsIDArray.push(allElementIDs[i].split(" ")[5]);
    }
  }

  let allElementsIDArray = [];

  for (let i = 0; i < allElementIDs.length; i++) {
    allElementsIDArray.push(allElementIDs[i].split(" ")[5]);
  }

  let noMoveForDraw_white_pieces = [
    expectedAttackWhiteRooks,
    expectedAttackWhiteBishops,
    expectedAttackWhiteQueens,
    [expectedAttackForWhiteKnight],
  ];
  let noMoveForDraw_white_pieces_array = [];
  for (let i = 0; i < noMoveForDraw_white_pieces.length; i++) {
    for (let k = 0; k < noMoveForDraw_white_pieces[i].length; k++) {
      for (let j = 0; j < noMoveForDraw_white_pieces[i][k].length; j++) {
        for (let f = 0; f < noMoveForDraw_white_pieces[i][k][j].length; f++) {
          noMoveForDraw_white_pieces_array.push(noMoveForDraw_white_pieces[i][k][j][f]);
        }
      }
    }
  }
  noMoveForDraw_white_pieces_array = noMoveForDraw_white_pieces_array.filter((item) => item.length == 2);

  noMoveForDraw_white_pieces_array = noMoveForDraw_white_pieces_array.filter(
    (item) => !whiteElementsIDArray.includes(item)
  );
  //________________________________________________________________________________
  let expectedAttackForWhitePawnsIDArray = [];
  for (let i = 0; i < expectedAttackForWhitePawns.length; i++) {
    expectedAttackForWhitePawnsIDArray.push(expectedAttackForWhitePawns[i][0], expectedAttackForWhitePawns[i][1]);
  }
  let noMoveForDraw_whitePawns_attack = expectedAttackForWhitePawnsIDArray.filter((item) =>
    blackElementsIDArray.includes(item)
  );

  //________________________________________________________________________________

  let noMoveForDraw_whitePawns_move = expectedMoveWhitePawns.filter((item) => !allElementsIDArray.includes(item));

  let noMoveForDraw_all_white_pieces = [
    ...noMoveForDraw_white_pieces_array,
    ...noMoveForDraw_whitePawns_attack,
    ...noMoveForDraw_whitePawns_move,
  ];
  //________________________________________________________
  //________________________________________________________
  //________________________________________________________

  let noMoveForDraw_black_pieces = [
    expectedAttackBlackRooks,
    expectedAttackBlackBishops,
    expectedAttackBlackQueens,
    [expectedAttackForBlackKnight],
  ];
  let noMoveForDraw_black_pieces_array = [];
  for (let i = 0; i < noMoveForDraw_black_pieces.length; i++) {
    for (let k = 0; k < noMoveForDraw_black_pieces[i].length; k++) {
      for (let j = 0; j < noMoveForDraw_black_pieces[i][k].length; j++) {
        for (let f = 0; f < noMoveForDraw_black_pieces[i][k][j].length; f++) {
          noMoveForDraw_black_pieces_array.push(noMoveForDraw_black_pieces[i][k][j][f]);
        }
      }
    }
  }
  noMoveForDraw_black_pieces_array = noMoveForDraw_black_pieces_array.filter((item) => item.length == 2);

  noMoveForDraw_black_pieces_array = noMoveForDraw_black_pieces_array.filter(
    (item) => !blackElementsIDArray.includes(item)
  );
  //________________________________________________________________________________
  let expectedAttackForBlackPawnsIDArray = [];
  for (let i = 0; i < expectedAttackForBlackPawns.length; i++) {
    expectedAttackForBlackPawnsIDArray.push(expectedAttackForBlackPawns[i][0], expectedAttackForBlackPawns[i][1]);
  }
  let noMoveForDraw_blackPawns_attack = expectedAttackForBlackPawnsIDArray.filter((item) =>
    whiteElementsIDArray.includes(item)
  );

  //________________________________________________________________________________

  let noMoveForDraw_blackPawns_move = expectedMoveBlackPawns.filter((item) => !allElementsIDArray.includes(item));

  let noMoveForDraw_all_black_pieces = [
    ...noMoveForDraw_black_pieces_array,
    ...noMoveForDraw_blackPawns_attack,
    ...noMoveForDraw_blackPawns_move,
  ];

  //_______________________________________________________________

  let pieceNameInTheBoard = [];

  let draw_last_piece_blackKnight = false;
  let draw_last_piece_blackBishop = false;

  let draw_last_piece_whiteKnight = false;
  let draw_last_piece_whiteBishop = false;

  let draw_last_pieces_king = false;
  for (let i = 0; i < allElementIDs.length; i++) {
    if (allElementIDs[i].split(" ")[0] !== "whiteKing" && allElementIDs[i].split(" ")[0] !== "blackKing") {
      pieceNameInTheBoard.push(allElementIDs[i].split(" ")[0]);
    }
  }

  //last piece blackKnight
  //last piece blackKnight
  let justBlackKnightInTheBoard = pieceNameInTheBoard.map((item) => item.slice(0, 11) === "blackKnight");

  let numberOfTrue_blackKnight = [];
  let numberOfFlase_blackKnight = [];

  for (let i = 0; i < justBlackKnightInTheBoard.length; i++) {
    if (justBlackKnightInTheBoard[i] === true) {
      numberOfTrue_blackKnight.push(justBlackKnightInTheBoard[i]);
    } else if (justBlackKnightInTheBoard[i] === false) {
      numberOfFlase_blackKnight.push(justBlackKnightInTheBoard[i]);
    }
  }

  if (numberOfTrue_blackKnight.length == 1 && numberOfFlase_blackKnight.length == 0) {
    draw_last_piece_blackKnight = true;
  }
  //__________________________________________________________________________

  //last piece blackBihop
  //last piece blackBihop
  let justBlackBishopInTheBoard = pieceNameInTheBoard.map((item) => item.slice(0, 11) === "blackBishop");

  let numberOfTrue_blackBishop = [];
  let numberOfFlase_blackBishop = [];

  for (let i = 0; i < justBlackBishopInTheBoard.length; i++) {
    if (justBlackBishopInTheBoard[i] === true) {
      numberOfTrue_blackBishop.push(justBlackBishopInTheBoard[i]);
    } else if (justBlackBishopInTheBoard[i] === false) {
      numberOfFlase_blackBishop.push(justBlackBishopInTheBoard[i]);
    }
  }

  if (numberOfTrue_blackBishop.length == 1 && numberOfFlase_blackBishop.length == 0) {
    draw_last_piece_blackBishop = true;
  }
  //__________________________________________________________________________

  //last piece whiteKnight
  //last piece whiteKnight
  let justWhiteKnightInTheBoard = pieceNameInTheBoard.map((item) => item.slice(0, 11) === "whiteKnight");

  let numberOfTrue_whiteKnight = [];
  let numberOfFlase_whiteKnight = [];

  for (let i = 0; i < justWhiteKnightInTheBoard.length; i++) {
    if (justBlackKnightInTheBoard[i] === true) {
      numberOfTrue_whiteKnight.push(justWhiteKnightInTheBoard[i]);
    } else if (justWhiteKnightInTheBoard[i] === false) {
      numberOfFlase_whiteKnight.push(justWhiteKnightInTheBoard[i]);
    }
  }

  if (numberOfTrue_whiteKnight.length == 1 && numberOfFlase_whiteKnight.length == 0) {
    draw_last_piece_whiteKnight = true;
  }
  //__________________________________________________________________________

  //last piece whiteBihop
  //last piece whiteBihop
  let justWhiteBishopInTheBoard = pieceNameInTheBoard.map((item) => item.slice(0, 11) === "whiteBishop");

  let numberOfTrue_whiteBishop = [];
  let numberOfFlase_whiteBishop = [];

  for (let i = 0; i < justWhiteBishopInTheBoard.length; i++) {
    if (justWhiteBishopInTheBoard[i] === true) {
      numberOfTrue_whiteBishop.push(justWhiteBishopInTheBoard[i]);
    } else if (justWhiteBishopInTheBoard[i] === false) {
      numberOfFlase_whiteBishop.push(justWhiteBishopInTheBoard[i]);
    }
  }

  if (numberOfTrue_whiteBishop.length == 1 && numberOfFlase_whiteBishop.length == 0) {
    draw_last_piece_whiteBishop = true;
  }
  //__________________________________________________________________________

  //last 2 pieces are kings

  let justKingsInTheBoard = [];

  for (let i = 0; i < allElementIDs.length; i++) {
    justKingsInTheBoard.push(allElementIDs[i].split(" ")[0]);
  }

  let justKingsOverThere = justKingsInTheBoard.map((item) => item.slice(5, 9) === "King");

  let numberOfTrue_kings = [];
  let numberOfFalse_kings = [];

  for (let i = 0; i < justKingsOverThere.length; i++) {
    if (justKingsOverThere[i] == true) {
      numberOfTrue_kings.push(justKingsOverThere[i]);
    } else if (justKingsOverThere[i] == false) {
      numberOfFalse_kings.push(justKingsOverThere[i]);
    }
  }
  if (numberOfTrue_kings.length == 2 && numberOfFalse_kings.length == 0) {
    draw_last_pieces_king = true;
  }
  //_______________________________________________________________

  let draw_no_one_win = false;
  if (
    (run_off_move_for_whiteKing?.length == 0 &&
      noMoveForDraw_all_white_pieces?.length == 0 &&
      !whiteKingDanger_pieceIDThatMustGetKill &&
      moveIndex % 2 == 0) ||
    draw_last_piece_whiteBishop ||
    draw_last_piece_whiteKnight ||
    draw_last_pieces_king
  ) {
    draw_no_one_win = true;
    game_end_audio();
  }
  if (
    (run_off_move_for_blackKing?.length == 0 &&
      noMoveForDraw_all_black_pieces?.length == 0 &&
      !blackKingDanger_pieceIDThatMustGetKill &&
      moveIndex % 2 == 1) ||
    draw_last_piece_blackBishop ||
    draw_last_piece_blackKnight ||
    draw_last_pieces_king
  ) {
    draw_no_one_win = true;
    game_end_audio();
  }
  return draw_no_one_win;
};
