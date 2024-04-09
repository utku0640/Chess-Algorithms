import { useState, useRef } from "react";
import { createBoard } from "./createBoard";

import { moveForPawn } from "./move/moveForPawn";
import { moveForRook } from "./move/moveForRook";
import { moveForBishop } from "./move/moveForBishop";
import { moveForQueen } from "./move/moveForQueen";
import { moveForKnight } from "./move/moveForKnight";
import { moveForKing } from "./move/moveForKing";
import { attackForPawn } from "./attack/attackForPawn";
import { attackForRook } from "./attack/attackForRook";
import { attackForBishop } from "./attack/attackForBishop";
import { attackForQueen } from "./attack/attackForQueen";
import { attackForKnight } from "./attack/attackForKnight";
import { attackForKing } from "./attack/attackForKing";
import { getAllElement_id } from "./getAllElement_id";
import { expectedMoveForBishop } from "./expected Move/expectedMoveForBishop";
import { expectedAttackForBishop } from "./expected Attack/expectedAttackForBishop";
import { expectedMoveForRook } from "./expected Move/expectedMoveForRook";
import { expectedAttackForRook } from "./expected Attack/expectedAttackForRook";
import { expectedMoveForQueen } from "./expected Move/expectedMoveForQueen";
import { expectedAttackForQueen } from "./expected Attack/expectedAttackForQueen";
import { expectedMoveForKnight } from "./expected Move/expectedMoveForKnight";
import { expectedAttackForKnight } from "./expected Attack/expectedAttackForKnight";
import { expectedMoveForKing } from "./expected Move/expectedMoveForKing";
import { expectedAttackForKing } from "./expected Attack/expectedAttackForKing";
import { expectedMoveForPawn } from "./expected Move/expectedMoveForPawn";
import { expectedAttackForPawn } from "./expected Attack/expectedAttackForPawn";
import { black_king_in_danger } from "./kings in danger/black_king_in_danger";
import { white_king_in_danger } from "./kings in danger/white_king_in_danger";
import { draw } from "./draw";
import ConclusionPage from "./ConclusionPage";
import { acmazAlgorithm } from "./acmazAlgorithm";
import { castling } from "./castling";
import SelectingPiecePage from "./SelectingPiecePage";
import { enpassant } from "./enpassant";
import { audio } from "./audio/audio";

function App() {
  const [pieces, setPieces] = useState(null);
  const [lastSquare, setLastSquare] = useState(null);
  const [lastSquare_castling, setLastSquare_casling] = useState(null);

  const [moveIndex, setMoveIndex] = useState(0);

  const [removingChildOfBlackSideByWhitePieces, setRemovingChildOfBlackSideByWhitePieces] = useState(null);
  const [removingChildOfWhiteSideByBlackPieces, setRemovingChildOfWhiteSideByBlackPieces] = useState(null);

  const [whiteRook1DidMove, setWhiteRook1DidMove] = useState(false);
  const [whiteRook2DidMove, setWhiteRook2DidMove] = useState(false);
  const [whiteKingDidMove, setWhiteKingDidMove] = useState(false);

  const [blackRook1DidMove, setBlackRook1DidMove] = useState(false);
  const [blackRook2DidMove, setBlackRook2DidMove] = useState(false);
  const [blackKingDidMove, setBlackKingDidMove] = useState(false);

  const [whitePawn1_enpassant, setWhitePawn1_enpassant] = useState(false);
  const [whitePawn1_enpassant_moveIndex, setWhitePawn1_enpassant_moveIndex] = useState(0);

  const [whitePawn2_enpassant, setWhitePawn2_enpassant] = useState(false);
  const [whitePawn2_enpassant_moveIndex, setWhitePawn2_enpassant_moveIndex] = useState(0);

  const [whitePawn3_enpassant, setWhitePawn3_enpassant] = useState(false);
  const [whitePawn3_enpassant_moveIndex, setWhitePawn3_enpassant_moveIndex] = useState(0);

  const [whitePawn4_enpassant, setWhitePawn4_enpassant] = useState(false);
  const [whitePawn4_enpassant_moveIndex, setWhitePawn4_enpassant_moveIndex] = useState(0);

  const [whitePawn5_enpassant, setWhitePawn5_enpassant] = useState(false);
  const [whitePawn5_enpassant_moveIndex, setWhitePawn5_enpassant_moveIndex] = useState(0);

  const [whitePawn6_enpassant, setWhitePawn6_enpassant] = useState(false);
  const [whitePawn6_enpassant_moveIndex, setWhitePawn6_enpassant_moveIndex] = useState(0);

  const [whitePawn7_enpassant, setWhitePawn7_enpassant] = useState(false);
  const [whitePawn7_enpassant_moveIndex, setWhitePawn7_enpassant_moveIndex] = useState(0);

  const [whitePawn8_enpassant, setWhitePawn8_enpassant] = useState(false);
  const [whitePawn8_enpassant_moveIndex, setWhitePawn8_enpassant_moveIndex] = useState(0);
  //___________________________________________________________________________
  const [blackPawn1_enpassant, setBlackPawn1_enpassant] = useState(false);
  const [blackPawn1_enpassant_moveIndex, setBlackPawn1_enpassant_moveIndex] = useState(0);

  const [blackPawn2_enpassant, setBlackPawn2_enpassant] = useState(false);
  const [blackPawn2_enpassant_moveIndex, setBlackPawn2_enpassant_moveIndex] = useState(0);

  const [blackPawn3_enpassant, setBlackPawn3_enpassant] = useState(false);
  const [blackPawn3_enpassant_moveIndex, setBlackPawn3_enpassant_moveIndex] = useState(0);

  const [blackPawn4_enpassant, setBlackPawn4_enpassant] = useState(false);
  const [blackPawn4_enpassant_moveIndex, setBlackPawn4_enpassant_moveIndex] = useState(0);

  const [blackPawn5_enpassant, setBlackPawn5_enpassant] = useState(false);
  const [blackPawn5_enpassant_moveIndex, setBlackPawn5_enpassant_moveIndex] = useState(0);

  const [blackPawn6_enpassant, setBlackPawn6_enpassant] = useState(false);
  const [blackPawn6_enpassant_moveIndex, setBlackPawn6_enpassant_moveIndex] = useState(0);

  const [blackPawn7_enpassant, setBlackPawn7_enpassant] = useState(false);
  const [blackPawn7_enpassant_moveIndex, setBlackPawn7_enpassant_moveIndex] = useState(0);

  const [blackPawn8_enpassant, setBlackPawn8_enpassant] = useState(false);
  const [blackPawn8_enpassant_moveIndex, setBlackPawn8_enpassant_moveIndex] = useState(0);

  const [lastSquare_removingWhitePawns_enpassant, setLastSquare_removingWhitePawns_enpassant] = useState(null);
  const [removingWhitePawns_enpassant, setRemovingWhitePawns_enpassant] = useState(null);

  const [lastSquare_removingBlackPawns_enpassant, setLastSquare_removingBlackPawns_enpassant] = useState(null);
  const [removingBlackPawns_enpassant, setRemovingBlackPawns_enpassant] = useState(null);

  const [lastSquare_enpassant, setLastSquare_enpassant] = useState(null);

  const [whichPieceHasBeenSelectedAtLastTile_white, setWhichPieceHasBeenSelectedAtLastTile_white] = useState({
    pieceName: "",
    pieceID: "",
    isNewWhitePieceComing: false,
  });
  const [whichPieceHasBeenSelectedAtLastTile_black, setWhichPieceHasBeenSelectedAtLastTile_black] = useState({
    pieceName: "",
    pieceID: "",
    isNewBlackPieceComing: false,
  });

  const boardRef = useRef();

  let allElementIDs = getAllElement_id(boardRef);

  let { move_self_audio, capture_audio, castle_audio, game_end_audio, promote_audio } = audio();

  //pawn
  //pawn
  let { whitePawnMoveArray, blackPawnMoveArray } = moveForPawn(pieces, boardRef);
  let { attackingWhitePawns, attackingBlackPawns } = attackForPawn(pieces);

  let { expectedMoveWhitePawns, expectedMoveBlackPawns } = expectedMoveForPawn(allElementIDs, boardRef);

  let expectedAttackPawn = expectedAttackForPawn(allElementIDs);
  //rook
  //rook
  let finalMoveForRook = moveForRook(pieces, boardRef)?.setMovingRooksArray;
  let rookMoveArrayVerticalUp = moveForRook(pieces, boardRef)?.rookMoveArrayVerticalUp;
  let rookMoveArrayVerticalDown = moveForRook(pieces, boardRef)?.rookMoveArrayVerticalDown;
  let rookMoveArrayHorizontalRight = moveForRook(pieces, boardRef)?.rookMoveArrayHorizontalRight;
  let rookMoveArrayHorizontalLeft = moveForRook(pieces, boardRef)?.rookMoveArrayHorizontalLeft;
  let setAttackingRook = attackForRook(
    pieces,
    boardRef,
    rookMoveArrayVerticalUp,
    rookMoveArrayVerticalDown,
    rookMoveArrayHorizontalRight,
    rookMoveArrayHorizontalLeft
  );
  let { expectedMoveWhiteRooks, expectedMoveBlackRooks } = expectedMoveForRook(allElementIDs);

  let expectedAttackRook = expectedAttackForRook(
    expectedMoveWhiteRooks,
    expectedMoveBlackRooks,
    allElementIDs,
    boardRef
  );
  //bishop
  //bishop
  let finalMoveForBishop = moveForBishop(pieces, boardRef)?.finalMoveForBishop;
  let firstMoveForBishop = moveForBishop(pieces, boardRef)?.firstMoveForBishop;
  let secondMoveForBishop = moveForBishop(pieces, boardRef)?.secondMoveForBishop;
  let thirdMoveForBishop = moveForBishop(pieces, boardRef)?.thirdMoveForBishop;
  let fourthMoveForBishop = moveForBishop(pieces, boardRef)?.fourthMoveForBishop;
  let setAttackingBihop = attackForBishop(
    pieces,
    boardRef,
    firstMoveForBishop,
    secondMoveForBishop,
    thirdMoveForBishop,
    fourthMoveForBishop
  );
  let { expectedMoveWhiteBishop, expectedMoveBlackBishop } = expectedMoveForBishop(allElementIDs);

  let expectedAttackBishop = expectedAttackForBishop(
    expectedMoveWhiteBishop,
    expectedMoveBlackBishop,
    allElementIDs,
    boardRef
  );

  //queens
  let moveEveryWhereForQueen = moveForQueen(pieces, boardRef)?.moveEveryWhereForQueen;
  let everySingleMoves = moveForQueen(pieces, boardRef)?.everySingleMoves;
  let setAttackingQueen = attackForQueen(pieces, boardRef, everySingleMoves);

  let { expectedMoveWhiteQueens, expectedMoveBlackQueens } = expectedMoveForQueen(allElementIDs);

  let expectedAttackQueen = expectedAttackForQueen(
    expectedMoveWhiteQueens,
    expectedMoveBlackQueens,
    allElementIDs,
    boardRef
  );

  //knight
  let setMovingKnight = moveForKnight(pieces);
  let attackingKnight = attackForKnight(pieces, boardRef, setMovingKnight);
  let { expectedMoveWhiteKnights, expectedMoveBlackKnights } = expectedMoveForKnight(allElementIDs);
  let expectedAttackKnight = expectedAttackForKnight(expectedMoveWhiteKnights, expectedMoveBlackKnights);

  //king
  let { expectedMoveWhiteKing, expectedMoveBlackKing } = expectedMoveForKing(allElementIDs);
  let expectedAttackKing = expectedAttackForKing(expectedMoveWhiteKing, expectedMoveBlackKing);

  //kings in danger
  let {
    blackKingDanger_pieceIDThatMustGetKill,
    blackKingDanger_intervalThatMustBeShutDown,
    blackKingCannotGoThisTileArray,
    run_off_move_for_blackKing,
    blackSideLoose,
  } = black_king_in_danger(
    expectedAttackPawn,
    expectedAttackRook,
    expectedAttackBishop,
    expectedAttackKnight,
    expectedAttackQueen,
    expectedAttackKing,
    allElementIDs,
    expectedMoveBlackPawns,
    expectedMoveBlackKing,
    boardRef,
    game_end_audio
  );

  let {
    whiteKingDanger_pieceIDThatMustGetKill,
    whiteKingDanger_intervalThatMustBeShutDown,
    whiteKingCannotGoThisTileArray,
    run_off_move_for_whiteKing,
    whiteSideLoose,
  } = white_king_in_danger(
    expectedAttackPawn,
    expectedAttackRook,
    expectedAttackBishop,
    expectedAttackKnight,
    expectedAttackQueen,
    expectedAttackKing,
    allElementIDs,
    expectedMoveWhitePawns,
    expectedMoveWhiteKing,
    boardRef,
    game_end_audio
  );

  //kings movements
  let { blackKingMoveArray, whiteKingMoveArray } = moveForKing(
    pieces,
    blackKingCannotGoThisTileArray,
    whiteKingCannotGoThisTileArray
  );
  let attackingBlackKing = attackForKing(pieces, blackKingMoveArray, whiteKingMoveArray)?.attackingBlackKing;
  let attackingWhiteKing = attackForKing(pieces, blackKingMoveArray, whiteKingMoveArray)?.attackingWhiteKing;

  //draw
  let draw_no_one_win = draw(
    run_off_move_for_blackKing,
    run_off_move_for_whiteKing,
    whiteKingDanger_pieceIDThatMustGetKill,
    blackKingDanger_pieceIDThatMustGetKill,
    allElementIDs,
    moveIndex,
    expectedAttackPawn,
    expectedAttackRook,
    expectedAttackBishop,
    expectedAttackKnight,
    expectedAttackQueen,
    expectedMoveWhitePawns,
    expectedMoveBlackPawns,
    game_end_audio
  );

  //acmaz algoritması
  let {
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
  } = acmazAlgorithm(allElementIDs, blackPawnMoveArray, attackingBlackPawns, whitePawnMoveArray, attackingWhitePawns);

  //castling
  let { whiteShortCastling, whiteLongCasling, blackShortCastling, blackLongCasling } = castling(
    whiteRook1DidMove,
    whiteRook2DidMove,
    whiteKingDidMove,
    blackRook1DidMove,
    blackRook2DidMove,
    blackKingDidMove,
    boardRef,
    whiteKingCannotGoThisTileArray,
    blackKingCannotGoThisTileArray
  );

  //enpassant
  let { blackPawn_can_attack_this_tile, whitePawn_can_attack_this_tile } = enpassant(
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
  );

  let blackPawn_enpassantMove = blackPawn_can_attack_this_tile.filter((item) => attackingBlackPawns.includes(item));
  let whitePawn_enpassantMove = whitePawn_can_attack_this_tile.filter((item) => attackingWhitePawns.includes(item));

  // when black king in danger, movement of other pieces
  // when black king in danger, movement of other pieces

  //black side
  //black side
  let moveToSaveBlackKing;
  let attackToSaveBlackKing;
  if (blackKingDanger_pieceIDThatMustGetKill) {
    moveToSaveBlackKing = blackKingDanger_intervalThatMustBeShutDown;
    attackToSaveBlackKing = blackKingDanger_pieceIDThatMustGetKill;
  }
  //black bishop
  //black bishop
  let whenBlackKingInDangerJustMoveThisTileForBlackBishop =
    moveToSaveBlackKing || attackToSaveBlackKing
      ? finalMoveForBishop?.filter((item) => moveToSaveBlackKing?.includes(item))
      : finalMoveForBishop;
  let whenBlackKingInDangerJustAttackThisTileForBlackBishop = attackToSaveBlackKing
    ? setAttackingBihop?.filter((item) => item === attackToSaveBlackKing)
    : setAttackingBihop;

  //black pawn
  //black pawn
  let whenBlackKingInDangerJustMoveThisTileForBlackPawn =
    moveToSaveBlackKing || attackToSaveBlackKing
      ? blackPawnMoveArray.filter((item) => moveToSaveBlackKing.includes(item))
      : blackPawnMoveArray;
  let whenBlackKingInDangerJustAttackThisTileForBlackPawn = attackToSaveBlackKing
    ? attackingBlackPawns.filter((item) => item === attackToSaveBlackKing)
    : attackingBlackPawns;

  //black rook
  //black rook
  let whenBlackKingInDangerJustMoveThisTileForBlackrook =
    moveToSaveBlackKing || attackToSaveBlackKing
      ? finalMoveForRook?.filter((item) => moveToSaveBlackKing.includes(item))
      : finalMoveForRook;
  let whenBlackKingInDangerJustAttackThisTileForBlackRook = attackToSaveBlackKing
    ? setAttackingRook?.filter((item) => item === attackToSaveBlackKing)
    : setAttackingRook;

  //black queen
  //black queen
  let whenBlackKingInDangerJustMoveThisTileForBlackQueen =
    moveToSaveBlackKing || attackToSaveBlackKing
      ? moveEveryWhereForQueen?.filter((item) => moveToSaveBlackKing.includes(item))
      : moveEveryWhereForQueen;
  let whenBlackKingInDangerJustAttackThisTileForBlackQueen = attackToSaveBlackKing
    ? setAttackingQueen?.filter((item) => item === attackToSaveBlackKing)
    : setAttackingQueen;

  //black knight
  //black knight
  let whenBlackKingInDangerJustMoveThisTileForBlackKnight =
    moveToSaveBlackKing || attackToSaveBlackKing
      ? setMovingKnight?.filter((item) => moveToSaveBlackKing.includes(item))
      : setMovingKnight;
  let whenBlackKingInDangerJustAttackThisTileForBlackKnight = attackToSaveBlackKing
    ? attackingKnight?.filter((item) => item === attackToSaveBlackKing)
    : attackingKnight;

  //_______________________________________________________________________
  //_______________________________________________________________________
  // when white king in danger, movement of other pieces
  // when white king in danger, movement of other pieces
  //white side
  //white side
  let moveToSaveWhiteKing;
  let attackToSaveWhiteKing;
  if (whiteKingDanger_intervalThatMustBeShutDown) {
    moveToSaveWhiteKing = whiteKingDanger_intervalThatMustBeShutDown;
    attackToSaveWhiteKing = whiteKingDanger_pieceIDThatMustGetKill;
  }

  //white bishop
  //white bishop
  let whenWhiteKingInDangerJustMoveThisTileForWhiteBishop =
    moveToSaveWhiteKing || attackToSaveWhiteKing
      ? finalMoveForBishop?.filter((item) => moveToSaveWhiteKing?.includes(item))
      : finalMoveForBishop;

  let whenWhiteKingInDangerJustAttackThisTileForWhiteBishop = attackToSaveWhiteKing
    ? setAttackingBihop?.filter((item) => item === attackToSaveWhiteKing)
    : setAttackingBihop;

  //white pawn
  //white pawn
  let whenWhiteKingInDangerJustMoveThisTileForWhitePawn =
    moveToSaveWhiteKing || attackToSaveWhiteKing
      ? whitePawnMoveArray.filter((item) => moveToSaveWhiteKing.includes(item))
      : whitePawnMoveArray;
  let whenWhiteKingInDangerJustAttackThisTileFoWhitekPawn = attackToSaveWhiteKing
    ? attackingWhitePawns.filter((item) => item === attackToSaveWhiteKing)
    : attackingWhitePawns;

  //white rook
  //white rook
  let whenWhiteKingInDangerJustMoveThisTileForWhiterook =
    moveToSaveWhiteKing || attackToSaveWhiteKing
      ? finalMoveForRook?.filter((item) => moveToSaveWhiteKing.includes(item))
      : finalMoveForRook;
  let whenWhiteKingInDangerJustAttackThisTileForWhiteRook = attackToSaveWhiteKing
    ? setAttackingRook?.filter((item) => item === attackToSaveWhiteKing)
    : setAttackingRook;

  //white queen
  //white queen
  let whenWhiteKingInDangerJustMoveThisTileForWhiteQueen =
    moveToSaveWhiteKing || attackToSaveWhiteKing
      ? moveEveryWhereForQueen?.filter((item) => moveToSaveWhiteKing.includes(item))
      : moveEveryWhereForQueen;
  let whenWhiteKingInDangerJustAttackThisTileForWhiteQueen = attackToSaveWhiteKing
    ? setAttackingQueen?.filter((item) => item === attackToSaveWhiteKing)
    : setAttackingQueen;

  //white knight
  //white knight
  let whenWhiteKingInDangerJustMoveThisTileForWhiteKnight =
    moveToSaveWhiteKing || attackToSaveWhiteKing
      ? setMovingKnight?.filter((item) => moveToSaveWhiteKing.includes(item))
      : setMovingKnight;
  let whenWhiteKingInDangerJustAttackThisTileForWhiteKnight = attackToSaveWhiteKing
    ? attackingKnight?.filter((item) => item === attackToSaveWhiteKing)
    : attackingKnight;

  if (whichPieceHasBeenSelectedAtLastTile_white.isNewWhitePieceComing === true) {
    let id = whichPieceHasBeenSelectedAtLastTile_white.pieceID;
    boardRef?.current?.children[id].children[0].removeChild(boardRef?.current?.children[id].children[0].children[0]);
    boardRef?.current?.children[id].children[0].append(whichPieceHasBeenSelectedAtLastTile_white.pieceName);
    setWhichPieceHasBeenSelectedAtLastTile_white({ isNewWhitePieceComing: false });
  }
  if (whichPieceHasBeenSelectedAtLastTile_black.isNewBlackPieceComing === true) {
    let id = whichPieceHasBeenSelectedAtLastTile_black.pieceID;
    boardRef?.current?.children[id].children[0].removeChild(boardRef?.current?.children[id].children[0].children[0]);
    boardRef?.current?.children[id].children[0].append(whichPieceHasBeenSelectedAtLastTile_black.pieceName);
    setWhichPieceHasBeenSelectedAtLastTile_black({ isNewBlackPieceComing: false });
  }

  const handleOnDragStart = (e) => {
    setPieces(e.target);
  };
  const handleOnDrop = (e) => {
    e.preventDefault();

    //attack and move for whitePawns
    for (let i = 0; i < boardRef?.current?.children?.length; i++) {
      if (
        pieces?.name?.slice(0, 9) === "whitePawn" &&
        !crossDirection_whitePawn.crossDirection_whitePawn_name.includes(pieces?.name) &&
        !straightDirection_whitePawn.straightDirection_whitePawn_name.includes(pieces.name)
      ) {
        if (whitePawn_enpassantMove.includes(e.target.id) && pieces?.name.slice(0, 9) == "whitePawn") {
          let removingPieceID = +e.target.id[0] - 1 + e.target.id[1];
          if (boardRef?.current?.children[i]?.children[0]?.id === removingPieceID) {
            setLastSquare_removingBlackPawns_enpassant(boardRef?.current?.children[i]?.children[0]);
            setRemovingBlackPawns_enpassant(boardRef?.current?.children[i]?.children[0]?.children[0]);
          }
          setLastSquare_enpassant(e.target);
        } else if (!whitePawn_enpassantMove.includes(e.target.id) && pieces?.name.slice(0, 9) == "whitePawn") {
          setLastSquare_removingBlackPawns_enpassant(null);
          setRemovingBlackPawns_enpassant(null);
          setLastSquare_enpassant(null);
        }
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenWhiteKingInDangerJustAttackThisTileFoWhitekPawn?.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenWhiteKingInDangerJustAttackThisTileFoWhitekPawn?.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              whenWhiteKingInDangerJustMoveThisTileForWhitePawn.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              !whenWhiteKingInDangerJustMoveThisTileForWhitePawn.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (
        pieces?.name?.slice(0, 9) === "whitePawn" &&
        crossDirection_whitePawn.crossDirection_whitePawn_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (crossDirection_whitePawn.crossDirection_whitePawn_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!crossDirection_whitePawn.crossDirection_whitePawn_attack?.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              crossDirection_whitePawn.crossDirection_whitePawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              !crossDirection_whitePawn.crossDirection_whitePawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (
        pieces?.name?.slice(0, 9) === "whitePawn" &&
        straightDirection_whitePawn.straightDirection_whitePawn_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (straightDirection_whitePawn.straightDirection_whitePawn_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (
            !straightDirection_whitePawn.straightDirection_whitePawn_attack?.includes(e.target.parentNode.id)
          ) {
            if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              straightDirection_whitePawn.straightDirection_whitePawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "whitePawn" &&
              !straightDirection_whitePawn.straightDirection_whitePawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      }
    }
    //attack and move for blackPawns
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 9) === "blackPawn" &&
        !straightDirection_blackPawn.straightDirection_blackPawn_name.includes(pieces?.name) &&
        !crossDirection_blackPawn.crossDirection_blackPawn_name.includes(pieces?.name)
      ) {
        if (blackPawn_enpassantMove.includes(e.target.id) && pieces?.name.slice(0, 9) == "blackPawn") {
          let removingPieceID = +e.target.id[0] + 1 + e.target.id[1];
          if (boardRef?.current?.children[i]?.children[0]?.id === removingPieceID) {
            setLastSquare_removingWhitePawns_enpassant(boardRef?.current?.children[i]?.children[0]);
            setRemovingWhitePawns_enpassant(boardRef?.current?.children[i]?.children[0]?.children[0]);
          }
          setLastSquare_enpassant(e.target);
        } else if (!blackPawn_enpassantMove.includes(e.target.id) && pieces?.name.slice(0, 9) == "blackPawn") {
          setLastSquare_removingWhitePawns_enpassant(null);
          setRemovingWhitePawns_enpassant(null);
          setLastSquare_enpassant(null);
        }
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenBlackKingInDangerJustAttackThisTileForBlackPawn.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenBlackKingInDangerJustAttackThisTileForBlackPawn.includes(e.target?.parentNode?.id)) {
            if (
              pieces?.name?.slice(0, 9) === "blackPawn" &&
              whenBlackKingInDangerJustMoveThisTileForBlackPawn.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackPawn" &&
              !whenBlackKingInDangerJustMoveThisTileForBlackPawn.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (straightDirection_blackPawn.straightDirection_blackPawn_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (straightDirection_blackPawn.straightDirection_blackPawn_attack.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (
            !straightDirection_blackPawn.straightDirection_blackPawn_attack.includes(e.target?.parentNode?.id)
          ) {
            if (
              pieces?.name?.slice(0, 9) === "blackPawn" &&
              straightDirection_blackPawn.straightDirection_blackPawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackPawn" &&
              !straightDirection_blackPawn.straightDirection_blackPawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (crossDirection_blackPawn.crossDirection_blackPawn_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (crossDirection_blackPawn.crossDirection_blackPawn_attack.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!crossDirection_blackPawn.crossDirection_blackPawn_attack.includes(e.target?.parentNode?.id)) {
            if (
              pieces?.name?.slice(0, 9) === "blackPawn" &&
              crossDirection_blackPawn.crossDirection_blackPawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackPawn" &&
              !crossDirection_blackPawn.crossDirection_blackPawn_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }
    //attack and move for whiteRook
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 9) === "whiteRook" &&
        !crossDirection_whiteRook.crossDirection_whiteRook_name.includes(pieces?.name) &&
        !straightDirection_whiteRook.straightDirection_whiteRook_name.includes(pieces.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenWhiteKingInDangerJustAttackThisTileForWhiteRook.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenWhiteKingInDangerJustAttackThisTileForWhiteRook.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "whiteRook" &&
              whenWhiteKingInDangerJustMoveThisTileForWhiterook?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "whiteRook" &&
              !whenWhiteKingInDangerJustMoveThisTileForWhiterook?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (crossDirection_whiteRook.crossDirection_whiteRook_name.includes(pieces?.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (crossDirection_whiteRook.crossDirection_whiteRook_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          } else if (!crossDirection_whiteRook.crossDirection_whiteRook_attack?.includes(e.target.parentNode.id)) {
            if (e.target.children[0]) {
              setLastSquare(null);
            } else if (
              crossDirection_whiteRook.crossDirection_whiteRook_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 9) === "Rook"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(e.target);
            } else if (
              !crossDirection_whiteRook.crossDirection_whiteRook_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 9) === "Rook"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(null);
            }
          }
        }
      } else if (straightDirection_whiteRook.straightDirection_whiteRook_name.includes(pieces.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (straightDirection_whiteRook.straightDirection_whiteRook_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          } else if (
            !straightDirection_whiteRook.straightDirection_whiteRook_attack?.includes(e.target.parentNode.id)
          ) {
            if (e.target.children[0]) {
              setLastSquare(null);
            } else if (
              straightDirection_whiteRook.straightDirection_whiteRook_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 9) === "Rook"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(e.target);
            } else if (
              !straightDirection_whiteRook.straightDirection_whiteRook_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 9) === "Rook"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(null);
            }
          }
        }
      }
    }
    //attack and move for blackRook
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 9) === "blackRook" &&
        !crossDirection_blackRook.crossDirection_blackRook_name.includes(pieces?.name) &&
        !straightDirection_blackRook.straightDirection_blackRook_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenBlackKingInDangerJustAttackThisTileForBlackRook.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenBlackKingInDangerJustAttackThisTileForBlackRook.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              whenBlackKingInDangerJustMoveThisTileForBlackrook?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              !whenBlackKingInDangerJustMoveThisTileForBlackrook?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (crossDirection_blackRook.crossDirection_blackRook_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (crossDirection_blackRook.crossDirection_blackRook_attack.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!crossDirection_blackRook.crossDirection_blackRook_attack.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              crossDirection_blackRook.crossDirection_blackRook_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              !crossDirection_blackRook.crossDirection_blackRook_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (straightDirection_blackRook.straightDirection_blackRook_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (straightDirection_blackRook.straightDirection_blackRook_attack.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!straightDirection_blackRook.straightDirection_blackRook_attack.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              straightDirection_blackRook.straightDirection_blackRook_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 9) === "blackRook" &&
              !straightDirection_blackRook.straightDirection_blackRook_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }
    //attack and move for whiteBishop
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 11) === "whiteBishop" &&
        !crossDirection_whiteBishop.crossDirection_whiteBishop_name.includes(pieces?.name) &&
        !straightDirection_whiteBishop.straightDirection_whiteBishop_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenWhiteKingInDangerJustAttackThisTileForWhiteBishop.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenWhiteKingInDangerJustAttackThisTileForWhiteBishop.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 11) === "whiteBishop" &&
              whenWhiteKingInDangerJustMoveThisTileForWhiteBishop.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "whiteBishop" &&
              !whenWhiteKingInDangerJustMoveThisTileForWhiteBishop.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (crossDirection_whiteBishop.crossDirection_whiteBishop_name.includes(pieces?.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (crossDirection_whiteBishop.crossDirection_whiteBishop_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          } else if (!crossDirection_whiteBishop.crossDirection_whiteBishop_attack?.includes(e.target.parentNode.id)) {
            if (e.target.children[0]) {
              setLastSquare(null);
            } else if (
              crossDirection_whiteBishop.crossDirection_whiteBishop_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 11) === "Bishop"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(e.target);
            } else if (
              !crossDirection_whiteBishop.crossDirection_whiteBishop_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 11) === "Bishop"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(null);
            }
          }
        }
      } else if (straightDirection_whiteBishop.straightDirection_whiteBishop_name.includes(pieces?.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (straightDirection_whiteBishop.straightDirection_whiteBishop_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          } else if (
            !straightDirection_whiteBishop.straightDirection_whiteBishop_attack?.includes(e.target.parentNode.id)
          ) {
            if (e.target.children[0]) {
              setLastSquare(null);
            } else if (
              straightDirection_whiteBishop.straightDirection_whiteBishop_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 11) === "Bishop"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(e.target);
            } else if (
              !straightDirection_whiteBishop.straightDirection_whiteBishop_move[0]?.includes(e.target.id) &&
              pieces?.name.slice(5, 11) === "Bishop"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(null);
            }
          }
        }
      }
    }
    //attack and move for blackBishop
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 11) === "blackBishop" &&
        !crossDirection_blackBishop.crossDirection_blackBishop_name.includes(pieces?.name) &&
        !straightDirection_blackBishop.straightDirection_blackBishop_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenBlackKingInDangerJustAttackThisTileForBlackBishop.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenBlackKingInDangerJustAttackThisTileForBlackBishop.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              whenBlackKingInDangerJustMoveThisTileForBlackBishop.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              !whenBlackKingInDangerJustMoveThisTileForBlackBishop.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (crossDirection_blackBishop.crossDirection_blackBishop_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (crossDirection_blackBishop.crossDirection_blackBishop_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!crossDirection_blackBishop.crossDirection_blackBishop_attack?.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              crossDirection_blackBishop.crossDirection_blackBishop_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              !crossDirection_blackBishop.crossDirection_blackBishop_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (straightDirection_blackBishop.straightDirection_blackBishop_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (straightDirection_blackBishop.straightDirection_blackBishop_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (
            !straightDirection_blackBishop.straightDirection_blackBishop_attack?.includes(e.target.parentNode.id)
          ) {
            if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              straightDirection_blackBishop.straightDirection_blackBishop_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "blackBishop" &&
              !straightDirection_blackBishop.straightDirection_blackBishop_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }
    //attack and move for whiteQueen
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 10) === "whiteQueen" &&
        !crossDirection_whiteQueen.crossDirection_whiteQueen_name.includes(pieces.name) &&
        !straightDirection_whiteQueen.straightDirection_whiteQueen_name.includes(pieces.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenWhiteKingInDangerJustAttackThisTileForWhiteQueen.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenWhiteKingInDangerJustAttackThisTileForWhiteQueen.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 10) === "whiteQueen" &&
              whenWhiteKingInDangerJustMoveThisTileForWhiteQueen.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 10) === "whiteQueen" &&
              !whenWhiteKingInDangerJustMoveThisTileForWhiteQueen.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (crossDirection_whiteQueen.crossDirection_whiteQueen_name.includes(pieces.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (crossDirection_whiteQueen.crossDirection_whiteQueen_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          }
        } else if (!crossDirection_whiteQueen.crossDirection_whiteQueen_attack?.includes(e.target.parentNode.id)) {
          if (e.target.children[0]) {
            setLastSquare(null);
          } else if (
            crossDirection_whiteQueen.crossDirection_whiteQueen_move[0]?.includes(e.target.id) &&
            pieces?.name.slice(5, 10) === "Queen"
          ) {
            // console.log(e.target.id);
            // console.log(e.target);
            setRemovingChildOfBlackSideByWhitePieces(null);
            setLastSquare(e.target);
          } else if (
            !crossDirection_whiteQueen.crossDirection_whiteQueen_move[0]?.includes(e.target.id) &&
            pieces?.name.slice(5, 10) === "Queen"
          ) {
            setRemovingChildOfBlackSideByWhitePieces(null);
            setLastSquare(null);
          }
        }
      } else if (straightDirection_whiteQueen.straightDirection_whiteQueen_name.includes(pieces.name)) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (straightDirection_whiteQueen.straightDirection_whiteQueen_attack?.includes(e.target.parentNode.id)) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          }
        } else if (
          !straightDirection_whiteQueen.straightDirection_whiteQueen_attack?.includes(e.target.parentNode.id)
        ) {
          if (e.target.children[0]) {
            setLastSquare(null);
          } else if (
            straightDirection_whiteQueen.straightDirection_whiteQueen_move[0]?.includes(e.target.id) &&
            pieces?.name.slice(5, 10) === "Queen"
          ) {
            // console.log(e.target.id);
            // console.log(e.target);
            setRemovingChildOfBlackSideByWhitePieces(null);
            setLastSquare(e.target);
          } else if (
            !straightDirection_whiteQueen.straightDirection_whiteQueen_move[0]?.includes(e.target.id) &&
            pieces?.name.slice(5, 10) === "Queen"
          ) {
            setRemovingChildOfBlackSideByWhitePieces(null);
            setLastSquare(null);
          }
        }
      }
    }
    //attack and move for blackQueen
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 10) === "blackQueen" &&
        !straightDirection_blackQueen.straightDirection_blackQueen_name.includes(pieces?.name) &&
        !crossDirection_blackQueen.crossDirection_blackQueen_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenBlackKingInDangerJustAttackThisTileForBlackQueen?.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenBlackKingInDangerJustAttackThisTileForBlackQueen?.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              whenBlackKingInDangerJustMoveThisTileForBlackQueen?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              !whenBlackKingInDangerJustMoveThisTileForBlackQueen?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (straightDirection_blackQueen.straightDirection_blackQueen_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (straightDirection_blackQueen.straightDirection_blackQueen_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (
            !straightDirection_blackQueen.straightDirection_blackQueen_attack?.includes(e.target.parentNode.id)
          ) {
            if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              straightDirection_blackQueen.straightDirection_blackQueen_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              !straightDirection_blackQueen.straightDirection_blackQueen_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (crossDirection_blackQueen.crossDirection_blackQueen_name.includes(pieces?.name)) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (crossDirection_blackQueen.crossDirection_blackQueen_attack?.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!crossDirection_blackQueen.crossDirection_blackQueen_attack?.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              crossDirection_blackQueen.crossDirection_blackQueen_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 10) === "blackQueen" &&
              !crossDirection_blackQueen.crossDirection_blackQueen_move[0]?.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }
    //attack and move for whiteKnight
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 11) === "whiteKnight" &&
        !straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_name.includes(pieces.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenWhiteKingInDangerJustAttackThisTileForWhiteKnight.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenWhiteKingInDangerJustAttackThisTileForWhiteKnight.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 11) === "whiteKnight" &&
              whenWhiteKingInDangerJustMoveThisTileForWhiteKnight.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "whiteKnight" &&
              !whenWhiteKingInDangerJustMoveThisTileForWhiteKnight.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      } else if (
        straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_name.includes(pieces.name)
      ) {
        if (boardRef.current.children[i].children[0].children[0]?.name.slice(0, 5) === "black") {
          if (
            straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_attack?.includes(
              e.target.parentNode.id
            )
          ) {
            // console.log(boardRef.current.children[i].children[0].id);
            if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
              setLastSquare(e.target.parentNode);
              setRemovingChildOfBlackSideByWhitePieces(e.target);
            }
          } else if (
            !straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_attack?.includes(
              e.target.parentNode.id
            )
          ) {
            if (e.target.children[0]) {
              setLastSquare(null);
            } else if (
              straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_move[0]?.includes(
                e.target.id
              ) &&
              pieces?.name.slice(5, 11) === "Knight"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(e.target);
            } else if (
              !straight_and_cross_direction_whiteKnight.straight_and_cross_direction_whiteKnight_move[0]?.includes(
                e.target.id
              ) &&
              pieces?.name.slice(5, 11) === "Knight"
            ) {
              setRemovingChildOfBlackSideByWhitePieces(null);
              setLastSquare(null);
            }
          }
        }
      }
    }
    //attack and move for blackKnight
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        pieces?.name?.slice(0, 11) === "blackKnight" &&
        !straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (whenBlackKingInDangerJustAttackThisTileForBlackKnight.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!whenBlackKingInDangerJustAttackThisTileForBlackKnight.includes(e.target.parentNode.id)) {
            if (
              pieces?.name.slice(0, 11) === "blackKnight" &&
              whenBlackKingInDangerJustMoveThisTileForBlackKnight.includes(e.target.id)
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "blackKnight" &&
              !whenBlackKingInDangerJustMoveThisTileForBlackKnight.includes(e.target.id)
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      } else if (
        straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_name.includes(pieces?.name)
      ) {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (
              straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_attack?.includes(
                e.target.parentNode.id
              )
            ) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (
            !straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_attack?.includes(
              e.target.parentNode.id
            )
          ) {
            if (
              pieces?.name.slice(0, 11) === "blackKnight" &&
              straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_move[0]?.includes(
                e.target.id
              )
            ) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (
              pieces?.name.slice(0, 11) === "blackKnight" &&
              !straight_and_cross_direction_blackKnight.straight_and_cross_direction_blackKnight_move[0]?.includes(
                e.target.id
              )
            ) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }
    //attack and move for whiteKing
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (pieces?.name?.slice(0, 9) === "whiteKing") {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "black") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (attackingWhiteKing.includes(e.target.parentNode.id)) {
              setRemovingChildOfBlackSideByWhitePieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!attackingWhiteKing.includes(e.target.parentNode.id)) {
            if (pieces?.name.slice(0, 9) === "whiteKing" && whiteKingMoveArray.includes(e.target.id)) {
              setLastSquare(e.target);
              setRemovingChildOfBlackSideByWhitePieces(null);
            } else if (pieces?.name.slice(0, 9) === "whiteKing" && !whiteKingMoveArray.includes(e.target.id)) {
              setLastSquare(null);
              setRemovingChildOfBlackSideByWhitePieces(null);
            }
          }
        }
      }
    }
    //attack and move for blackKing
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (pieces?.name?.slice(0, 9) === "blackKing") {
        if (boardRef?.current?.children[i]?.children[0]?.children[0]?.name?.slice(0, 5) === "white") {
          if (e.target.parentNode.id === boardRef.current.children[i].children[0].id) {
            if (attackingBlackKing.includes(e.target.parentNode.id)) {
              setRemovingChildOfWhiteSideByBlackPieces(e.target);
              setLastSquare(e.target.parentNode);
            }
          } else if (!attackingBlackKing.includes(e.target.parentNode.id)) {
            if (pieces?.name.slice(0, 9) === "blackKing" && blackKingMoveArray.includes(e.target.id)) {
              setLastSquare(e.target);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            } else if (pieces?.name.slice(0, 9) === "blackKing" && !blackKingMoveArray.includes(e.target.id)) {
              setLastSquare(null);
              setRemovingChildOfWhiteSideByBlackPieces(null);
            }
          }
        }
      }
    }

    //castling functions
    if (
      whiteShortCastling.okayToWhiteShortCastling == true &&
      whiteShortCastling.moveWhiteKingShortCastling === e.target.id &&
      pieces?.name === "whiteKing"
    ) {
      setLastSquare_casling(e.target);
    } else if (
      whiteShortCastling.okayToWhiteShortCastling == true &&
      whiteShortCastling.moveWhiteKingShortCastling !== e.target.id &&
      pieces?.name === "whiteKing"
    ) {
      setLastSquare_casling(null);
    }

    if (
      whiteLongCasling.okayToWhiteLongCastling == true &&
      whiteLongCasling.moveWhiteLongCastling === e.target.id &&
      pieces?.name == "whiteKing"
    ) {
      setLastSquare_casling(e.target);
    } else if (
      whiteLongCasling.okayToWhiteLongCastling == true &&
      whiteLongCasling.moveWhiteLongCastling !== e.target.id &&
      pieces?.name == "whiteKing"
    ) {
      setLastSquare_casling(null);
    }

    if (
      blackShortCastling.okayToBlackShortCastling == true &&
      blackShortCastling.moveBlackKingShortCastling === e.target.id &&
      pieces?.name === "blackKing"
    ) {
      setLastSquare_casling(e.target);
    } else if (
      blackShortCastling.okayToBlackShortCastling == true &&
      blackShortCastling.moveBlackKingShortCastling !== e.target.id &&
      pieces?.name === "blackKing"
    ) {
      setLastSquare_casling(null);
    }

    if (
      blackLongCasling.okayToBlackLongCastling == true &&
      blackLongCasling.moveBlackLongCastling === e.target.id &&
      pieces?.name === "blackKing"
    ) {
      setLastSquare_casling(e.target);
    } else if (
      blackLongCasling.okayToBlackLongCastling == true &&
      blackLongCasling.moveBlackLongCastling !== e.target.id &&
      pieces?.name === "blackKing"
    ) {
      setLastSquare_casling(null);
    }
  };

  const handleOnDragEnd = () => {
    if (lastSquare === null || lastSquare === undefined) {
      setLastSquare(lastSquare?.append(""));
    } else {
      setLastSquare(() => {
        if (pieces.name.slice(0, 5) === "white" && moveIndex % 2 === 0) {
          if (pieces?.name === "whiteRook1") {
            setWhiteRook1DidMove(true);
          } else if (pieces?.name === "whiteRook2") {
            setWhiteRook2DidMove(true);
          } else if (pieces.name === "whiteKing") {
            setWhiteKingDidMove(true);
          }
          lastSquare?.append(pieces);
          move_self_audio();
          setMoveIndex(moveIndex + 1);
        }
        if (pieces.name.slice(0, 5) === "black" && moveIndex % 2 === 1) {
          if (pieces?.name === "blackRook1") {
            setBlackRook1DidMove(true);
          } else if (pieces?.name === "blackRook2") {
            setBlackRook2DidMove(true);
          } else if (pieces.name === "blackKing") {
            setBlackKingDidMove(true);
          }

          lastSquare?.append(pieces);
          move_self_audio();
          setMoveIndex(moveIndex + 1);
        }

        //enpassant information states
        if (lastSquare.children[0]) {
          if (pieces.name === "whitePawn1" && lastSquare.id[0] == 3) {
            setWhitePawn1_enpassant(true);
          } else if (pieces.name === "whitePawn1" && lastSquare.id[0] == 4) {
            setWhitePawn1_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn2" && lastSquare.id[0] == 3) {
            setWhitePawn2_enpassant(true);
          } else if (pieces.name === "whitePawn2" && lastSquare.id[0] == 4) {
            setWhitePawn2_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn3" && lastSquare.id[0] == 3) {
            setWhitePawn3_enpassant(true);
          } else if (pieces.name === "whitePawn3" && lastSquare.id[0] == 4) {
            setWhitePawn3_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn4" && lastSquare.id[0] == 3) {
            setWhitePawn4_enpassant(true);
          } else if (pieces.name === "whitePawn4" && lastSquare.id[0] == 4) {
            setWhitePawn4_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn5" && lastSquare.id[0] == 3) {
            setWhitePawn5_enpassant(true);
          } else if (pieces.name === "whitePawn5" && lastSquare.id[0] == 4) {
            setWhitePawn5_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn6" && lastSquare.id[0] == 3) {
            setWhitePawn6_enpassant(true);
          } else if (pieces.name === "whitePawn6" && lastSquare.id[0] == 4) {
            setWhitePawn6_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn7" && lastSquare.id[0] == 3) {
            setWhitePawn7_enpassant(true);
          } else if (pieces.name === "whitePawn7" && lastSquare.id[0] == 4) {
            setWhitePawn7_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "whitePawn8" && lastSquare.id[0] == 3) {
            setWhitePawn8_enpassant(true);
          } else if (pieces.name === "whitePawn8" && lastSquare.id[0] == 4) {
            setWhitePawn8_enpassant_moveIndex(moveIndex);
          }

          if (pieces.name === "blackPawn1" && lastSquare.id[0] == 6) {
            setBlackPawn1_enpassant(true);
          } else if (pieces.name === "blackPawn1" && lastSquare.id[0] == 5) {
            setBlackPawn1_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn2" && lastSquare.id[0] == 6) {
            setBlackPawn2_enpassant(true);
          } else if (pieces.name === "blackPawn2" && lastSquare.id[0] == 5) {
            setBlackPawn2_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn3" && lastSquare.id[0] == 6) {
            setBlackPawn3_enpassant(true);
          } else if (pieces.name === "blackPawn3" && lastSquare.id[0] == 5) {
            setBlackPawn3_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn4" && lastSquare.id[0] == 6) {
            setBlackPawn4_enpassant(true);
          } else if (pieces.name === "blackPawn4" && lastSquare.id[0] == 5) {
            setBlackPawn4_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn5" && lastSquare.id[0] == 6) {
            setBlackPawn5_enpassant(true);
          } else if (pieces.name === "blackPawn5" && lastSquare.id[0] == 5) {
            setBlackPawn5_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn6" && lastSquare.id[0] == 6) {
            setBlackPawn6_enpassant(true);
          } else if (pieces.name === "blackPawn6" && lastSquare.id[0] == 5) {
            setBlackPawn6_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn7" && lastSquare.id[0] == 6) {
            setBlackPawn7_enpassant(true);
          } else if (pieces.name === "blackPawn7" && lastSquare.id[0] == 5) {
            setBlackPawn7_enpassant_moveIndex(moveIndex);
          }
          if (pieces.name === "blackPawn8" && lastSquare.id[0] == 6) {
            setBlackPawn8_enpassant(true);
          } else if (pieces.name === "blackPawn8" && lastSquare.id[0] == 5) {
            setBlackPawn8_enpassant_moveIndex(moveIndex);
          }
        }
      });

      if (removingChildOfBlackSideByWhitePieces && moveIndex % 2 === 0) {
        setLastSquare(lastSquare?.removeChild(removingChildOfBlackSideByWhitePieces));
        setRemovingChildOfBlackSideByWhitePieces(null);
        capture_audio();
        setMoveIndex(moveIndex + 1);
      }
      if (removingChildOfWhiteSideByBlackPieces && moveIndex % 2 === 1) {
        setLastSquare(lastSquare?.removeChild(removingChildOfWhiteSideByBlackPieces));
        setRemovingChildOfWhiteSideByBlackPieces(null);
        capture_audio();
        setMoveIndex(moveIndex + 1);
      }
    }

    if (removingBlackPawns_enpassant && moveIndex % 2 == 0) {
      setLastSquare_removingBlackPawns_enpassant(
        lastSquare_removingBlackPawns_enpassant?.removeChild(removingBlackPawns_enpassant)
      );
      setMoveIndex(moveIndex + 1);
      capture_audio();

      setRemovingBlackPawns_enpassant(null);
    }
    if (removingWhitePawns_enpassant && moveIndex % 2 == 1) {
      setLastSquare_removingWhitePawns_enpassant(
        lastSquare_removingWhitePawns_enpassant?.removeChild(removingWhitePawns_enpassant)
      );
      setMoveIndex(moveIndex + 1);
      capture_audio();

      setRemovingWhitePawns_enpassant(null);
    }

    //castling func
    if (lastSquare_castling == null || lastSquare_castling == undefined) {
      setLastSquare_casling(lastSquare_castling?.append(""));
    } else {
      setLastSquare_casling(() => {
        if (pieces.name.slice(0, 5) === "white" && moveIndex % 2 == 0) {
          lastSquare_castling?.append(pieces);
          castle_audio();
          setMoveIndex(moveIndex + 1);
        }
        if (pieces.name.slice(0, 5) === "black" && moveIndex % 2 == 1) {
          lastSquare_castling?.append(pieces);
          castle_audio();
          setMoveIndex(moveIndex + 1);
        }
      });
    }

    //enpassant func
    if (lastSquare_enpassant == null || lastSquare_enpassant == undefined) {
      setLastSquare_enpassant(lastSquare_enpassant?.append(""));
    } else {
      setLastSquare_enpassant(() => {
        if (pieces.name.slice(0, 5) === "white" && moveIndex % 2 == 0) {
          lastSquare_enpassant?.append(pieces);
          setMoveIndex(moveIndex + 1);
        }
        if (pieces.name.slice(0, 5) === "black" && moveIndex % 2 == 1) {
          lastSquare_enpassant?.append(pieces);
          setMoveIndex(moveIndex + 1);
        }
      });
    }

    //after castling, append the rook at the new tile
    if (lastSquare_castling?.id == "1g" && moveIndex % 2 == 0) {
      boardRef.current.children[61].children[0].append(boardRef.current.children[63].children[0].children[0]);
    } else if (lastSquare_castling?.id == "1c" && moveIndex % 2 == 0) {
      boardRef.current.children[59].children[0].append(boardRef.current.children[56].children[0].children[0]);
    } else if (lastSquare_castling?.id == "8g" && moveIndex % 2 == 1) {
      boardRef.current.children[5].children[0].append(boardRef.current.children[7].children[0].children[0]);
    } else if (lastSquare_castling?.id == "8c" && moveIndex % 2 == 1) {
      boardRef.current.children[3].children[0].append(boardRef.current.children[0].children[0].children[0]);
    }
  };

  return (
    <div className="App">
      <div className="board_bottom">
        <div className="board_left">
          <div className="board_left_border">
            <p>8</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <div className="board" ref={boardRef} onDragOver={handleOnDrop} onDragEnd={handleOnDragEnd}>
            {createBoard().map((item, index) => {
              return (
                <div key={index} onDragStart={handleOnDragStart}>
                  {item}
                </div>
              );
            })}
            <SelectingPiecePage
              allElementIDs={allElementIDs}
              boardRef={boardRef}
              setWhichPieceHasBeenSelectedAtLastTile_white={setWhichPieceHasBeenSelectedAtLastTile_white}
              setWhichPieceHasBeenSelectedAtLastTile_black={setWhichPieceHasBeenSelectedAtLastTile_black}
              promote_audio={promote_audio}
            />
          </div>
        </div>
        <div className="board_bottom_border">
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
          <p>e</p>
          <p>f</p>
          <p>g</p>
          <p>h</p>
        </div>
      </div>
      {(blackSideLoose || whiteSideLoose || draw_no_one_win) && (
        <ConclusionPage
          blackSideLoose={blackSideLoose}
          whiteSideLoose={whiteSideLoose}
          draw_no_one_win={draw_no_one_win}
          moveIndex={moveIndex}
        />
      )}
    </div>
  );
}

export default App;
