export const moveForPawn = (pieces, boardRef) => {
  let parentNodeIDArray = [];
  for (let i = 0; i < boardRef?.current?.children?.length; i++) {
    parentNodeIDArray.push(boardRef?.current?.children[i]?.children[0]?.children[0]?.parentNode?.id);
  }

  let whitePawnMoveArray = [];
  if (pieces?.name?.slice(0, 9) == "whitePawn") {
    let id0 = +pieces?.parentNode?.id[0];
    let id1 = pieces?.parentNode?.id[1];
    if (id0 == "2" && !parentNodeIDArray.includes(id0 + 1 + id1)) {
      whitePawnMoveArray.push(id0 + 1 + id1, id0 + 2 + id1);
    } else {
      whitePawnMoveArray.push(id0 + 1 + id1);
    }
  }

  let blackPawnMoveArray = [];

  if (pieces?.name.slice(0, 9) === "blackPawn") {
    let id0 = +pieces?.parentNode?.id[0];
    let id1 = pieces?.parentNode?.id[1];
    if (id0 == "7" && !parentNodeIDArray.includes(id0 - 1 + id1)) {
      blackPawnMoveArray.push(id0 - 1 + id1, id0 - 2 + id1);
    } else {
      blackPawnMoveArray.push(id0 - 1 + id1);
    }
  }

  return { whitePawnMoveArray, blackPawnMoveArray };
};
