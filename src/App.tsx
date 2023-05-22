import "./App.scss";
import { useAppselector } from "./store/store.ts";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer.tsx";
import TrackData from "./components/TrackData.tsx";
import { data } from "./assets/js/data.ts";
import TrackList from "./components/TrackList.tsx";
import AudioControls from "./components/AudioPlayer/AudioControls.tsx";

import jpg1 from "./assets/images/beat1.jpg";
// import jpg2 from "./assets/images/beat2.jpg";
// import jpg3 from "./assets/images/beat3.jpg";
// import jpg4 from "./assets/images/beat4.jpg";

function App() {
  const curTrack = useAppselector((state) => state.inputreduser.curentTrack);
  //   const imagesarr = [jpg1, jpg2, jpg3, jpg4];

  return (
    <>
      <div className="mainContainer">
        <div className="playerBody">
          <div className="topSection">
            <div className="curentTrack">
              <img src={jpg1} alt="track" />
              <div className="curentTrack__content">
                <TrackData
                  track={data[curTrack].track}
                  group={data[curTrack].group}
                  year={data[curTrack].year}
                />
                <AudioPlayer />
              </div>
            </div>
            <AudioControls />
          </div>
          <TrackList data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
