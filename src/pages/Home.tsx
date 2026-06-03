import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Streaming platform icons
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(255,0,204,0.15), rgba(255,140,0,0.1))",
          border: "1px solid rgba(0,229,255,0.2)",
        }}
      >
        <span style={{ fontSize: "4rem", opacity: 0.3 }}>♪</span>
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

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "#000" }}>
      <Background />
      <Navbar />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero — full viewport, two-column split */}
        <main
          className="flex-1 flex items-center relative overflow-hidden"
          style={{ minHeight: "100vh", paddingTop: "72px" }}
        >
          <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-10 md:py-0" style={{ minHeight: "calc(100vh - 72px)" }}>

              {/* LEFT — Slogan + platforms */}
              <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-7">

                {/* Slogan */}
                <h1
                  className="font-black uppercase leading-none text-center md:text-left"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6rem)",
                    letterSpacing: "-0.01em",
                    background: "linear-gradient(135deg, #00E5FF 0%, #FF00CC 55%, #FF8C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 30px rgba(0,229,255,0.4)) drop-shadow(0 0 60px rgba(255,0,204,0.25))",
                  }}
                >
                  Rhythm<br />Without<br />Limits
                </h1>

                {/* CTA buttons */}
                <div className="flex items-stretch gap-3 w-full justify-center md:justify-start" style={{ maxWidth: "clamp(280px, 45vw, 560px)" }}>
                  <Link
                    to="/music"
                    className="flex-1 text-center py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #00E5FF 0%, #FF00CC 55%, #FF8C00 100%)",
                      color: "#000",
                      borderRadius: "6px",
                      boxShadow: "0 0 20px rgba(0,229,255,0.3), 0 0 40px rgba(255,0,204,0.15)",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    Explore Music
                  </Link>
                  <Link
                    to="/shop"
                    className="flex-1 text-center py-3.5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-200"
                    style={{
                      background: "#000",
                      color: "#fff",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)"; }}
                  >
                    Shop
                  </Link>
                </div>

                {/* Taglines */}
                <div className="flex flex-col items-center md:items-start gap-1.5">
                  <p
                    className="text-sm font-bold tracking-[0.2em] uppercase text-center md:text-left"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    Afro-Futuristic Electronic Music
                  </p>
                  <p
                    className="text-sm tracking-[0.08em] text-center md:text-left"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    🌍 African rhythms × Neon futures
                  </p>
                </div>

              </div>

              {/* RIGHT — Latest release */}
              <div className="flex-1 flex flex-col items-center md:items-end justify-center gap-6">
                <p
                  className="text-xs font-bold uppercase tracking-[0.35em] flex items-center gap-3 self-start md:self-auto"
                  style={{ color: "#FF8C00" }}
                >
                  <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#FF8C00" }} />
                  Latest Release
                </p>

                {/* Album cover */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    width: "min(380px, 85vw)",
                    aspectRatio: "1/1",
                    boxShadow: "0 0 60px rgba(255,0,204,0.35), 0 0 120px rgba(0,229,255,0.15), 0 30px 80px rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <CoverImage src="/covers/dance-like-fire.png" alt="Dance Like Fire" />

                  {/* Album badge overlay */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] rounded-full"
                    style={{ background: "rgba(255,140,0,0.25)", border: "1px solid rgba(255,140,0,0.5)", color: "#FF8C00" }}
                  >
                    Album
                  </span>
                </div>

                {/* Title + year */}
                <div className="text-center md:text-right" style={{ width: "min(380px, 85vw)" }}>
                  <h2 className="text-2xl font-black leading-tight"
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "none",
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
                    }}
                  >Dance Like Fire</h2>
                  <p className="text-xs mt-1 font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>NYOVU &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; 9 Tracks</p>
                </div>

              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
