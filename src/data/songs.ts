export type Song = {
  id: string;
  title: string;
  artist: string;
  year: string;
  genre?: string;
  album?: string;
  albumUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl: string;
  coverUrl?: string;
};

const CHANNEL = "https://www.youtube.com/channel/NYOVU_PLACEHOLDER";
const COVER = (file: string) => `/covers/${file}`;

export const SONGS: Song[] = [

  // ── Dance Like Fire — Album (2026) ────────────────────────────────────────
  {
    id: "dance-like-fire",
    title: "Dance Like Fire",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    albumUrl: "https://music.youtube.com/playlist?list=OLAK5uy_ntuWQ1YQJ66yY4C2OYFi86FVgEKlI_Dyk&si=_jxH4n2spwS2ZBtQ",
    spotifyUrl: "https://open.spotify.com/album/6q6LgR2DyO2Ku2ys73zfH4?si=j9eWG2cCSbGoETPgCCt9_A",
    appleMusicUrl: "https://music.apple.com/za/artist/nyovu/6775645553",
    youtubeUrl: "https://music.youtube.com/playlist?list=OLAK5uy_ntuWQ1YQJ66yY4C2OYFi86FVgEKlI_Dyk&si=_jxH4n2spwS2ZBtQ",
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "jozi-after-dark",
    title: "Jozi After Dark",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "midnight-ubuntu",
    title: "Midnight Ubuntu",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "neon-hearts",
    title: "Neon Hearts",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "nobody-going-home-tonight",
    title: "Nobody Going Home Tonight",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "one-more-round",
    title: "One More Round",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "siyaphakama",
    title: "Siyaphakama",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "vuka",
    title: "Vuka!",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
  {
    id: "weekend-wethu",
    title: "Weekend Wethu",
    artist: "NYOVU",
    year: "2026",
    genre: "Afro-EDM",
    album: "Dance Like Fire",
    youtubeUrl: CHANNEL,
    coverUrl: COVER("dance-like-fire.png"),
  },
];
