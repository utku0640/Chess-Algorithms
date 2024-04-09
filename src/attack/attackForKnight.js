export const attackForKnight = (pieces, boardRef, setMovingKnight) => {
  if (pieces?.name.slice(5, 11) === "Knight") {
    let parentNodeIDArray = [];

    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
    }
    let attackingKnight = setMovingKnight.filter((item) => parentNodeIDArray.includes(item));
    return attackingKnight;
  }
};
