import { IData } from "../assets/js/data";
import SimpleTrack from "./SimpleTrack";
import { FC } from "react";

interface IDataAray {
  data: IData[];
}
const TrackList: FC<IDataAray> = ({ data }) => {
  return (
    <div className="trackList">
      {data.map((ell) => (
        <SimpleTrack {...ell} key={ell.id} />
      ))}
    </div>
  );
};

export default TrackList;
