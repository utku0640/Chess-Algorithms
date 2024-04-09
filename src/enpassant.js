export const enpassant = (
  whitePawn1_enpassant,
  whitePawn1_enpassant_moveIndex,
  whitePawn2_enpassant,
  whitePawn2_enpassant_moveIndex,
  whitePawn3_enpassant,
  whitePawn3_enpassant_moveIndex,
  whitePawn4_enpassant,
  whitePawn4_enpassant_moveIndex,
  whitePawn5_enpassant,
  whitePawn5_enpassant_moveIndex,
  whitePawn6_enpassant,
  whitePawn6_enpassant_moveIndex,
  whitePawn7_enpassant,
  whitePawn7_enpassant_moveIndex,
  whitePawn8_enpassant,
  whitePawn8_enpassant_moveIndex,

  blackPawn1_enpassant,
  blackPawn1_enpassant_moveIndex,
  blackPawn2_enpassant,
  blackPawn2_enpassant_moveIndex,
  blackPawn3_enpassant,
  blackPawn3_enpassant_moveIndex,
  blackPawn4_enpassant,
  blackPawn4_enpassant_moveIndex,
  blackPawn5_enpassant,
  blackPawn5_enpassant_moveIndex,
  blackPawn6_enpassant,
  blackPawn6_enpassant_moveIndex,
  blackPawn7_enpassant,
  blackPawn7_enpassant_moveIndex,
  blackPawn8_enpassant,
  blackPawn8_enpassant_moveIndex,
  moveIndex,
  allElementIDs
) => {
  let whitePawn1_id_that_enemy_pawn_will_be_there;
  let whitePawn2_id_that_enemy_pawn_will_be_there;
  let whitePawn3_id_that_enemy_pawn_will_be_there;
  let whitePawn4_id_that_enemy_pawn_will_be_there;
  let whitePawn5_id_that_enemy_pawn_will_be_there;
  let whitePawn6_id_that_enemy_pawn_will_be_there;
  let whitePawn7_id_that_enemy_pawn_will_be_there;
  let whitePawn8_id_that_enemy_pawn_will_be_there;

  let blackPawn1_id_that_enemy_pawn_will_be_there;
  let blackPawn2_id_that_enemy_pawn_will_be_there;
  let blackPawn3_id_that_enemy_pawn_will_be_there;
  let blackPawn4_id_that_enemy_pawn_will_be_there;
  let blackPawn5_id_that_enemy_pawn_will_be_there;
  let blackPawn6_id_that_enemy_pawn_will_be_there;
  let blackPawn7_id_that_enemy_pawn_will_be_there;
  let blackPawn8_id_that_enemy_pawn_will_be_there;

  let whitePawns_id = [];

  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "whitePawn") {
      whitePawns_id.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });
  let blackPawns_id = [];

  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0].slice(0, 9) === "blackPawn") {
      blackPawns_id.push([allElementID.split(" ")[0], allElementID.split(" ")[5]]);
    }
  });

  for (let i = 0; i < whitePawns_id.length; i++) {
    if (
      whitePawns_id[i][0] === "whitePawn1" &&
      whitePawn1_enpassant == false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn1_enpassant_moveIndex + 1
    ) {
      whitePawn1_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    } else if (
      whitePawns_id[i][0] === "whitePawn2" &&
      whitePawn2_enpassant === false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn2_enpassant_moveIndex + 1
    ) {
      whitePawn2_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    }
    if (
      whitePawns_id[i][0] === "whitePawn3" &&
      whitePawn3_enpassant == false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn3_enpassant_moveIndex + 1
    ) {
      whitePawn3_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    } else if (
      whitePawns_id[i][0] === "whitePawn4" &&
      whitePawn4_enpassant === false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn4_enpassant_moveIndex + 1
    ) {
      whitePawn4_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    }
    if (
      whitePawns_id[i][0] === "whitePawn5" &&
      whitePawn5_enpassant == false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn5_enpassant_moveIndex + 1
    ) {
      whitePawn5_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    } else if (
      whitePawns_id[i][0] === "whitePawn6" &&
      whitePawn6_enpassant === false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn6_enpassant_moveIndex + 1
    ) {
      whitePawn6_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    }
    if (
      whitePawns_id[i][0] === "whitePawn7" &&
      whitePawn7_enpassant == false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn7_enpassant_moveIndex + 1
    ) {
      whitePawn7_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    } else if (
      whitePawns_id[i][0] === "whitePawn8" &&
      whitePawn8_enpassant === false &&
      whitePawns_id[i][1][0] == 4 &&
      moveIndex === whitePawn8_enpassant_moveIndex + 1
    ) {
      whitePawn8_id_that_enemy_pawn_will_be_there = whitePawns_id[i][1][0] - 1 + whitePawns_id[i][1][1];
    }
  }

  for (let i = 0; i < blackPawns_id.length; i++) {
    if (
      blackPawns_id[i][0] === "blackPawn1" &&
      blackPawn1_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn1_enpassant_moveIndex + 1
    ) {
      blackPawn1_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn2" &&
      blackPawn2_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn2_enpassant_moveIndex + 1
    ) {
      blackPawn2_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn3" &&
      blackPawn3_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn3_enpassant_moveIndex + 1
    ) {
      blackPawn3_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn4" &&
      blackPawn4_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn4_enpassant_moveIndex + 1
    ) {
      blackPawn4_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn5" &&
      blackPawn5_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn5_enpassant_moveIndex + 1
    ) {
      blackPawn5_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn6" &&
      blackPawn6_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn6_enpassant_moveIndex + 1
    ) {
      blackPawn6_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn7" &&
      blackPawn7_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn7_enpassant_moveIndex + 1
    ) {
      blackPawn7_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    } else if (
      blackPawns_id[i][0] === "blackPawn8" &&
      blackPawn8_enpassant == false &&
      blackPawns_id[i][1][0] == 5 &&
      moveIndex == blackPawn8_enpassant_moveIndex + 1
    ) {
      blackPawn8_id_that_enemy_pawn_will_be_there = +blackPawns_id[i][1][0] + 1 + blackPawns_id[i][1][1];
    }
  }
  let whitePawn_enpassant_array = [
    whitePawn1_id_that_enemy_pawn_will_be_there,
    whitePawn2_id_that_enemy_pawn_will_be_there,
    whitePawn3_id_that_enemy_pawn_will_be_there,
    whitePawn4_id_that_enemy_pawn_will_be_there,
    whitePawn5_id_that_enemy_pawn_will_be_there,
    whitePawn6_id_that_enemy_pawn_will_be_there,
    whitePawn7_id_that_enemy_pawn_will_be_there,
    whitePawn8_id_that_enemy_pawn_will_be_there,
  ];
  let blackPawn_enpassant_array = [
    blackPawn1_id_that_enemy_pawn_will_be_there,
    blackPawn2_id_that_enemy_pawn_will_be_there,
    blackPawn3_id_that_enemy_pawn_will_be_there,
    blackPawn4_id_that_enemy_pawn_will_be_there,
    blackPawn5_id_that_enemy_pawn_will_be_there,
    blackPawn6_id_that_enemy_pawn_will_be_there,
    blackPawn7_id_that_enemy_pawn_will_be_there,
    blackPawn8_id_that_enemy_pawn_will_be_there,
  ];
  let blackPawn_can_attack_this_tile = whitePawn_enpassant_array.filter((item) => item?.length === 2);
  let whitePawn_can_attack_this_tile = blackPawn_enpassant_array.filter((item) => item?.length == 2);
  return {
    blackPawn_can_attack_this_tile,
    whitePawn_can_attack_this_tile,
  };
};
