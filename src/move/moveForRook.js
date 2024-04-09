export const moveForRook = (pieces, boardRef) => {
  const availableMoveForRookVertical = [1, 2, 3, 4, 5, 6, 7, 8];
  const availableMoveForRookHorizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
  if (pieces?.name.slice(5, 9) === "Rook") {
    let id0 = +pieces?.parentNode?.id[0];
    let id1 = pieces?.parentNode?.id[1];

    let rookMoveArrayVerticalUp = [];
    let rookMoveArrayVerticalDown = [];
    let rookMoveArrayHorizontalRight = [];
    let rookMoveArrayHorizontalLeft = [];

    const indefOfFirst = availableMoveForRookVertical.indexOf(id0);
    const indefOFSecond = availableMoveForRookHorizontal.indexOf(id1);

    for (let i = indefOfFirst + 1; i < availableMoveForRookVertical.length; i++) {
      rookMoveArrayVerticalUp.push(availableMoveForRookVertical[i] + id1);
    }

    for (let i = indefOfFirst - 1; i >= 0; i--) {
      rookMoveArrayVerticalDown.push(availableMoveForRookVertical[i] + id1);
    }

    for (let i = indefOFSecond + 1; i < availableMoveForRookHorizontal.length; i++) {
      rookMoveArrayHorizontalRight.push(id0 + availableMoveForRookHorizontal[i]);
    }

    for (let i = indefOFSecond - 1; i >= 0; i--) {
      rookMoveArrayHorizontalLeft.push(id0 + availableMoveForRookHorizontal[i]);
    }

    let parentNodeIDArray = [];
    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
    }
    //Vertical Up
    const firstElementThatInFrontOfTheRook1 = rookMoveArrayVerticalUp.find((item) => parentNodeIDArray.includes(item));
    const indexOfCutting = rookMoveArrayVerticalUp.indexOf(firstElementThatInFrontOfTheRook1);
    const newRookMoveArrayVerticalUp = rookMoveArrayVerticalUp.slice(
      0,
      indexOfCutting === -1 ? rookMoveArrayVerticalUp.length : indexOfCutting
    );

    //Vertical Down

    const firstElementThatInFrontOfTheRook2 = rookMoveArrayVerticalDown.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting2 = rookMoveArrayVerticalDown.indexOf(firstElementThatInFrontOfTheRook2);

    const newRookMoveArrayVerticalDown = rookMoveArrayVerticalDown.slice(
      0,
      indexOfCutting2 === -1 ? rookMoveArrayVerticalDown.length : indexOfCutting2
    );
    //horixaontal right

    const firstElementThatInFrontOfTheRook3 = rookMoveArrayHorizontalRight.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting3 = rookMoveArrayHorizontalRight.indexOf(firstElementThatInFrontOfTheRook3);
    const newRookMoveArrayHorizontalRight = rookMoveArrayHorizontalRight.slice(
      0,
      indexOfCutting3 === -1 ? rookMoveArrayHorizontalRight.length : indexOfCutting3
    );
    //horixaontal left

    const firstElementThatInFrontOfTheRook4 = rookMoveArrayHorizontalLeft.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting4 = rookMoveArrayHorizontalLeft.indexOf(firstElementThatInFrontOfTheRook4);
    const newRookMoveArrayHorizontalLeft = rookMoveArrayHorizontalLeft.slice(
      0,
      indexOfCutting4 === -1 ? rookMoveArrayHorizontalLeft.length : indexOfCutting4
    );
    let setMovingRooksArray = [
      ...newRookMoveArrayVerticalUp,
      ...newRookMoveArrayVerticalDown,
      ...newRookMoveArrayHorizontalRight,
      ...newRookMoveArrayHorizontalLeft,
    ];
    return {
      setMovingRooksArray,
      rookMoveArrayVerticalUp,
      rookMoveArrayVerticalDown,
      rookMoveArrayHorizontalRight,
      rookMoveArrayHorizontalLeft,
    };
  }
};
