export const data = [
  {
    id: 0,
    link: "beat1.mp3",
    genre: "rock",
    track: "Enemy",
    group: "Imagine Dragons",
    year: 2019,
    dur: "2:48",
  },
  {
    id: 1,
    link: "beat2.mp3",
    genre: "Indie rock",
    track: "Next to Me",
    group: "Imagine Dragons",
    year: 2021,
    dur: "3:34",
  },
  {
    id: 2,
    link: "beat3.mp3",
    genre: "Rap",
    track: "Rammlied",
    group: "Rammstein",
    year: 2009,
    dur: "2:30",
  },
  {
    id: 3,
    link: "beat4.mp3",
    genre: "Rap",
    track: "The Search",
    group: "NF",
    year: 2018,
    dur: "0:22",
  },
];

export interface IData {
  id: number;
  link: string;
  genre: string;
  track: string;
  group: string;
  year: number;
  dur: string;
}
