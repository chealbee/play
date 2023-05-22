import { FC } from "react";
import { IData } from "../assets/js/data";
import { useAppDispatch, useAppselector } from "../store/store";
import { setCurentTrack } from "../store/TrackSlice";

import jpg1 from "../../public/images/beat1.jpg";
import jpg2 from "../../public/images/beat2.jpg";
import jpg3 from "../../public/images/beat3.jpg";
import jpg4 from "../../public/images/beat4.jpg";
import sprite from "../../public/images/sprite.svg";

const SimpleTrack: FC<IData> = (props) => {
  const { genre, group, track, dur, id } = props;

  const disp = useAppDispatch();
  const { curentTrack, isPlaying } = useAppselector(
    (state) => state.inputreduser
  );

  const imagesarr = [jpg1, jpg2, jpg3, jpg4];

  return (
    <div className="tarck" onClick={() => disp(setCurentTrack(props.id))}>
      <div className="tarck__img">
        <img src={imagesarr[id]} alt="tack img" />
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
              <use href={sprite + "#pause"}></use>
            </svg>
          ) : (
            <svg>
              <use href={sprite + "#play"}></use>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleTrack;
