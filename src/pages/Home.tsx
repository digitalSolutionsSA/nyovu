import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


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
