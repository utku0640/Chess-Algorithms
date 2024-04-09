export const attackForRook = (
  pieces,
  boardRef,
  rookMoveArrayVerticalUp,
  rookMoveArrayVerticalDown,
  rookMoveArrayHorizontalRight,
  rookMoveArrayHorizontalLeft
) => {
  let parentNodeIDArray = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
  }
  let firstElementThatWillBeDeath1;
  let firstElementThatWillBeDeath2;
  let firstElementThatWillBeDeath3;
  let firstElementThatWillBeDeath4;
  if (pieces?.name?.slice(5, 9) === "Rook") {
    firstElementThatWillBeDeath1 = rookMoveArrayVerticalUp.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath2 = rookMoveArrayVerticalDown.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath3 = rookMoveArrayHorizontalRight.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath4 = rookMoveArrayHorizontalLeft.find((item) => parentNodeIDArray.includes(item));

    let setAttackingRook = [];
    setAttackingRook.push(
      firstElementThatWillBeDeath1,
      firstElementThatWillBeDeath2,
      firstElementThatWillBeDeath3,
      firstElementThatWillBeDeath4
    );

    return setAttackingRook;
  }
};
