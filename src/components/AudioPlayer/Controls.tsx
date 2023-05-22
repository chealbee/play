import { FC } from "react";
import { useAppDispatch, useAppselector } from "../../store/store";
import { setIsPlaying } from "../../store/TrackSlice";

import sprite from "../../assets/images/sprite.svg";

const Controls: FC<IControls> = ({ onPrevClick, onNextClick }) => {
  const disp = useAppDispatch();
  const { isPlaying } = useAppselector((store) => store.inputreduser);
  return (
    <>
      <div className="player__butons">
        <svg onClick={onPrevClick}>
          <use href={"/src/assets/images/" + "sprite.svg#arrow"}></use>
        </svg>

        {isPlaying ? (
          <svg onClick={() => disp(setIsPlaying(false))}>
            <use href={"/src/assets/images/" + "sprite.svg#pause"}></use>
          </svg>
        ) : (
          <svg onClick={() => disp(setIsPlaying(true))}>
            <use href={"/src/assets/images/" + "sprite.svg#play"}></use>
          </svg>
        )}

        <svg onClick={onNextClick}>
          <use href={"/src/assets/images/" + "sprite.svg#arrow"}></use>
        </svg>
      </div>
    </>
  );
};

export default Controls;
