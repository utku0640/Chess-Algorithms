import whitePawns from "./chess pieces/beyaz_piyon.png";
import blackPawns from "./chess pieces/siyah_piyon.png";
import whiteQueen from "./chess pieces/beyaz_vezir.png";
import blackQueen from "./chess pieces/siyah_vezir.png";
import whiteRook from "./chess pieces/beyaz_kale.png";
import blackRook from "./chess pieces/siyah_kale.png";
import whiteBishop from "./chess pieces/beyaz_fil.png";
import blackBishop from "./chess pieces/siyah_fil.png";
import whiteKnight from "./chess pieces/beyaz_at.png";
import blackKnight from "./chess pieces/siyah_at.png";
import whiteKing from "./chess pieces/beyaz_şah.png";
import blackKing from "./chess pieces/siyah_şah.png";

export const createBoard = () => {
  const vertical = ["8", "7", "6", "5", "4", "3", "2", 1];
  const hotizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const chessArray = [];
  for (let q = 0; q < 8; q++) {
    chessArray.push({
      image: blackPawns,
      x: 1,
      y: q,
      name: `blackPawn${q + 1}`,
      kind: "black",
    });
  }
  for (let q = 0; q < 8; q++) {
    chessArray.push({
      image: whitePawns,
      x: 6,
      y: q,
      name: `whitePawn${q + 1}`,
      kind: "white",
    });
  }
  chessArray.push({
    image: whiteQueen,
    x: 7,
    y: 3,
    name: "whiteQueen",
    kind: "white",
  });

  chessArray.push({
    image: blackQueen,
    x: 0,
    y: 3,
    name: "blackQueen",
    kind: "black",
  });

  chessArray.push({
    image: whiteKing,
    x: 7,
    y: 4,
    name: "whiteKing",
    kind: "white",
  });

  chessArray.push({
    image: blackKing,
    x: 0,
    y: 4,
    name: "blackKing",
    kind: "black",
  });

  chessArray.push({
    image: whiteBishop,
    x: 7,
    y: 5,
    name: "whiteBishop1",
    kind: "white",
  });
  chessArray.push({
    image: whiteBishop,
    x: 7,
    y: 2,
    name: "whiteBishop2",
    kind: "white",
  });

  chessArray.push({
    image: blackBishop,
    x: 0,
    y: 5,
    name: "blackBishop1",
    kind: "black",
  });
  chessArray.push({
    image: blackBishop,
    x: 0,
    y: 2,
    name: "blackBishop2",
    kind: "black",
  });

  chessArray.push({
    image: whiteRook,
    x: 7,
    y: 7,
    name: "whiteRook1",
    kind: "white",
  });
  chessArray.push({
    image: whiteRook,
    x: 7,
    y: 0,
    name: "whiteRook2",
    kind: "white",
  });

  chessArray.push({
    image: blackRook,
    x: 0,
    y: 7,
    name: "blackRook1",
    kind: "black",
  });
  chessArray.push({
    image: blackRook,
    x: 0,
    y: 0,
    name: "blackRook2",
    kind: "black",
  });

  chessArray.push({
    image: whiteKnight,
    x: 7,
    y: 1,
    name: "whiteKnight1",
    kind: "white",
  });
  chessArray.push({
    image: whiteKnight,
    x: 7,
    y: 6,
    name: "whiteKnight2",
    kind: "white",
  });

  chessArray.push({
    image: blackKnight,
    x: 0,
    y: 6,
    name: "blackKnight1",
    kind: "black",
  });
  chessArray.push({
    image: blackKnight,
    x: 0,
    y: 1,
    name: "blackKnight2",
    kind: "black",
  });

  let squares = [];
  for (let i = 0; i < vertical.length; i++) {
    for (let k = 0; k < hotizontal.length; k++) {
      let image;
      let name;
      let kind;
      chessArray.map((item, index) => {
        if (item.x === i && item.y === k) {
          image = item.image;
          name = item.name;
          kind = item.kind;
        }
      });
      let num = i + k;
      if (num % 2 == 0) {
        squares.push(
          <div className="white_square" id={vertical[i] + hotizontal[k]}>
            {image ? <img src={image} style={{ width: "80px", height: "80px" }} name={name} kind={kind} /> : null}
          </div>
        );
      } else {
        squares.push(
          <div className="black_square" id={vertical[i] + hotizontal[k]}>
            {image ? <img src={image} style={{ width: "80px", height: "80px" }} name={name} kind={kind} /> : null}
          </div>
        );
      }
    }
  }
  return squares;
};
