export const expectedMoveForQueen = (allElementIDs) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let whiteQueen_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 10) === "whiteQueen") {
      whiteQueen_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  let blackQueen_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 10) === "blackQueen") {
      blackQueen_ids.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  const expectedMoveQueenFunction = (queenIDs) => {
    let expectedMoveQueensMulitpleArray = [];
    for (let k = 0; k < queenIDs.length; k++) {
      let id0 = +queenIDs[k][1][0];
      let id1 = queenIDs[k][1][1];

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

      let firstMoveForQueen = [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2],
        a[3] + b[3],
        a[4] + b[4],
        a[5] + b[5],
        a[6] + b[6],
      ];

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

      let thirdMoveForQueen = [
        e[0] + f[0],
        e[1] + f[1],
        e[2] + f[2],
        e[3] + f[3],
        e[4] + f[4],
        e[5] + f[5],
        e[6] + f[6],
      ];
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

      expectedMoveQueensMulitpleArray.push({
        firstMoveForQueen,
        secondMoveForQueen,
        thirdMoveForQueen,
        fourthMoveForQueen,
        fifthMoveForQueen: queenMoveArrayVerticalUp,
        sixthMoveForQueen: queenMoveArrayVerticalDown,
        seventhMoveForQueen: queenMoveArrayHorizontalRight,
        eighthMoveForQueen: queenMoveArrayHorizontalLeft,
        queenID: id0 + id1,
      });
    }
    return expectedMoveQueensMulitpleArray;
  };

  let expectedMoveWhiteQueens = expectedMoveQueenFunction(whiteQueen_ids);
  let expectedMoveBlackQueens = expectedMoveQueenFunction(blackQueen_ids);

  return { expectedMoveWhiteQueens, expectedMoveBlackQueens };
};
