export const moveForQueen = (pieces, boardRef) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  if (pieces?.name.slice(5, 10) === "Queen") {
    let id0 = +pieces?.parentNode.id[0];
    let id1 = pieces?.parentNode.id[1];
    const indexOfFirst = verticalArray.indexOf(id0);
    const indexOfSecond = horizontalArray.indexOf(id1);

    //cross part
    //cross part
    //cross part

    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];

    for (let i = indexOfFirst + 1; i < verticalArray.length; i++) {
      a.push(verticalArray[i]);
    }
    for (let i = indexOfSecond + 1; i < horizontalArray.length; i++) {
      b.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst - 1; i >= 0; i--) {
      c.push(verticalArray[i]);
    }
    for (let i = indexOfSecond + 1; i < horizontalArray.length; i++) {
      d.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst - 1; i >= 0; i--) {
      e.push(verticalArray[i]);
    }
    for (let i = indexOfSecond - 1; i >= 0; i--) {
      f.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst + 1; i < verticalArray.length; i++) {
      g.push(verticalArray[i]);
    }
    for (let i = indexOfSecond - 1; i >= 0; i--) {
      h.push(horizontalArray[i]);
    }

    let firstMoveForQueen = [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3], a[4] + b[4], a[5] + b[5], a[6] + b[6]];

    firstMoveForQueen = firstMoveForQueen.filter((item) => item.length === 2);

    let secondMoveForQueen = [
      c[0] + d[0],
      c[1] + d[1],
      c[2] + d[2],
      c[3] + d[3],
      c[4] + d[4],
      c[5] + d[5],
      c[6] + d[6],
    ];

    secondMoveForQueen = secondMoveForQueen.filter((item) => item.length == 2);

    let thirdMoveForQueen = [e[0] + f[0], e[1] + f[1], e[2] + f[2], e[3] + f[3], e[4] + f[4], e[5] + f[5], e[6] + f[6]];
    thirdMoveForQueen = thirdMoveForQueen.filter((item) => item.length == 2);

    let fourthMoveForQueen = [
      g[0] + h[0],
      g[1] + h[1],
      g[2] + h[2],
      g[3] + h[3],
      g[4] + h[4],
      g[5] + h[5],
      g[6] + h[6],
    ];
    fourthMoveForQueen = fourthMoveForQueen.filter((item) => item.length == 2);
    //----------------------------------------------------------------------------

    let parentNodeIDArray = [];
    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
    }
    //----------------------------------------------------------------------------

    const firstElementThatInFrontOfBishop = firstMoveForQueen.find((item) => parentNodeIDArray.includes(item));
    let indefOfCutting = firstMoveForQueen.indexOf(firstElementThatInFrontOfBishop);
    let newFirstMoveForQueen = firstMoveForQueen.slice(
      0,
      indefOfCutting == -1 ? firstMoveForQueen.length : indefOfCutting
    );

    const firstElementThatInFrontOfBishop2 = secondMoveForQueen.find((item) => parentNodeIDArray.includes(item));
    let indefOfCutting2 = secondMoveForQueen.indexOf(firstElementThatInFrontOfBishop2);

    let newSecondMoveForQueen = secondMoveForQueen.slice(
      0,
      indefOfCutting2 === -1 ? secondMoveForQueen.length : indefOfCutting2
    );
    const firstElementThatInFrontOfBishop3 = thirdMoveForQueen.find((item) => parentNodeIDArray.includes(item));

    let indefOfCutting3 = thirdMoveForQueen.indexOf(firstElementThatInFrontOfBishop3);

    let newThirdMoveForQueen = thirdMoveForQueen.slice(
      0,
      indefOfCutting3 === -1 ? thirdMoveForQueen.length : indefOfCutting3
    );

    const firstElementThatInFrontOfBishop4 = fourthMoveForQueen.find((item) => parentNodeIDArray.includes(item));

    let indefOfCutting4 = fourthMoveForQueen.indexOf(firstElementThatInFrontOfBishop4);

    let newFourthMoveForQueen = fourthMoveForQueen.slice(
      0,
      indefOfCutting4 === -1 ? fourthMoveForQueen.length : indefOfCutting4
    );

    let setMovingQueenCrossMove = [
      ...newFirstMoveForQueen,
      ...newSecondMoveForQueen,
      ...newThirdMoveForQueen,
      ...newFourthMoveForQueen,
    ];

    //straight part
    //straight part

    let queenMoveArrayVerticalUp = [];
    let queenMoveArrayVerticalDown = [];
    let queenMoveArrayHorizontalRight = [];
    let queenMoveArrayHorizontalLeft = [];

    const indefOfFirst = verticalArray.indexOf(id0);
    const indefOFSecond = horizontalArray.indexOf(id1);

    for (let i = indefOfFirst + 1; i < verticalArray.length; i++) {
      queenMoveArrayVerticalUp.push(verticalArray[i] + id1);
    }

    for (let i = indefOfFirst - 1; i >= 0; i--) {
      queenMoveArrayVerticalDown.push(verticalArray[i] + id1);
    }

    for (let i = indefOFSecond + 1; i < horizontalArray.length; i++) {
      queenMoveArrayHorizontalRight.push(id0 + horizontalArray[i]);
    }

    for (let i = indefOFSecond - 1; i >= 0; i--) {
      queenMoveArrayHorizontalLeft.push(id0 + horizontalArray[i]);
    }

    //Vertical Up
    const firstElementThatInFrontOfTheQueen1 = queenMoveArrayVerticalUp.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting = queenMoveArrayVerticalUp.indexOf(firstElementThatInFrontOfTheQueen1);
    const newQueenMoveArrayVerticalUp = queenMoveArrayVerticalUp.slice(
      0,
      indexOfCutting === -1 ? queenMoveArrayVerticalUp.length : indexOfCutting
    );

    //Vertical Down

    const firstElementThatInFrontOfTheQueen2 = queenMoveArrayVerticalDown.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting2 = queenMoveArrayVerticalDown.indexOf(firstElementThatInFrontOfTheQueen2);

    const newQueenMoveArrayVerticalDown = queenMoveArrayVerticalDown.slice(
      0,
      indexOfCutting2 === -1 ? queenMoveArrayVerticalDown.length : indexOfCutting2
    );
    //horizontal right

    const firstElementThatInFrontOfTheQueen3 = queenMoveArrayHorizontalRight.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting3 = queenMoveArrayHorizontalRight.indexOf(firstElementThatInFrontOfTheQueen3);
    const newQueenMoveArrayHorizontalRight = queenMoveArrayHorizontalRight.slice(
      0,
      indexOfCutting3 === -1 ? queenMoveArrayHorizontalRight.length : indexOfCutting3
    );
    //horizontal left

    const firstElementThatInFrontOfTheQueen4 = queenMoveArrayHorizontalLeft.find((item) =>
      parentNodeIDArray.includes(item)
    );
    const indexOfCutting4 = queenMoveArrayHorizontalLeft.indexOf(firstElementThatInFrontOfTheQueen4);
    const newQueenMoveArrayHorizontalLeft = queenMoveArrayHorizontalLeft.slice(
      0,
      indexOfCutting4 === -1 ? queenMoveArrayHorizontalLeft.length : indexOfCutting4
    );
    let setMovingQueenStraightMove = [
      ...newQueenMoveArrayVerticalDown,
      ...newQueenMoveArrayVerticalUp,
      ...newQueenMoveArrayHorizontalLeft,
      ...newQueenMoveArrayHorizontalRight,
    ];

    const moveEveryWhereForQueen = [...setMovingQueenCrossMove, ...setMovingQueenStraightMove];

    const everySingleMoves = {
      firstMoveForQueen,
      secondMoveForQueen,
      thirdMoveForQueen,
      fourthMoveForQueen,
      fifthMoveForQueen: queenMoveArrayVerticalUp,
      sixthMoveForQueen: queenMoveArrayVerticalDown,
      seventhMoveForQueen: queenMoveArrayHorizontalRight,
      eighthMoveForQueen: queenMoveArrayHorizontalLeft,
    };

    return { moveEveryWhereForQueen, everySingleMoves };
  }
};
