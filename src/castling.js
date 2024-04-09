export const castling = (
  whiteRook1DidMove,
  whiteRook2DidMove,
  whiteKingDidMove,
  blackRook1DidMove,
  blackRook2DidMove,
  blackKingDidMove,
  boardRef,
  whiteKingCannotGoThisTileArray,
  blackKingCannotGoThisTileArray
) => {
  let is_there_any_piece_at_1f = false;
  let is_there_any_piece_at_1g = false;
  let is_there_any_piece_at_1b = false;
  let is_there_any_piece_at_1c = false;
  let is_there_any_piece_at_1d = false;

  let is_there_any_piece_at_8f = false;
  let is_there_any_piece_at_8g = false;
  let is_there_any_piece_at_8b = false;
  let is_there_any_piece_at_8c = false;
  let is_there_any_piece_at_8d = false;
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    let singlePiece = boardRef?.current?.children[i]?.children[0]?.children[0];

    if (singlePiece?.parentNode?.id === "1f") {
      is_there_any_piece_at_1f = true;
    }
    if (singlePiece?.parentNode?.id === "1g") {
      is_there_any_piece_at_1g = true;
    }
    if (singlePiece?.parentNode?.id === "1b") {
      is_there_any_piece_at_1b = true;
    }
    if (singlePiece?.parentNode?.id === "1c") {
      is_there_any_piece_at_1c = true;
    }
    if (singlePiece?.parentNode?.id === "1d") {
      is_there_any_piece_at_1d = true;
    }

    if (singlePiece?.parentNode?.id === "8f") {
      is_there_any_piece_at_8f = true;
    }
    if (singlePiece?.parentNode?.id === "8g") {
      is_there_any_piece_at_8g = true;
    }
    if (singlePiece?.parentNode?.id === "8b") {
      is_there_any_piece_at_8b = true;
    }
    if (singlePiece?.parentNode?.id === "8c") {
      is_there_any_piece_at_8c = true;
    }
    if (singlePiece?.parentNode?.id === "8d") {
      is_there_any_piece_at_8d = true;
    }
  }

  let whiteShortCastling = {};

  if (
    !whiteKingDidMove &&
    !whiteRook1DidMove &&
    !is_there_any_piece_at_1f &&
    !is_there_any_piece_at_1g &&
    !whiteKingCannotGoThisTileArray.some((item) => ["1e", "1f", "1g"].includes(item))
  ) {
    whiteShortCastling.okayToWhiteShortCastling = true;
    whiteShortCastling.moveWhiteKingShortCastling = "1g";
  }

  let whiteLongCasling = {};

  if (
    !whiteKingDidMove &&
    !whiteRook2DidMove &&
    !is_there_any_piece_at_1b &&
    !is_there_any_piece_at_1c &&
    !is_there_any_piece_at_1d &&
    !whiteKingCannotGoThisTileArray.some((item) => ["1b", "1c", "1d", "1e"].includes(item))
  ) {
    whiteLongCasling.okayToWhiteLongCastling = true;
    whiteLongCasling.moveWhiteLongCastling = "1c";
  }

  let blackShortCastling = {};

  if (
    !blackKingDidMove &&
    !blackRook1DidMove &&
    !is_there_any_piece_at_8f &&
    !is_there_any_piece_at_8g &&
    !blackKingCannotGoThisTileArray.some((item) => ["8e", "8f", "8g"].includes(item))
  ) {
    blackShortCastling.okayToBlackShortCastling = true;
    blackShortCastling.moveBlackKingShortCastling = "8g";
  }

  let blackLongCasling = {};

  if (
    !blackKingDidMove &&
    !blackRook2DidMove &&
    !is_there_any_piece_at_8b &&
    !is_there_any_piece_at_8c &&
    !is_there_any_piece_at_8d &&
    !blackKingCannotGoThisTileArray.some((item) => ["8b", "8c", "8d", "8e"].includes(item))
  ) {
    blackLongCasling.okayToBlackLongCastling = true;
    blackLongCasling.moveBlackLongCastling = "8c";
  }

  return { whiteShortCastling, whiteLongCasling, blackShortCastling, blackLongCasling };
};
