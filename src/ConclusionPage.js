import React from "react";

const ConclusionPage = ({ blackSideLoose, whiteSideLoose, draw_no_one_win, moveIndex }) => {
  return (
    <div className="modal_container">
      <div className="modal">
        <h1>{blackSideLoose && "White Won"}</h1>
        <h1>{whiteSideLoose && "Black Won"}</h1>
        <h1>{draw_no_one_win && "DRAW!!"}</h1>
        <h2>After {moveIndex} Movement</h2>
        <button onClick={() => window.location.reload()} className="button">
          New Game
        </button>
      </div>
    </div>
  );
};

export default ConclusionPage;
