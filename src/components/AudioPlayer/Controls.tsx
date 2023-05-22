import { FC } from "react";
import { useAppDispatch, useAppselector } from "../../store/store";
import { setIsPlaying } from "../../store/TrackSlice";

import sprite from "../../../public/images/sprite.svg";

const Controls: FC<IControls> = ({ onPrevClick, onNextClick }) => {
  const disp = useAppDispatch();
  const { isPlaying } = useAppselector((store) => store.inputreduser);
  return (
    <>
      <div className="player__butons">
        <svg onClick={onPrevClick}>
          <use href={sprite + "#arrow"}></use>
        </svg>

        {isPlaying ? (
          <svg onClick={() => disp(setIsPlaying(false))}>
            <use href={sprite + "#pause"}></use>
          </svg>
        ) : (
          <svg onClick={() => disp(setIsPlaying(true))}>
            <use href={sprite + "#play"}></use>
          </svg>
        )}

        <svg onClick={onNextClick}>
          <use href={sprite + "#arrow"}></use>
        </svg>
      </div>
    </>
  );
};

export default Controls;
