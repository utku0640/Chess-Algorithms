export const moveForBishop = (pieces, boardRef) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

  if (pieces?.name.slice(5, 11) === "Bishop") {
    let id0 = +pieces?.parentNode.id[0];
    let id1 = pieces?.parentNode.id[1];

    let indexOfFirst = verticalArray.indexOf(id0);
    let indexOfSecond = horizontalArray.indexOf(id1);

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

    let firstMoveForBishop = [
      a[0] + b[0],
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5],
      a[6] + b[6],
    ];

    firstMoveForBishop = firstMoveForBishop.filter((item) => item.length === 2);

    let secondMoveForBishop = [
      c[0] + d[0],
      c[1] + d[1],
      c[2] + d[2],
      c[3] + d[3],
      c[4] + d[4],
      c[5] + d[5],
      c[6] + d[6],
    ];

    secondMoveForBishop = secondMoveForBishop.filter((item) => item.length == 2);

    let thirdMoveForBishop = [
      e[0] + f[0],
      e[1] + f[1],
      e[2] + f[2],
      e[3] + f[3],
      e[4] + f[4],
      e[5] + f[5],
      e[6] + f[6],
    ];
    thirdMoveForBishop = thirdMoveForBishop.filter((item) => item.length == 2);

    let fourthMoveForBishop = [
      g[0] + h[0],
      g[1] + h[1],
      g[2] + h[2],
      g[3] + h[3],
      g[4] + h[4],
      g[5] + h[5],
      g[6] + h[6],
    ];
    fourthMoveForBishop = fourthMoveForBishop.filter((item) => item.length == 2);
    //----------------------------------------------------------------------------

    let parentNodeIDArray = [];
    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
    }
    //----------------------------------------------------------------------------

    const firstElementThatInFrontOfBishop = firstMoveForBishop.find((item) => parentNodeIDArray.includes(item));
    let indefOfCutting = firstMoveForBishop.indexOf(firstElementThatInFrontOfBishop);
    let newFirstMoveForBishop = firstMoveForBishop.slice(
      0,
      indefOfCutting == -1 ? firstMoveForBishop.length : indefOfCutting
    );

    const firstElementThatInFrontOfBishop2 = secondMoveForBishop.find((item) => parentNodeIDArray.includes(item));
    let indefOfCutting2 = secondMoveForBishop.indexOf(firstElementThatInFrontOfBishop2);

    let newSecondMoveForBishop = secondMoveForBishop.slice(
      0,
      indefOfCutting2 === -1 ? secondMoveForBishop.length : indefOfCutting2
    );
    const firstElementThatInFrontOfBishop3 = thirdMoveForBishop.find((item) => parentNodeIDArray.includes(item));

    let indefOfCutting3 = thirdMoveForBishop.indexOf(firstElementThatInFrontOfBishop3);

    let newThirdMoveForBishop = thirdMoveForBishop.slice(
      0,
      indefOfCutting3 === -1 ? thirdMoveForBishop.length : indefOfCutting3
    );

    const firstElementThatInFrontOfBishop4 = fourthMoveForBishop.find((item) => parentNodeIDArray.includes(item));

    let indefOfCutting4 = fourthMoveForBishop.indexOf(firstElementThatInFrontOfBishop4);

    let newFourthMoveForBishop = fourthMoveForBishop.slice(
      0,
      indefOfCutting4 === -1 ? fourthMoveForBishop.length : indefOfCutting4
    );

    const finalMoveForBishop = [
      ...newFirstMoveForBishop,
      ...newSecondMoveForBishop,
      ...newThirdMoveForBishop,
      ...newFourthMoveForBishop,
    ];
    return { finalMoveForBishop, firstMoveForBishop, secondMoveForBishop, thirdMoveForBishop, fourthMoveForBishop };
  }
};
