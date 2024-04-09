import capture from "./capture.mp3";
import castle from "./castle.mp3";
import game_end from "./game_end.mp3";
import move_self from "./move_self.mp3";
import promote from "./promote.mp3";
export const audio = () => {
  const move_self_audio = () => {
    let audio = new Audio(move_self);
    return audio.play();
  };

  const capture_audio = () => {
    let audio = new Audio(capture);
    return audio.play();
  };
  const castle_audio = () => {
    let audio = new Audio(castle);
    return audio.play();
  };

  const game_end_audio = () => {
    let audio = new Audio(game_end);
    return audio.play();
  };
  const promote_audio = () => {
    let audio = new Audio(promote);
    return audio.play();
  };

  return { move_self_audio, capture_audio, castle_audio, game_end_audio, promote_audio };
};
