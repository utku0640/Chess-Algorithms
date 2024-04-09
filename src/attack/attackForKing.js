export const attackForKing = (pieces, blackKingMoveArray, whiteKingMoveArray) => {
  if (pieces?.name?.slice(5, 9) === "King") {
    let attackingBlackKing = blackKingMoveArray;
    let attackingWhiteKing = whiteKingMoveArray;
    return { attackingBlackKing, attackingWhiteKing };
  }
};
