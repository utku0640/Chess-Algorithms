import React, { useState } from "react";
import whiteQueen from "./chess pieces/beyaz_vezir.png";
import whiteRook from "./chess pieces/beyaz_kale.png";
import whiteKnight from "./chess pieces/beyaz_at.png";
import whiteBishop from "./chess pieces/beyaz_fil.png";

import blackQueen from "./chess pieces/siyah_vezir.png";
import blackRook from "./chess pieces/siyah_kale.png";
import blackKnight from "./chess pieces/siyah_at.png";
import blackBishop from "./chess pieces/siyah_fil.png";

const SelectingPiecePage = ({
  allElementIDs,
  boardRef,
  setWhichPieceHasBeenSelectedAtLastTile_white,
  setWhichPieceHasBeenSelectedAtLastTile_black,
  promote_audio,
}) => {
  const [whiteQueenIndex, setWhiteQueenIndex] = useState(2);
  const [whiteRookIndex, setWhiteRookIndex] = useState(3);
  const [whiteBishopIndex, setWhiteBishopIndex] = useState(3);
  const [whiteKnightIndex, setWhiteKnightIndex] = useState(3);

  const [blackQueenIndex, setBlackQueenIndex] = useState(2);
  const [blackRookIndex, setBlackRookIndex] = useState(3);
  const [blackBishopIndex, setBlackBishopIndex] = useState(3);
  const [blackKnightIndex, setBlackKnightIndex] = useState(3);
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
  let whitePawnID_at_last_tile;

  let openSelectPage_white = false;
  for (let i = 0; i < whitePawns_id.length; i++) {
    let id0 = +whitePawns_id[i][1][0];
    if (id0 === 8) {
      whitePawnID_at_last_tile = whitePawns_id[i][1];
      openSelectPage_white = true;
    }
  }
  let id_of_new_white_piece;
  for (let i = 0; i < 64; i++) {
    if (boardRef?.current?.children[i]?.children[0]?.id == whitePawnID_at_last_tile) {
      id_of_new_white_piece = i;
    }
  }

  let blackPawnID_at_last_tile;

  let openSelectPage_black = false;
  for (let i = 0; i < blackPawns_id.length; i++) {
    let id0 = +blackPawns_id[i][1][0];
    if (id0 === 1) {
      blackPawnID_at_last_tile = blackPawns_id[i][1];
      openSelectPage_black = true;
    }
  }
  let id_of_new_black_piece;
  for (let i = 0; i < 64; i++) {
    if (boardRef?.current?.children[i]?.children[0]?.id == blackPawnID_at_last_tile) {
      id_of_new_black_piece = i;
    }
  }

  const pawnWillBeWhiteQueen = () => {
    let domWhiteQueen = document.createElement("img");
    domWhiteQueen.src = whiteQueen;
    domWhiteQueen.name = `whiteQueen${whiteQueenIndex}`;
    domWhiteQueen.style.width = "80px";
    domWhiteQueen.style.height = "80px";
    domWhiteQueen.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_white({
      pieceName: domWhiteQueen,
      pieceID: id_of_new_white_piece,
      isNewWhitePieceComing: true,
    });

    openSelectPage_white = false;
    setWhiteQueenIndex(whiteQueenIndex + 1);
    promote_audio();
  };
  const pawnWillBeWhiteBishop = () => {
    let domWhiteBishop = document.createElement("img");
    domWhiteBishop.src = whiteBishop;
    domWhiteBishop.name = `whiteBishop${whiteBishopIndex}`;
    domWhiteBishop.style.width = "80px";
    domWhiteBishop.style.height = "80px";
    domWhiteBishop.draggable = true;
    setWhichPieceHasBeenSelectedAtLastTile_white({
      pieceName: domWhiteBishop,
      pieceID: id_of_new_white_piece,
      isNewWhitePieceComing: true,
    });
    openSelectPage_white = false;
    setWhiteBishopIndex(whiteBishopIndex + 1);
    promote_audio();
  };
  const pawnWillBeWhiteKnight = () => {
    let domWhiteKnight = document.createElement("img");
    domWhiteKnight.src = whiteKnight;
    domWhiteKnight.name = `whiteKnight${whiteKnightIndex}`;
    domWhiteKnight.style.width = "80px";
    domWhiteKnight.style.height = "80px";
    domWhiteKnight.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_white({
      pieceName: domWhiteKnight,
      pieceID: id_of_new_white_piece,
      isNewWhitePieceComing: true,
    });
    openSelectPage_white = false;
    setWhiteKnightIndex(whiteKnightIndex + 1);
    promote_audio();
  };
  const pawnWillBeWhiteRook = () => {
    let domWhiteRook = document.createElement("img");
    domWhiteRook.src = whiteRook;
    domWhiteRook.name = `whiteRook${whiteRookIndex}`;
    domWhiteRook.style.width = "80px";
    domWhiteRook.style.height = "80px";
    domWhiteRook.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_white({
      pieceName: domWhiteRook,
      pieceID: id_of_new_white_piece,
      isNewWhitePieceComing: true,
    });
    openSelectPage_white = false;
    setWhiteRookIndex(whiteRookIndex + 1);
    promote_audio();
  };

  const pawnWillBeBlackQueen = () => {
    let domBlackQueen = document.createElement("img");
    domBlackQueen.src = blackQueen;
    domBlackQueen.name = `blackQueen${blackQueenIndex}`;
    domBlackQueen.style.width = "80px";
    domBlackQueen.style.height = "80px";
    domBlackQueen.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_black({
      pieceName: domBlackQueen,
      pieceID: id_of_new_black_piece,
      isNewBlackPieceComing: true,
    });

    openSelectPage_black = false;
    setBlackQueenIndex(blackQueenIndex + 1);
    promote_audio();
  };
  const pawnWillBeBlackBishop = () => {
    let domBlackBishop = document.createElement("img");
    domBlackBishop.src = blackBishop;
    domBlackBishop.name = `blackBishop${blackBishopIndex}`;
    domBlackBishop.style.width = "80px";
    domBlackBishop.style.height = "80px";
    domBlackBishop.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_black({
      pieceName: domBlackBishop,
      pieceID: id_of_new_black_piece,
      isNewBlackPieceComing: true,
    });

    openSelectPage_black = false;
    setBlackBishopIndex(blackBishopIndex + 1);
    promote_audio();
  };
  const pawnWillBeBlackKnight = () => {
    let domBlackKnight = document.createElement("img");
    domBlackKnight.src = blackKnight;
    domBlackKnight.name = `blackKnight${blackKnightIndex}`;
    domBlackKnight.style.width = "80px";
    domBlackKnight.style.height = "80px";
    domBlackKnight.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_black({
      pieceName: domBlackKnight,
      pieceID: id_of_new_black_piece,
      isNewBlackPieceComing: true,
    });

    openSelectPage_black = false;
    setBlackKnightIndex(blackKnightIndex + 1);
    promote_audio();
  };
  const pawnWillBeBlackRook = () => {
    let domBlackRook = document.createElement("img");
    domBlackRook.src = blackKnight;
    domBlackRook.name = `blackRook${blackRookIndex}`;
    domBlackRook.style.width = "80px";
    domBlackRook.style.height = "80px";
    domBlackRook.draggable = true;

    setWhichPieceHasBeenSelectedAtLastTile_black({
      pieceName: domBlackRook,
      pieceID: id_of_new_black_piece,
      isNewBlackPieceComing: true,
    });

    openSelectPage_black = false;
    setBlackRookIndex(blackRookIndex + 1);
    promote_audio();
  };

  return (
    (openSelectPage_white || openSelectPage_black) && (
      <div className="selecting_page_container">
        <div
          className="selecting_page"
          style={{
            left: `${openSelectPage_white ? id_of_new_white_piece * 80 : (id_of_new_black_piece - 56) * 80}px`,
            top: `${openSelectPage_white ? "0px" : "290px"}`,
          }}
        >
          <div className="selecting_page_white_side" style={{ display: `${openSelectPage_white ? "block" : "none"}` }}>
            <button onClick={() => pawnWillBeWhiteQueen()}>
              <img src={whiteQueen} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeWhiteBishop()}>
              <img src={whiteBishop} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeWhiteKnight()}>
              <img src={whiteKnight} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeWhiteRook()}>
              <img src={whiteRook} style={{ width: "80px", height: "80px" }} />
            </button>
          </div>

          <div className="selecting_page_black_side" style={{ display: `${openSelectPage_black ? "block" : "none"}` }}>
            <button onClick={() => pawnWillBeBlackQueen()}>
              <img src={blackQueen} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeBlackBishop()}>
              <img src={blackBishop} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeBlackKnight()}>
              <img src={blackKnight} style={{ width: "80px", height: "80px" }} />
            </button>
            <button onClick={() => pawnWillBeBlackRook()}>
              <img src={blackRook} style={{ width: "80px", height: "80px" }} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SelectingPiecePage;
