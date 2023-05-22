import { setIsRepiting, setIsVolume } from "../../store/TrackSlice";
import { useAppDispatch, useAppselector } from "../../store/store";
import { useState } from "react";

const AudioControls = () => {
  const { isRepiting, volume } = useAppselector((store) => store.inputreduser);
  const disp = useAppDispatch();

  const [isVoleme, setIsVoleme] = useState(false);

  const currentPercentage = volume ? `${(+volume / 1) * 100}%` : "0%";
  const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #96d683), color-stop(${currentPercentage}, #303030))
      `;

  return (
    <div className="player__audioControls">
      <svg
        onClick={() => {
          disp(setIsRepiting());
        }}
        className={isRepiting ? "active" : ""}
      >
        <use href={"/src/assets/images/" + "sprite.svg#repeat"}></use>
      </svg>

      <div
        className="setClolumeParant"
        onMouseEnter={() => {
          setIsVoleme(true);
        }}
        onMouseLeave={() => {
          setIsVoleme(false);
        }}
      >
        <svg>
          <use href={"/src/assets/images/" + "sprite.svg#sound"}></use>
        </svg>
        {isVoleme ? (
          <div className="setClolumeBox">
            <input
              className="setvolumeIcon"
              type="range"
              value={volume}
              step="0.05"
              min="0"
              max={1}
              onChange={(e) => {
                disp(setIsVolume(e.target.value));
              }}
              style={{ background: trackStyling }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AudioControls;
