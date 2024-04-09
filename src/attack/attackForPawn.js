export const attackForPawn = (pieces) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let attackingWhitePawns = [];
  if (pieces?.name.slice(0, 9) === "whitePawn") {
    let id0 = +pieces?.parentNode?.id[0];
    let id1 = pieces?.parentNode?.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

    //2c -3b 3d
    attackingWhitePawns = [
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 1],
    ];
  }
  let attackingBlackPawns = [];
  if (pieces?.name.slice(0, 9) === "blackPawn") {
    let id0 = +pieces?.parentNode?.id[0];
    let id1 = pieces?.parentNode?.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

    //7f 6g 6e
    attackingBlackPawns = [
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 1],
    ];
  }
  return { attackingWhitePawns, attackingBlackPawns };
};
