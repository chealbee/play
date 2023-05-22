import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
// import aduoi1 from "../../assets/audio/beat1.mp3";
// import aduoi2 from "../../assets/audio/beat2.mp3";
// import aduoi3 from "../../assets/audio/beat3.mp3";
// import aduoi4 from "../../assets/audio/beat4.mp3";

import { data } from "../../assets/js/data";
import { useAppDispatch, useAppselector } from "../../store/store";
import { setCurentTrack, setIsPlaying } from "../../store/TrackSlice";

const AudioPlayer = () => {
  const [trackProgress, setTrackProgress] = useState(0);

  const disp = useAppDispatch();
  const { curentTrack, isPlaying, isRepiting, volume } = useAppselector(
    (state) => state.inputreduser
  );

  const audioRef = useRef(
    new Audio("/src/assets/audio/" + data[curentTrack].link)
  );
  const intervalRef = useRef<number>();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    if (curentTrack - 1 < 0) {
      disp(setCurentTrack(data.length - 1));
    } else {
      disp(setCurentTrack(curentTrack - 1));
    }
  };

  const toNextTrack = () => {
    if (curentTrack < data.length - 1) {
      disp(setCurentTrack(curentTrack + 1));
    } else {
      disp(setCurentTrack(0));
    }
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended && !isRepiting) {
        toNextTrack();
      } else {
        isRepiting && audioRef.current.ended ? audioRef.current.play() : null;
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = +volume;
  }, [volume]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio("/src/assets/audio/" + data[curentTrack].link);
    setTrackProgress(audioRef.current.currentTime);
    audioRef.current.volume = +volume;

    if (isReady.current) {
      audioRef.current.play();
      disp(setIsPlaying(true));
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [curentTrack]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const onScrub = (value: string) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = +value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      disp(setIsPlaying(true));
    }
    startTimer();
  };

  function millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
  }

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #96d683), color-stop(${currentPercentage}, #303030))
    `;

  return (
    <div>
      <div className="player">
        <div className="player__timelIne timelIne">
          <div className="timelIne__line">
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={{ background: trackStyling }}
            />
          </div>
          <div className="timelIne__time">
            <div className="timelIne__Now">
              {trackProgress
                ? millisToMinutesAndSeconds(trackProgress * 1000)
                : "00:0"}
            </div>
            <div className="timelIne__duration">
              {duration ? millisToMinutesAndSeconds(duration * 1000) : "0:00"}
            </div>
          </div>
        </div>
      </div>

      <Controls onPrevClick={toPrevTrack} onNextClick={toNextTrack} />
    </div>
  );
};

export default AudioPlayer;
