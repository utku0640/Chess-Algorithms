export const acmazAlgorithm = (
  allElementIDs,
  blackPawnMoveArray,
  attackingBlackPawns,
  whitePawnMoveArray,
  attackingWhitePawns
) => {
  const verticalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let whiteKing_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "whiteKing") {
      whiteKing_ids.push(allElementID.split(" ")[0], allElementID.split(" ")[5]);
    }
  });

  let blackKing_ids = [];
  allElementIDs.map((allElementID, index) => {
    if (allElementID.split(" ")[0] === "blackKing") {
      blackKing_ids.push(allElementID.split(" ")[0], allElementID.split(" ")[5]);
    }
  });

  //black Bishop
  let straightDirection_blackBishop = {
    straightDirection_blackBishop_name: [],
    straightDirection_blackBishop_move: [],
    straightDirection_blackBishop_attack: [],
  };
  let crossDirection_blackBishop = {
    crossDirection_blackBishop_name: [],
    crossDirection_blackBishop_move: [],
    crossDirection_blackBishop_attack: [],
  };
  //black Rook
  let straightDirection_blackRook = {
    straightDirection_blackRook_name: [],
    straightDirection_blackRook_move: [],
    straightDirection_blackRook_attack: [],
  };
  let crossDirection_blackRook = {
    crossDirection_blackRook_name: [],
    crossDirection_blackRook_move: [],
    crossDirection_blackRook_attack: [],
  };
  //black Queen
  let straightDirection_blackQueen = {
    straightDirection_blackQueen_name: [],
    straightDirection_blackQueen_move: [],
    straightDirection_blackQueen_attack: [],
  };
  let crossDirection_blackQueen = {
    crossDirection_blackQueen_name: [],
    crossDirection_blackQueen_move: [],
    crossDirection_blackQueen_attack: [],
  };
  //black Pawm
  let straightDirection_blackPawn = {
    straightDirection_blackPawn_name: [],
    straightDirection_blackPawn_move: [],
    straightDirection_blackPawn_attack: [],
  };
  let crossDirection_blackPawn = {
    crossDirection_blackPawn_name: [],
    crossDirection_blackPawn_move: [],
    crossDirection_blackPawn_attack: [],
  };
  //black Kinght
  let straight_and_cross_direction_blackKnight = {
    straight_and_cross_direction_blackKnight_name: [],
    straight_and_cross_direction_blackKnight_move: [],
    straight_and_cross_direction_blackKnight_attack: [],
  };

  //white knight
  let straight_and_cross_direction_whiteKnight = {
    straight_and_cross_direction_whiteKnight_name: [],
    straight_and_cross_direction_whiteKnight_move: [],
    straight_and_cross_direction_whiteKnight_attack: [],
  };

  //white bishop
  let straightDirection_whiteBishop = {
    straightDirection_whiteBishop_name: [],
    straightDirection_whiteBishop_move: [],
    straightDirection_whiteBishop_attack: [],
  };
  let crossDirection_whiteBishop = {
    crossDirection_whiteBishop_name: [],
    crossDirection_whiteBishop_move: [],
    crossDirection_whiteBishop_attack: [],
  };

  //white rook
  let straightDirection_whiteRook = {
    straightDirection_whiteRook_name: [],
    straightDirection_whiteRook_attack: [],
    straightDirection_whiteRook_move: [],
  };
  let crossDirection_whiteRook = {
    crossDirection_whiteRook_name: [],
    crossDirection_whiteRook_attack: [],
    crossDirection_whiteRook_move: [],
  };

  //white queen
  let straightDirection_whiteQueen = {
    straightDirection_whiteQueen_name: [],
    straightDirection_whiteQueen_attack: [],
    straightDirection_whiteQueen_move: [],
  };
  let crossDirection_whiteQueen = {
    crossDirection_whiteQueen_name: [],
    crossDirection_whiteQueen_attack: [],
    crossDirection_whiteQueen_move: [],
  };

  //white pawn
  let crossDirection_whitePawn = {
    crossDirection_whitePawn_name: [],
    crossDirection_whitePawn_attack: [],
    crossDirection_whitePawn_move: [],
  };
  let straightDirection_whitePawn = {
    straightDirection_whitePawn_name: [],
    straightDirection_whitePawn_attack: [],
    straightDirection_whitePawn_move: [],
  };

  if (blackKing_ids[0] === "blackKing") {
    let id0 = +blackKing_ids[1][0];
    let id1 = blackKing_ids[1][1];

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

    let firstMoveAcmazAlgoritma = [
      a[0] + b[0],
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5],
      a[6] + b[6],
    ];

    firstMoveAcmazAlgoritma = firstMoveAcmazAlgoritma.filter((item) => item.length === 2);

    let secondMoveAcmazAlgoritma = [
      c[0] + d[0],
      c[1] + d[1],
      c[2] + d[2],
      c[3] + d[3],
      c[4] + d[4],
      c[5] + d[5],
      c[6] + d[6],
    ];

    secondMoveAcmazAlgoritma = secondMoveAcmazAlgoritma.filter((item) => item.length == 2);

    let thirdMoveAcmazAlgoritma = [
      e[0] + f[0],
      e[1] + f[1],
      e[2] + f[2],
      e[3] + f[3],
      e[4] + f[4],
      e[5] + f[5],
      e[6] + f[6],
    ];
    thirdMoveAcmazAlgoritma = thirdMoveAcmazAlgoritma.filter((item) => item.length == 2);

    let fourthMoveAcmazAlgoritma = [
      g[0] + h[0],
      g[1] + h[1],
      g[2] + h[2],
      g[3] + h[3],
      g[4] + h[4],
      g[5] + h[5],
      g[6] + h[6],
    ];
    fourthMoveAcmazAlgoritma = fourthMoveAcmazAlgoritma.filter((item) => item.length == 2);
    //straight part
    //straight part

    let fifthMoveAcmazAlgoritma = [];
    let sixthMoveAcmazAlgoritma = [];
    let seventhMoveAcmazAlgoritma = [];
    let eighthMoveAcmazAlgoritma = [];

    const indefOfFirst = verticalArray.indexOf(id0);
    const indefOFSecond = horizontalArray.indexOf(id1);

    for (let i = indefOfFirst + 1; i < verticalArray.length; i++) {
      fifthMoveAcmazAlgoritma.push(verticalArray[i] + id1);
    }

    for (let i = indefOfFirst - 1; i >= 0; i--) {
      sixthMoveAcmazAlgoritma.push(verticalArray[i] + id1);
    }

    for (let i = indefOFSecond + 1; i < horizontalArray.length; i++) {
      seventhMoveAcmazAlgoritma.push(id0 + horizontalArray[i]);
    }

    for (let i = indefOFSecond - 1; i >= 0; i--) {
      eighthMoveAcmazAlgoritma.push(id0 + horizontalArray[i]);
    }

    let elementsIDArray = [];

    for (let i = 0; i < allElementIDs.length; i++) {
      elementsIDArray.push(allElementIDs[i].split(" ")[5]);
    }
    // 111
    // 111
    let firstAcmazAlgoritma = firstMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece1 = [];

    if (firstAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = firstMoveAcmazAlgoritma.indexOf(firstAcmazAlgoritma[1]);

      let safeAreaForAcmazPiece = firstMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (firstAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (firstAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "whiteBishop"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece1 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : " ";
      }
    }

    //222

    let secondAcmazAlgoritma = secondMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece2 = [];

    if (secondAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = secondMoveAcmazAlgoritma.indexOf(secondAcmazAlgoritma[1]);

      let safeAreaForAcmazPiece = secondMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (secondAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (secondAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "whiteBishop"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece2 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //333

    let thirdAcmazAlgoritma = thirdMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece3 = [];

    if (secondAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = thirdMoveAcmazAlgoritma.indexOf(thirdAcmazAlgoritma[1]);

      let safeAreaForAcmazPiece = thirdMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (thirdAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (thirdAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "whiteBishop"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece3 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }
    //444

    let fourthAcmazAlgoritma = fourthMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece4 = [];

    if (secondAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = fourthMoveAcmazAlgoritma.indexOf(fourthAcmazAlgoritma[1]);

      let safeAreaForAcmazPiece = fourthMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (fourthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (fourthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "whiteBishop"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece4 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }
    //555
    let fifthAcmazAlgoritma = fifthMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece5 = [];

    if (fifthAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = fifthMoveAcmazAlgoritma.indexOf(fifthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = fifthMoveAcmazAlgoritma.slice(0, index);
      for (let i = 0; i < allElementIDs.length; i++) {
        if (fifthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }

        if (fifthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "whiteRook"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece5 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //666
    let sixthAcmazAlgoritma = sixthMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece6 = [];

    if (fifthAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = sixthMoveAcmazAlgoritma.indexOf(sixthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = sixthMoveAcmazAlgoritma.slice(0, index);
      for (let i = 0; i < allElementIDs.length; i++) {
        if (sixthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }

        if (sixthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "whiteRook"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece6 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //777
    let seventhAcmazAlgoritma = seventhMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece7 = [];

    if (fifthAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = seventhMoveAcmazAlgoritma.indexOf(seventhAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = seventhMoveAcmazAlgoritma.slice(0, index);
      for (let i = 0; i < allElementIDs.length; i++) {
        if (seventhAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }

        if (seventhAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "whiteRook"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece7 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }
    //888
    let eighthAcmazAlgoritma = eighthMoveAcmazAlgoritma.filter((item) => elementsIDArray.includes(item));
    let imMovableBlackPiece8 = [];

    if (fifthAcmazAlgoritma) {
      let firstCondition_must_be_black = false;
      let secondCondition_must_be_white = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;
      let index = eighthMoveAcmazAlgoritma.indexOf(eighthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = eighthMoveAcmazAlgoritma.slice(0, index);
      for (let i = 0; i < allElementIDs.length; i++) {
        if (eighthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "black") {
            firstCondition_must_be_black = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }

        if (eighthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "whiteQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "whiteRook"
          ) {
            secondCondition_must_be_white = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }

        conclusion = firstCondition_must_be_black && secondCondition_must_be_white;

        imMovableBlackPiece8 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }
    let imMovableBlackPieceArray = [
      ["cross", imMovableBlackPiece1, "top-right"],
      ["cross", imMovableBlackPiece2, "bottom-right"],
      ["cross", imMovableBlackPiece3, "bottom-left"],
      ["cross", imMovableBlackPiece4, "top-left"],
      ["straight", imMovableBlackPiece5, "top"],
      ["straight", imMovableBlackPiece6, "bottom"],
      ["straight", imMovableBlackPiece7, "right"],
      ["straight", imMovableBlackPiece8, "left"],
    ];

    for (let i = 0; i < imMovableBlackPieceArray.length; i++) {
      let direction = imMovableBlackPieceArray[i][0];
      let pieceName = imMovableBlackPieceArray[i][1][0];
      let attackingTile = imMovableBlackPieceArray[i][1][1];
      let movingTile = imMovableBlackPieceArray[i][1][2];
      let middleDirection = imMovableBlackPieceArray[i][2];

      if (
        "cross_blackBishop1" === direction + "_" + pieceName ||
        "cross_blackBishop2" === direction + "_" + pieceName
      ) {
        crossDirection_blackBishop.crossDirection_blackBishop_name.push(pieceName);
        crossDirection_blackBishop.crossDirection_blackBishop_move.push(movingTile);
        crossDirection_blackBishop.crossDirection_blackBishop_attack.push(attackingTile);
      }

      if (
        "straight_blackBishop1" === direction + "_" + pieceName ||
        "straight_blackBishop2" === direction + "_" + pieceName
      ) {
        straightDirection_blackBishop.straightDirection_blackBishop_name.push(pieceName);
      }
      if ("cross_blackRook1" === direction + "_" + pieceName || "cross_blackRook2" === direction + "_" + pieceName) {
        crossDirection_blackRook.crossDirection_blackRook_name.push(pieceName);
      }
      if (
        "straight_blackRook1" === direction + "_" + pieceName ||
        "straight_blackRook2" === direction + "_" + pieceName
      ) {
        straightDirection_blackRook.straightDirection_blackRook_name.push(pieceName);
        straightDirection_blackRook.straightDirection_blackRook_move.push(movingTile);
        straightDirection_blackRook.straightDirection_blackRook_attack.push(attackingTile);
      }

      if (
        "straight_blackKnight1" === direction + "_" + pieceName ||
        "straight_blackKnight2" === direction + "_" + pieceName ||
        "cross_blackKnight1" === direction + "_" + pieceName ||
        "cross_blackKnight2" === direction + "_" + pieceName
      ) {
        straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_name.push(pieceName);
      }
      if ("cross_blackQueen" === direction + "_" + pieceName) {
        crossDirection_blackQueen.crossDirection_blackQueen_name.push(pieceName);
        crossDirection_blackQueen.crossDirection_blackQueen_move.push(movingTile);
        crossDirection_blackQueen.crossDirection_blackQueen_attack.push(attackingTile);
      }
      if ("straight_blackQueen" === direction + "_" + pieceName) {
        straightDirection_blackQueen.straightDirection_blackQueen_name.push(pieceName);
        straightDirection_blackQueen.straightDirection_blackQueen_move.push(movingTile);
        straightDirection_blackQueen.straightDirection_blackQueen_attack.push(attackingTile);
      }
      if (
        "straight_blackPawn_top" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "straight_blackPawn_bottom" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        let moveForImmovablePiece = blackPawnMoveArray.filter((item) => movingTile.includes(item));
        straightDirection_blackPawn.straightDirection_blackPawn_name.push(pieceName);
        straightDirection_blackPawn.straightDirection_blackPawn_move.push(moveForImmovablePiece);
      }
      if (
        "straight_blackPawn_rigth" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "straight_blackPawn_left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        straightDirection_blackPawn.straightDirection_blackPawn_name.push(pieceName);
      }
      if (
        "cross_blackPawn_top-right" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "cross_blackPawn_top-left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        crossDirection_blackPawn.crossDirection_blackPawn_name.push(pieceName);
      }
      if (
        "cross_blackPawn_bottom-right" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "cross_blackPawn_bottom-left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        let attackForImMovablePiece = attackingBlackPawns.find((item) => item === attackingTile);
        crossDirection_blackPawn.crossDirection_blackPawn_name.push(pieceName);
        crossDirection_blackPawn.crossDirection_blackPawn_attack.push(attackForImMovablePiece);
      }
    }
  }

  if (whiteKing_ids[0] === "whiteKing") {
    let id1 = +whiteKing_ids[1][0];
    let id2 = whiteKing_ids[1][1];

    const indexOfFirst = verticalArray.indexOf(id1);
    const indexOfSecond = horizontalArray.indexOf(id2);
    //-----------straight Part-------//
    //-----------straight Part-------//
    //-----------straight Part-------//
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];
    for (let i = indexOfFirst; i <= verticalArray.length - 1; i++) {
      a.push(verticalArray[i]);
    }
    for (let i = indexOfSecond; i <= horizontalArray.length - 1; i++) {
      b.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst; i >= 0; i--) {
      c.push(+verticalArray[i]);
    }
    for (let i = indexOfSecond; i <= horizontalArray.length - 1; i++) {
      d.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst; i >= 0; i--) {
      e.push(+verticalArray[i]);
    }
    for (let i = indexOfSecond; i >= 0; i--) {
      f.push(horizontalArray[i]);
    }
    for (let i = indexOfFirst; i <= verticalArray.length - 1; i++) {
      g.push(+verticalArray[i]);
    }
    for (let i = indexOfSecond; i >= 0; i--) {
      h.push(horizontalArray[i]);
    }
    const firstMoveAcmazAlgoritma = [
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5],
      a[6] + b[6],
      a[7] + b[7],
    ];
    const secondMoveAcmazAlgoritma = [
      c[1] + d[1],
      c[2] + d[2],
      c[3] + d[3],
      c[4] + d[4],
      c[5] + d[5],
      c[6] + d[6],
      c[7] + d[7],
    ];
    const thirdMoveAcmazAlgoritma = [
      e[1] + f[1],
      e[2] + f[2],
      e[3] + f[3],
      e[4] + f[4],
      e[5] + f[5],
      e[6] + f[6],
      e[7] + f[7],
    ];
    const fourthMoveAcmazAlgoritma = [
      g[1] + h[1],
      g[2] + h[2],
      g[3] + h[3],
      g[4] + h[4],
      g[5] + h[5],
      g[6] + h[6],
      g[7] + h[7],
    ];

    //------cross part-------//
    //------cross part-------//
    //------cross part-------//

    let fifthMoveAcmazAlgoritma = [];
    let sixthMoveAcmazAlgoritma = [];
    let seventhMoveAcmazAlgoritma = [];
    let eighthMoveAcmazAlgoritma = [];
    for (let i = indexOfFirst + 1; i < verticalArray.length; i++) {
      fifthMoveAcmazAlgoritma.push(verticalArray[i] + id2);
    }
    for (let i = indexOfFirst - 1; i >= 0; i--) {
      sixthMoveAcmazAlgoritma.push(verticalArray[i] + id2);
    }
    for (let i = indexOfSecond + 1; i < horizontalArray.length; i++) {
      seventhMoveAcmazAlgoritma.push(id1 + horizontalArray[i]);
    }
    for (let i = indexOfSecond - 1; i >= 0; i--) {
      eighthMoveAcmazAlgoritma.push(id1 + horizontalArray[i]);
    }
    //-------------------------------------------------------------------------
    //_________________________________________________________________________
    //-------------------------------------------------------------------------

    let elementsIDarray = [];
    for (let i = 0; i < allElementIDs.length; i++) {
      elementsIDarray.push(allElementIDs[i].split(" ")[5]);
    }

    //11111111111111111111111111111111111111111111111111111111111111111111
    let firstAcmazAlgoritma = firstMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));

    let imMovableWhitePiece1 = [];
    if (firstAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;

      let index = firstMoveAcmazAlgoritma.indexOf(firstAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = firstMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (firstAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (firstAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "blackBishop"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece1 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //2222222222222222222222222222222222222222222222222222222222222222
    let secondAcmazAlgoritma = secondMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));
    let imMovableWhitePiece2 = [];
    if (secondAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;

      let index = secondMoveAcmazAlgoritma.indexOf(secondAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = secondMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (secondAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (secondAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "blackBishop"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece2 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //33333333333333333333333333333333333333333333333333333333333333333
    let thirdAcmazAlgoritma = thirdMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));
    let imMovableWhitePiece3 = [];
    if (thirdAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let acmazPiece;
      let pieceIDThatTreating;
      let conclusion;

      let index = thirdMoveAcmazAlgoritma.indexOf(thirdAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = thirdMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (thirdAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (thirdAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "blackBishop"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece3 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //4444444444444444444444444444444444444444444444444444444444444444
    let forthAcmazAlgoritma = fourthMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));
    let imMovableWhitePiece4 = [];
    if (forthAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let pieceIDThatTreating;
      let acmazPiece;
      let conclusion;

      let index = fourthMoveAcmazAlgoritma.indexOf(forthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = fourthMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (forthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (forthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 11) === "blackBishop"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece4 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //555555555555555555555555555555555555555555555555555555555555555
    let fifthAcmazAlgoritma = fifthMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));
    let imMovableWhitePiece5 = [];
    if (fifthAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let pieceIDThatTreating;
      let acmazPiece;
      let conclusion;

      let index = fifthMoveAcmazAlgoritma.indexOf(fifthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = fifthMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (fifthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (fifthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "blackRook"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece5 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //66666666666666666666666666666666666666666666666666666666666666666
    let sixthAcmazAlgoritma = sixthMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));
    let imMovableWhitePiece6 = [];
    if (sixthAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let pieceIDThatTreating;
      let acmazPiece;
      let conclusion;

      let index = sixthMoveAcmazAlgoritma.indexOf(sixthAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = sixthMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (sixthAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (sixthAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "blackRook"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece6 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //7777777777777777777777777777777777777777777777777777777777
    let seventhAcmazAlgoritma = seventhMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));

    let imMovableWhitePiece7 = [];

    if (seventhAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let pieceIDThatTreating;
      let acmazPiece;
      let conclusion;

      let index = seventhMoveAcmazAlgoritma.indexOf(seventhAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = seventhMoveAcmazAlgoritma.slice(0, index);
      // console.log(safeAreaForAcmazPiece);
      for (let i = 0; i < allElementIDs.length; i++) {
        if (seventhAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (seventhAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "blackRook"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;

        imMovableWhitePiece7 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    //888888888888888888888888888888888888888888
    let eightAcmazAlgoritma = eighthMoveAcmazAlgoritma.filter((item) => elementsIDarray.includes(item));

    let imMovableWhitePiece8 = [];
    if (eightAcmazAlgoritma) {
      let firstCondition_must_be_white = false;
      let secondCondition_must_be_black = false;
      let pieceIDThatTreating;
      let acmazPiece;
      let conclusion;

      let index = eighthMoveAcmazAlgoritma.indexOf(eightAcmazAlgoritma[1]);
      let safeAreaForAcmazPiece = eighthMoveAcmazAlgoritma.slice(0, index);

      for (let i = 0; i < allElementIDs.length; i++) {
        if (eightAcmazAlgoritma[0] === allElementIDs[i].split(" ")[5]) {
          if (allElementIDs[i].split(" ")[0].slice(0, 5) === "white") {
            firstCondition_must_be_white = true;
            acmazPiece = allElementIDs[i].split(" ")[0];
          }
        }
        if (eightAcmazAlgoritma[1] === allElementIDs[i].split(" ")[5]) {
          if (
            allElementIDs[i].split(" ")[0].slice(0, 10) === "blackQueen" ||
            allElementIDs[i].split(" ")[0].slice(0, 9) === "blackRook"
          ) {
            secondCondition_must_be_black = true;
            pieceIDThatTreating = allElementIDs[i].split(" ")[5];
          }
        }
        conclusion = firstCondition_must_be_white && secondCondition_must_be_black;
        imMovableWhitePiece8 = conclusion ? [acmazPiece, pieceIDThatTreating, safeAreaForAcmazPiece] : "";
      }
    }

    let imMovableWhitePiecesArray = [
      ["cross", imMovableWhitePiece1, "top-right"],
      ["cross", imMovableWhitePiece2, "bottom-right"],
      ["cross", imMovableWhitePiece3, "bottom-left"],
      ["cross", imMovableWhitePiece4, "top-left"],
      ["straight", imMovableWhitePiece5, "top"],
      ["straight", imMovableWhitePiece6, "bottom"],
      ["straight", imMovableWhitePiece7, "right"],
      ["straight", imMovableWhitePiece8, "left"],
    ];

    for (let i = 0; i < imMovableWhitePiecesArray?.length; i++) {
      let direction = imMovableWhitePiecesArray[i][0];
      let pieceName = imMovableWhitePiecesArray[i][1][0];
      let attackingTile = imMovableWhitePiecesArray[i][1][1];
      let movingTiles = imMovableWhitePiecesArray[i][1][2];
      let middleDirection = imMovableWhitePiecesArray[i][2];

      if (
        "straight_whiteBishop1" === direction + "_" + pieceName ||
        "straight_whiteBishop2" === direction + "_" + pieceName
      ) {
        straightDirection_whiteBishop.straightDirection_whiteBishop_name.push(pieceName);
      }

      if (
        "cross_whiteBishop1" === direction + "_" + pieceName ||
        "cross_whiteBishop2" === direction + "_" + pieceName
      ) {
        crossDirection_whiteBishop.crossDirection_whiteBishop_name.push(pieceName);
        crossDirection_whiteBishop.crossDirection_whiteBishop_attack.push(attackingTile);
        crossDirection_whiteBishop.crossDirection_whiteBishop_move.push(movingTiles);
      }
      if (
        "straight_whiteRook1" === direction + "_" + pieceName ||
        "straight_whiteRook2" === direction + "_" + pieceName
      ) {
        straightDirection_whiteRook.straightDirection_whiteRook_name.push(pieceName);
        straightDirection_whiteRook.straightDirection_whiteRook_attack.push(attackingTile);
        straightDirection_whiteRook.straightDirection_whiteRook_move.push(movingTiles);
      }
      if ("cross_whiteRook1" === direction + "_" + pieceName || "cross_whiteRook2" === direction + "_" + pieceName) {
        crossDirection_whiteRook.crossDirection_whiteRook_name.push(pieceName);
      }
      if ("cross_whiteQueen" === direction + "_" + pieceName) {
        crossDirection_whiteQueen.crossDirection_whiteQueen_name.push(pieceName);
        crossDirection_whiteQueen.crossDirection_whiteQueen_attack.push(attackingTile);
        crossDirection_whiteQueen.crossDirection_whiteQueen_move.push(movingTiles);
      }
      if ("straight_whiteQueen" === direction + "_" + pieceName) {
        straightDirection_whiteQueen.straightDirection_whiteQueen_name.push(pieceName);
        straightDirection_whiteQueen.straightDirection_whiteQueen_attack.push(attackingTile);
        straightDirection_whiteQueen.straightDirection_whiteQueen_move.push(movingTiles);
      }

      if (
        "straight_whiteKnight1" === direction + "_" + pieceName ||
        "straight_whiteKnight2" === direction + "_" + pieceName ||
        "cross_whiteKnight1" === direction + "_" + pieceName ||
        "cross_whiteKnight2" === direction + "_" + pieceName
      ) {
        straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_name.push(pieceName);
      }

      if (
        "cross_whitePawn_top-right" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "cross_whitePawn_top-left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        crossDirection_whitePawn.crossDirection_whitePawn_name.push(pieceName);
        let attackForImMovablePiece = attackingWhitePawns.find((item) => item === attackingTile);
        crossDirection_whitePawn.crossDirection_whitePawn_attack.push(attackForImMovablePiece);
      } else if (
        "cross_whitePawn_bottom-left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "cross_whitePawn_bottom-right" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        crossDirection_whitePawn.crossDirection_whitePawn_name.push(pieceName);
      } else if (
        "straight_whitePawn_top" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "straight_whitePawn_bottom" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        let moveForImMovablePiece = whitePawnMoveArray?.filter((item) => movingTiles.includes(item));
        straightDirection_whitePawn.straightDirection_whitePawn_name.push(pieceName);
        straightDirection_whitePawn.straightDirection_whitePawn_move.push(moveForImMovablePiece);
      } else if (
        "straight_whitePawn_left" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection ||
        "straight_whitePawn_right" === direction + "_" + pieceName?.slice(0, 9) + "_" + middleDirection
      ) {
        straightDirection_whitePawn.straightDirection_whitePawn_name.push(pieceName);
      }
    }
  }

  return {
    straightDirection_blackBishop,
    crossDirection_blackBishop,
    straightDirection_blackRook,
    crossDirection_blackRook,
    straightDirection_blackPawn,
    crossDirection_blackPawn,
    crossDirection_blackQueen,
    straightDirection_blackQueen,
    straight_and_cross_direction_blackKnight,

    straight_and_cross_direction_whiteKnight,
    straightDirection_whiteBishop,
    crossDirection_whiteBishop,
    straightDirection_whiteRook,
    crossDirection_whiteRook,
    straightDirection_whiteQueen,
    crossDirection_whiteQueen,
    crossDirection_whitePawn,
    straightDirection_whitePawn,
  };
};
