export const attackForBishop = (
  pieces,
  boardRef,
  firstMoveForBishop,
  secondMoveForBishop,
  thirdMoveForBishop,
  fourthMoveForBishop
) => {
  let parentNodeIDArray = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
  }
  let firstElementThatWillBeDeath1;
  let firstElementThatWillBeDeath2;
  let firstElementThatWillBeDeath3;
  let firstElementThatWillBeDeath4;

  if (pieces?.name?.slice(5, 11) === "Bishop") {
    firstElementThatWillBeDeath1 = firstMoveForBishop.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath2 = secondMoveForBishop.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath3 = thirdMoveForBishop.find((item) => parentNodeIDArray.includes(item));
    firstElementThatWillBeDeath4 = fourthMoveForBishop.find((item) => parentNodeIDArray.includes(item));

    const setAttackingBihop = [];

    setAttackingBihop.push(
      firstElementThatWillBeDeath1,
      firstElementThatWillBeDeath2,
      firstElementThatWillBeDeath3,
      firstElementThatWillBeDeath4
    );
    return setAttackingBihop;
  }
};
