export const moveForKnight = (pieces) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  if (pieces?.name?.slice(5, 11) === "Knight") {
    let id0 = +pieces?.parentNode.id[0];
    let id1 = pieces?.parentNode.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

    //4d - 6c 6e  5b,5f 3b,3f  2c,2e
    let setMovingKinght = [
      verticalArray[indexOfFirst + 2] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst + 2] + horizontalArray[indexOfSecond + 1],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond - 2],
      verticalArray[indexOfFirst + 1] + horizontalArray[indexOfSecond + 2],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond - 2],
      verticalArray[indexOfFirst - 1] + horizontalArray[indexOfSecond + 2],
      verticalArray[indexOfFirst - 2] + horizontalArray[indexOfSecond - 1],
      verticalArray[indexOfFirst - 2] + horizontalArray[indexOfSecond + 1],
    ];

    setMovingKinght = setMovingKinght.filter((item) => item.length == 2);

    return setMovingKinght;
  }
};
