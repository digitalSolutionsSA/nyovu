import { Link } from "react-router-dom";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const SOCIALS = [
  { label: "Spotify",     icon: <SpotifyIcon />,     href: "https://open.spotify.com/album/6q6LgR2DyO2Ku2ys73zfH4?si=j9eWG2cCSbGoETPgCCt9_A",  color: "#1DB954" },
  { label: "Apple Music", icon: <AppleMusicIcon />,  href: "https://music.apple.com/za/artist/nyovu/6775645553",                                      color: "#fff"    },
  { label: "YouTube",     icon: <YouTubeIcon />,     href: "https://music.youtube.com/playlist?list=OLAK5uy_ntuWQ1YQJ66yY4C2OYFi86FVgEKlI_Dyk&si=_jxH4n2spwS2ZBtQ", color: "#FF0000" },
  { label: "TikTok",      icon: <TikTokIcon />,      href: "https://www.tiktok.com/@nyovu.music?is_from_webapp=1&sender_device=pc",                   color: "#fff"    },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,229,255,0.15)",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="/nyovu-logo.png"
          alt="NYOVU"
          style={{ height: "44px", width: "auto", filter: "drop-shadow(0 0 8px rgba(0,229,255,0.35))" }}
        />
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-6 md:gap-8">
        {[
          { to: "/", label: "Home", color: "#00E5FF" },
          { to: "/music", label: "Music", color: "#FF00CC" },
          { to: "/about", label: "About", color: "#FF8C00" },
          { to: "/shop", label: "Shop", color: "#00E5FF" },
        ].map(({ to, label, color }) => (
          <Link
            key={to}
            to={to}
            className="text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = color; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Social icons */}
      <div className="hidden md:flex items-center gap-2">
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = s.color;
              el.style.borderColor = s.color;
              el.style.background = `${s.color}20`;
              el.style.transform = "scale(1.12)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "rgba(255,255,255,0.45)";
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.background = "rgba(255,255,255,0.06)";
              el.style.transform = "scale(1)";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
