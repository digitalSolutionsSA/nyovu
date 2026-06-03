import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "#000" }}>
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <Navbar />

        <main className="flex-1 pt-28 pb-24">
          <div className="mx-auto max-w-5xl px-6">

            {/* Header */}
            <div className="mb-16">
              <p
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] mb-5"
                style={{ color: "#FF8C00" }}
              >
                <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#FF8C00" }} />
                The Artist
              </p>
              <h1 className="leading-none font-black uppercase">
                <span className="block text-6xl md:text-8xl text-white" style={{ letterSpacing: "-0.02em" }}>ABOUT</span>
                <span
                  className="block text-6xl md:text-8xl italic"
                  style={{ letterSpacing: "-0.02em", color: "#FF8C00", textShadow: "0 0 40px rgba(255,140,0,0.3)" }}
                >
                  NYOVU
                </span>
              </h1>
            </div>

            {/* Top section — logo + bio */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

              {/* Logo */}
              <div
                className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
                style={{
                  background: "rgba(0,229,255,0.03)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  boxShadow: "0 0 80px rgba(255,0,204,0.08), 0 0 40px rgba(0,229,255,0.05)",
                }}
              >
                <img
                  src="/nyovu-logo.png"
                  alt="NYOVU"
                  style={{ width: "80%", height: "80%", objectFit: "contain", filter: "drop-shadow(0 0 30px rgba(0,229,255,0.3))" }}
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  NYOVU is a South African Afro-EDM artist fusing the raw energy of the dancefloor with
                  the soul of the continent. Rooted in Afro-house and Amapiano, NYOVU's sound is built
                  for festivals, clubs, and viral moments — with a female-led voice that commands every room.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Drawing from African languages and English, the music bridges cultures while keeping the
                  dancefloor united. Bright synths, deep bass, infectious crowd chants, and an undeniable
                  feel-good energy define every release.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Debut album <em style={{ color: "#FF8C00" }}>Dance Like Fire</em> (2026) signals the
                  arrival of a festival-ready force — nine tracks moving from Jozi's electric nights to
                  packed dancefloors across Africa and beyond.
                </p>

                {/* TikTok follow */}
                <a
                  href="https://www.tiktok.com/@nyovu.music?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full self-start transition-all duration-200 mt-2"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.14)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                  }}
                >
                  <TikTokIcon />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">Follow on TikTok</span>
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,229,255,0.1)", background: "rgba(0,229,255,0.08)" }}
            >
              {[
                { value: "9", label: "Tracks" },
                { value: "2026", label: "Debut Album" },
                { value: "145", label: "BPM" },
                { value: "ZA", label: "Origin" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center py-8 px-4"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                >
                  <div
                    className="text-4xl font-black mb-2"
                    style={{ color: "#00E5FF", textShadow: "0 0 20px rgba(0,229,255,0.5)" }}
                  >
                    {value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Genre tags + sound description */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: "rgba(255,0,204,0.04)", border: "1px solid rgba(255,0,204,0.12)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-5"
                style={{ color: "#FF00CC" }}
              >
                The Sound
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Afro-Futuristic Electronic Music built at the intersection of ancestral African rhythms and
                neon-drenched future soundscapes. Every track is engineered for the main stage — club-ready,
                festival-ready, and TikTok-ready.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Afro-EDM", "Amapiano", "Afro-house", "English", "Zulu", "145 BPM", "Female Vocal", "Club-Ready", "Festival-Ready"].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] rounded-full"
                    style={{
                      background: "rgba(255,0,204,0.1)",
                      border: "1px solid rgba(255,0,204,0.22)",
                      color: "#FF00CC",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
