import { FC } from "react";

const TrackData: FC<{ group: string; track: string; year: number }> = ({
  group,
  track,
  year,
}) => (
  <div className="curentTrack__data">
    <div>
      <div className="curentTrack__athor">{group}</div>
      <div className="curentTrack__name">{track}</div>
    </div>
    <div className="curentTrack__year">{year}</div>
  </div>
);

export default TrackData;
