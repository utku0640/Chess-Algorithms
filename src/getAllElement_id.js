export const getAllElement_id = (boardRef) => {
  let current_IDs = [];

  for (let i = 0; i < 64; i++) {
    if (boardRef?.current?.children[i]?.children[0]?.children[0]) {
      let name_of_piece = boardRef.current.children[i].children[0].children[0].name;

      let ID_of_piece = boardRef.current.children[i].children[0].id;
      current_IDs.push(`${name_of_piece} at the tile of ${ID_of_piece}`);
    }
  }
  return current_IDs;
};
