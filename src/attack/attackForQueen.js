export const attackForQueen = (pieces, boardRef, everySingleMoves) => {
  if (pieces?.name?.slice(5, 10) === "Queen") {
    const firstMoveForQueen = everySingleMoves?.firstMoveForQueen;
    const secondMoveForQueen = everySingleMoves?.secondMoveForQueen;
    const thirdMoveForQueen = everySingleMoves?.thirdMoveForQueen;
    const fourthMoveForQueen = everySingleMoves?.fourthMoveForQueen;
    const fifthMoveForQueen = everySingleMoves?.fifthMoveForQueen;
    const sixthMoveForQueen = everySingleMoves?.sixthMoveForQueen;
    const seventhMoveForQueen = everySingleMoves?.seventhMoveForQueen;
    const eighthMoveForQueen = everySingleMoves?.eighthMoveForQueen;
    let parentNodeIDArray = [];

    let setAttackingQueen = [];
    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
    }

    let firstElementThatWillBeDeath1 = firstMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath2 = secondMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath3 = thirdMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath4 = fourthMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath5 = fifthMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath6 = sixthMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath7 = seventhMoveForQueen?.find((item) => parentNodeIDArray.includes(item));
    let firstElementThatWillBeDeath8 = eighthMoveForQueen?.find((item) => parentNodeIDArray.includes(item));

    setAttackingQueen = [
      firstElementThatWillBeDeath1,
      firstElementThatWillBeDeath2,
      firstElementThatWillBeDeath3,
      firstElementThatWillBeDeath4,
      firstElementThatWillBeDeath5,
      firstElementThatWillBeDeath6,
      firstElementThatWillBeDeath7,
      firstElementThatWillBeDeath8,
    ];
    return setAttackingQueen;
  }
};
