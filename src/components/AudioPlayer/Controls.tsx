import { FC } from "react";
import { useAppDispatch, useAppselector } from "../../store/store";
import { setIsPlaying } from "../../store/TrackSlice";
import imagelink from "../../assets/images/beat1.jpg";

const Controls: FC<IControls> = ({ onPrevClick, onNextClick }) => {
  const disp = useAppDispatch();
  const { isPlaying } = useAppselector((store) => store.inputreduser);
  return (
    <>
      <div className="player__butons">
        <svg onClick={onPrevClick}>
          <use href={imagelink.slice(0, -9) + "sprite.svg#arrow"}></use>
        </svg>

        {isPlaying ? (
          <svg onClick={() => disp(setIsPlaying(false))}>
            <use href={imagelink.slice(0, -9) + "sprite.svg#pause"}></use>
          </svg>
        ) : (
          <svg onClick={() => disp(setIsPlaying(true))}>
            <use href={imagelink.slice(0, -9) + "sprite.svg#play"}></use>
          </svg>
        )}

        <svg onClick={onNextClick}>
          <use href={imagelink.slice(0, -9) + "sprite.svg#arrow"}></use>
        </svg>
      </div>
    </>
  );
};

export default Controls;
