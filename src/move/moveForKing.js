export const moveForKing = (pieces, blackKingCannotGoThisTileArray, whiteKingCannotGoThisTileArray) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let blackKingMoveArray = [];
  let whiteKingMoveArray = [];
  if (pieces?.name.slice(0, 9) === "blackKing") {
    let id0 = +pieces?.parentNode.id[0];
    let id1 = pieces?.parentNode.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

    // 4c -5b 5c 5d -4b 4d- 3b 3c 3d

    blackKingMoveArray = [
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 1],
    ];

    blackKingMoveArray = blackKingMoveArray.filter((item) => item.length == 2);

    blackKingMoveArray = blackKingMoveArray.filter((item) => !blackKingCannotGoThisTileArray.includes(item));
  }
  if (pieces?.name.slice(0, 9) === "whiteKing") {
    let id0 = +pieces?.parentNode.id[0];
    let id1 = pieces?.parentNode.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

    // 4c -5b 5c 5d -4b 4d- 3b 3c 3d

    whiteKingMoveArray = [
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 1],
    ];

    whiteKingMoveArray = whiteKingMoveArray.filter((item) => item.length == 2);
    whiteKingMoveArray = whiteKingMoveArray.filter((item) => !whiteKingCannotGoThisTileArray.includes(item));
  }
  return { blackKingMoveArray, whiteKingMoveArray };
};
