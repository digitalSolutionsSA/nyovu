import { useState, useMemo } from "react";
import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { SONGS } from "../data/songs";
import type { Song } from "../data/songs";

// ── Types ─────────────────────────────────────────────────────────────────────

type ReleaseType = "Single" | "Album";

type Release = {
  id: string;
  title: string;
  type: ReleaseType;
  year: string;
  cover: string | undefined;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  tracks: Song[];
};

type FilterTab = "All" | "Singles" | "Albums";

// ── Icons ────────────────────────────────────────────────────────────────────

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// ── Build releases from songs ─────────────────────────────────────────────────

function buildReleases(songs: Song[]): Release[] {
  const releases: Release[] = [];
  const albumMap = new Map<string, Song[]>();
  const albumOrder: string[] = [];

  for (const song of songs) {
    if (song.album) {
      if (!albumMap.has(song.album)) {
        albumOrder.push(song.album);
        albumMap.set(song.album, []);
      }
      albumMap.get(song.album)!.push(song);
    } else {
      releases.push({
        id: song.id,
        title: song.title,
        type: "Single",
        year: song.year,
        cover: song.coverUrl,
        spotifyUrl: song.spotifyUrl ?? "#",
        appleMusicUrl: song.appleMusicUrl ?? "#",
        youtubeUrl: song.youtubeUrl,
        tracks: [song],
      });
    }
  }

  for (const albumName of albumOrder) {
    const tracks = albumMap.get(albumName)!;
    releases.push({
      id: `album-${albumName}`,
      title: albumName,
      type: "Album",
      year: tracks[0].year,
      cover: tracks[0].coverUrl,
      spotifyUrl: tracks[0].spotifyUrl ?? "#",
      appleMusicUrl: tracks[0].appleMusicUrl ?? "#",
      youtubeUrl: tracks[0].albumUrl ?? tracks[0].youtubeUrl,
      tracks,
    });
  }

  return releases.sort((a, b) => Number(b.year) - Number(a.year));
}

// ── Cover image with fallback ─────────────────────────────────────────────────

function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(255,0,204,0.1), rgba(255,140,0,0.08))",
        }}
      >
        <span style={{ fontSize: "3rem", opacity: 0.25 }}>♪</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover block"
      onError={() => setFailed(true)}
    />
  );
}

// ── Release Card ──────────────────────────────────────────────────────────────

function ReleaseCard({ release }: { release: Release }) {
  const [hovered, setHovered] = useState(false);
  const isAlbum = release.type === "Album";

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: "rgba(0,229,255,0.04)",
        border: `1px solid ${hovered ? "rgba(0,229,255,0.4)" : "rgba(0,229,255,0.15)"}`,
        boxShadow: hovered ? "0 0 30px rgba(0,229,255,0.1), 0 8px 30px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div className="relative w-full aspect-square overflow-hidden">
        <CoverImage src={release.cover ?? ""} alt={release.title} />

        {/* Badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full"
          style={
            isAlbum
              ? { background: "rgba(255,140,0,0.25)", border: "1px solid rgba(255,140,0,0.5)", color: "#FF8C00" }
              : { background: "rgba(0,229,255,0.2)", border: "1px solid rgba(0,229,255,0.4)", color: "#00E5FF" }
          }
        >
          {release.type}
        </span>
      </div>

      {/* Info */}
      <div className="px-4 pt-4 pb-3">
        <h3 className="text-base font-bold text-white leading-tight truncate mb-0.5">{release.title}</h3>
        <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{release.year}</p>

        {/* Track list for albums */}
        {release.type === "Album" && release.tracks.length > 1 && (
          <ol className="mb-3 space-y-0.5">
            {release.tracks.map((track, i) => (
              <li key={track.id} className="flex items-center gap-2">
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "9px", minWidth: "14px" }}>{i + 1}.</span>
                <a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate transition-colors duration-150"
                  style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#00E5FF"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  {track.title}
                </a>
              </li>
            ))}
          </ol>
        )}

        {/* Streaming buttons */}
        <div className="flex items-center gap-2">
          <a
            href={release.spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{ background: "rgba(29,185,84,0.15)", color: "#1DB954", border: "1px solid rgba(29,185,84,0.3)" }}
            aria-label="Spotify"
          >
            <SpotifyIcon />
          </a>
          <a
            href={release.appleMusicUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
            aria-label="Apple Music"
          >
            <AppleMusicIcon />
          </a>
          <a
            href={release.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{ background: "rgba(255,0,0,0.15)", color: "#FF4444", border: "1px solid rgba(255,0,0,0.25)" }}
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const TABS: FilterTab[] = ["All", "Singles", "Albums"];

export default function Music() {
  const allReleases = useMemo(() => buildReleases(SONGS), []);
  const [filter, setFilter] = useState<FilterTab>("All");

  const filtered = useMemo(() => {
    if (filter === "Singles") return allReleases.filter(r => r.type === "Single");
    if (filter === "Albums")  return allReleases.filter(r => r.type === "Album");
    return allReleases;
  }, [allReleases, filter]);

  const counts: Record<FilterTab, number> = useMemo(() => ({
    All:     allReleases.length,
    Singles: allReleases.filter(r => r.type === "Single").length,
    Albums:  allReleases.filter(r => r.type === "Album").length,
  }), [allReleases]);

  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "#000" }}>
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <Navbar />

        <main className="flex-1 pt-24 pb-12">
          <div className="mx-auto max-w-6xl px-6">

            {/* Header */}
            <div className="mb-12">
              <p
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] mb-5"
                style={{ color: "#00E5FF" }}
              >
                <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#00E5FF" }} />
                Full Catalogue
              </p>
              <h1 className="leading-none font-black uppercase">
                <span className="block text-6xl md:text-8xl text-white" style={{ letterSpacing: "-0.02em" }}>THE</span>
                <span
                  className="block text-6xl md:text-8xl italic"
                  style={{ letterSpacing: "-0.02em", color: "#FF00CC", textShadow: "0 0 40px rgba(255,0,204,0.3)" }}
                >
                  MUSIC
                </span>
              </h1>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-1 mb-10">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative"
                  style={{ color: filter === tab ? "#fff" : "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer" }}
                >
                  {tab}
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: filter === tab ? "#00E5FF" : "rgba(255,255,255,0.12)",
                      color: filter === tab ? "#000" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {counts[tab]}
                  </span>
                  {filter === tab && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "#00E5FF" }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.875rem" }}>
                No releases found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map(release => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
