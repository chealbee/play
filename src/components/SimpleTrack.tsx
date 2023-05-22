import { FC } from "react";
import { IData } from "../assets/js/data";
import { useAppDispatch, useAppselector } from "../store/store";
import { setCurentTrack } from "../store/TrackSlice";
import imagelink from "../assets/images/beat1.jpg";

const SimpleTrack: FC<IData> = (props) => {
  const { genre, link, group, track, dur } = props;
  const [imgLInk] = link.split(".");

  const disp = useAppDispatch();
  const { curentTrack, isPlaying } = useAppselector(
    (state) => state.inputreduser
  );

  return (
    <div className="tarck" onClick={() => disp(setCurentTrack(props.id))}>
      <div className="tarck__img">
        <img src={imagelink.slice(0, -9) + imgLInk + ".jpg"} alt="tack img" />
      </div>
      <div className="tarck__info">
        <div className="tarck__author">{group}</div>
        <div className="tarck__name">{track}</div>
      </div>
      <div className="tarck__data">
        <div className="tarck__duration">{dur}</div>
        <div className="tarck__genre">{genre}</div>
        <div className="tarck__button">
          {curentTrack === props.id && isPlaying ? (
            <svg>
              <use href={imagelink.slice(0, -9) + "sprite.svg#pause"}></use>
            </svg>
          ) : (
            <svg>
              <use href={imagelink.slice(0, -9) + "sprite.svg#play"}></use>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleTrack;
