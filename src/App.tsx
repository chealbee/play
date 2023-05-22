import "./App.scss";
import { useAppselector } from "./store/store.ts";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer.tsx";
import TrackData from "./components/TrackData.tsx";
import { data } from "./assets/js/data.ts";
import TrackList from "./components/TrackList.tsx";
import AudioControls from "./components/AudioPlayer/AudioControls.tsx";

function App() {
  const curTrack = useAppselector((state) => state.inputreduser.curentTrack);

  return (
    <>
      <div className="mainContainer">
        <div className="playerBody">
          <div className="topSection">
            <div className="curentTrack">
              <img
                src={
                  "/src/assets/images/" +
                  data[curTrack].link.split(".")[0] +
                  ".jpg"
                }
                alt="track"
              />
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
