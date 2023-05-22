import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  curentTrack: number;
  isPlaying: boolean;
  isRepiting: boolean;
  volume: string;
}
const initialState: IState = {
  curentTrack: 0,
  isPlaying: false,
  isRepiting: false,
  volume: "0.2",
};

const trackSlice = createSlice({
  name: "trackSlice",
  initialState,
  reducers: {
    setCurentTrack: (state, { payload }: PayloadAction<number>) => {
      state.curentTrack = payload;
    },
    setIsPlaying: (state, { payload }: PayloadAction<boolean>) => {
      state.isPlaying = payload;
    },
    setIsRepiting: (state) => {
      state.isRepiting = !state.isRepiting;
    },
    setIsVolume: (state, { payload }: PayloadAction<string>) => {
      state.volume = payload;
    },
  },
});

export default trackSlice.reducer;
export const { setCurentTrack, setIsPlaying, setIsRepiting, setIsVolume } =
  trackSlice.actions;
